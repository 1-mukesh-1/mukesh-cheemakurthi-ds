import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let aiClient: GoogleGenAI | null = null;

export const initializeGenAI = () => {
  let apiKey: string | undefined;
  
  try {
    // Safely attempt to access process.env.API_KEY
    // This prevents ReferenceError in environments where process is not defined
    apiKey = process.env.API_KEY;
  } catch (error) {
    console.error("Error accessing process.env:", error);
  }

  if (!apiKey) {
    console.error("API_KEY is missing from environment variables.");
    return null;
  }

  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

export const sendMessageToGemini = async (
  history: { role: string; parts: { text: string }[] }[],
  newMessage: string
): Promise<string> => {
  const ai = initializeGenAI();
  
  if (!ai) {
    return "Error: API Key not configured. Please check your environment variables.";
  }

  try {
    // We use a fresh chat session for simplicity in this stateless demo, 
    // but typically you'd maintain the chat object. 
    // Here we reconstruct history for the stateless request or start a chat.
    const chat = ai.chats.create({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text;
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm having trouble connecting to my brain right now. Please try again later.";
  }
};