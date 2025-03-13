export const createMetrics = async () => {
  try {
    console.log("hello");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error creating metrics" });
  }
};

// BMR Mifflin formulas
export const calculateBMR = (gender, weight, height, age) => {
  let BMR;
  if (gender === "male") {
    BMR = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    BMR = 10 * weight + 6.25 * height - 5 * age - 161;
  }
  return BMR;
};

// TDEE(Total Daily Energy Expenditure)
export const calculateTDEE = (BMR, exerciseLevel) => {
  const activityFactor = {
    not_very_active: 1.2,
    lightly_active: 1.375,
    active: 1.55,
    very_active: 1.725,
  };
  return BMR * activityFactor[exerciseLevel];
};

export const getCalorieIntake = (goal, tdee) => {
  switch (goal) {
    case "lose_weight":
      return tdee - 500;
    case "maintain_weight":
      return tdee;
    case "gain_weight":
      return tdee + 250;
    case "gain_muscle":
      return tdee + 300;
    case "increase_step_count":
      return tdee;
    case "fit_body":
      return tdee - 250;
    case "shred":
      return tdee - 500;
    default:
      return tdee;
  }
};

export const calculateDailyGoals = (calorieTarget, weight) => {
  // Default macro split: 50% carbs, 30% fats, 20% protein
  const protein = Math.round(weight * 1.6); // 1.6 g/kg body weight
  const proteinCalories = protein * 4; // 1 g protein = 4 kcal
  const remainingCalories = calorieTarget - proteinCalories;

  // Split remaining calories between carbs and fats
  const carbsCalories = remainingCalories * 0.6; // 60% of remaining calories for carbs
  const fatsCalories = remainingCalories * 0.4; // 40% of remaining calories for fats

  const carbs = Math.round(carbsCalories / 4); // 1 g carbs = 4 kcal
  const fats = Math.round(fatsCalories / 9); // 1 g fats = 9 kcal

  // Default sodium and sugar goals
  const sodium = 2300; // FDA upper limit
  const sugar = Math.round((calorieTarget * 0.1) / 4); // 10% of calories from sugar (WHO guideline)

  return {
    calories: Math.round(calorieTarget),
    protein,
    carbs,
    fats,
    sodium,
    sugar,
  };
};
