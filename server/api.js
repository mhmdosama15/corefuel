import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const EDAMAM_API = "https://api.edamam.com/api/recipes/v2?&type=public";
const EDAMAM_ACCOUNT_USER = process.env.EDAMAM_ACCOUNT_USER;
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
    const response = await axios.get(`${EDAMAM_API}`, {
      params: {
        q: query,
        app_id: process.env.EDAMAM_APP_ID,
        app_key: process.env.EDAMAM_KEY,
        from: 0,
        to: 10,
      },
      headers: {
        "Edamam-Account-User": EDAMAM_ACCOUNT_USER,
      },
    });
    return response.data.hits
      .map((recipe) => extractRecipeData(recipe))
      .slice(0, 10);
  } catch (error) {
    console.log(error);
  }
};

const extractRecipeData = (recipe) => {
  let calories, fat, sodium, carbs, sugar, image, title, mealType;
  if (recipe.recipe) {
    calories = recipe.recipe.calories / recipe.recipe.yield || 0;
    title = recipe.recipe.label || "Unknown Title";
    image = recipe.recipe.image || "";
    mealType = recipe.recipe.mealType || "Unknown Meal Type";
    const nutrients = recipe.recipe.totalNutrients || {};

    fat = nutrients.FAT
      ? nutrients.FAT.quantity + " " + nutrients.FAT.unit
      : "N/A";
    sodium = nutrients.NA
      ? nutrients.NA.quantity + " " + nutrients.NA.unit
      : "N/A";
    carbs = nutrients.CHOCDF
      ? nutrients.CHOCDF.quantity + " " + nutrients.CHOCDF.unit
      : "N/A";
    sugar = nutrients.SUGAR
      ? nutrients.SUGAR.quantity + " " + nutrients.SUGAR.unit
      : "N/A";
  }
  return {
    title,
    image,
    calories,
    fat,
    sodium,
    carbs,
    sugar,
    mealType,
  };
};
