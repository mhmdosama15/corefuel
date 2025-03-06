import { GoogleGenerativeAI } from "@google/generative-ai";

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
