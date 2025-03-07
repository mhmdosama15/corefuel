import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";

const SPOONACULAR_URL = "https://api.spoonacular.com/recipes/complexSearch";
export const generateMotivationalQuote = async (
  goal,
  phase,
  struggle,
  activityLevel
) => {
  const genAI = new GoogleGenerativeAI(`${process.env.GEMINI_KEY}`);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `Motivate me with a motivational quote based on goal: ${goal}, phase: ${phase}, struggle: ${struggle}, activity level: ${activityLevel}.`;

  const result = await model.generateContent(prompt);
  return result.response.text();
};

export const getFoodInfo = async (query) => {
  try {
    const response = await axios.get(`${SPOONACULAR_URL}/complexSearch`, {
      params: {
        query,
        addRecipeInformation: true,
        addRecipeInstructions: true,
        addRecipeNutrition: true,
        apiKey: process.env.SPOONACULAR_KEY,
        number: 10,
      },
    });
  } catch (error) {}
};
