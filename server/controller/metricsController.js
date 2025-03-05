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
