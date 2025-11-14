// Fix: Removed unused and deprecated `GenerateContentRequest` and `Part` imports.
import { GoogleGenAI, Chat } from "@google/genai";
import { ChatMessage } from '../types';

let ai: GoogleGenAI | null = null;
let chat: Chat | null = null;

const getAI = (): GoogleGenAI => {
    if (!ai) {
        if (!process.env.API_KEY) {
            throw new Error("API_KEY environment variable not set");
        }
        ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }
    return ai;
}

const initializeChat = (): Chat => {
    const genAI = getAI();
    return genAI.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: "You are a friendly and helpful virtual assistant for an online restaurant called 'Go Kitchen'. Your role is to assist customers with their questions about the menu, ingredients, special offers, and ordering process. The menu includes a variety of international dishes and a special section for Nigerian cuisine. All prices are listed in Nigerian Naira (₦). Be concise, polite, and focus on providing accurate information. Do not answer questions that are not related to the restaurant.",
        },
    });
};

export const getChatbotResponse = async (
    newMessage: string, 
    history: ChatMessage[]
): Promise<string> => {
    if (!chat) {
        chat = initializeChat();
    }
    
    try {
        const result = await chat.sendMessage({ message: newMessage });
        return result.text;
    } catch (error) {
        console.error("Error sending message to Gemini:", error);
        // In case of an error, reset the chat session
        chat = null;
        return "I'm sorry, I encountered an issue. Please try asking your question again.";
    }
};