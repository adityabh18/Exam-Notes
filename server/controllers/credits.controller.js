import UserModel from "../models/user.model.js";


export const buyCredits = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.userId)
    const { credits, planName } = req.body;

    if (!credits || !planName) {
      return res.status(400).json({
        success: false,
        message: "Credits and plan name are required",
      });
    }

    const user = await UserModel.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.credits += Number(credits);

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Credits added successfully",
      credits: user.credits,
      purchasedPlan: planName,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: `Failed to buy credits ${error.message}`,
    });
  }
};