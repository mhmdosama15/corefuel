export const createMetrics = async () => {
  try {
    console.log("hello");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error creating metrics" });
  }
};
