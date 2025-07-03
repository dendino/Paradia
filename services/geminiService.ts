
import { GoogleGenAI } from "@google/genai";

// L'environnement d'exécution est censé fournir process.env.API_KEY.
// Initialisation directe du client AI conformément aux directives.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBusinessStrategy = async (businessProblem: string): Promise<string> => {
  try {
    const prompt = `Vous êtes un consultant expert en automatisation et e-commerce pour l'entreprise Paradia. Un client potentiel décrit son problème ci-dessous. En vous basant sur ce problème, suggérez une stratégie de haut niveau (en 3-4 phrases claires) que Paradia pourrait mettre en œuvre. Mentionnez des outils pertinents comme Make.com, N8N, Python, ou des stratégies e-commerce spécifiques. Gardez un ton professionnel, concis et utile. Encadrez votre réponse comme une idée préliminaire pour une future consultation.

Problème du client : "${businessProblem}"`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-04-17",
      contents: prompt,
      config: {
        temperature: 0.7,
        topP: 1,
        topK: 32,
        maxOutputTokens: 200,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Error generating business strategy:", error);
    return "Désolé, une erreur est survenue lors de la communication avec le service d'IA. Veuillez réessayer plus tard.";
  }
};
