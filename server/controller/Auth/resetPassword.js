// controller/Auth/resetPassword.js
const UserModel = require("../../models/user.models");

const resetPassword = async (req, res, next) => {
  try {
    const { Email, otp, newPassword } = req.body;

    const user = await UserModel.findOne({ Email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.resetOTP !== parseInt(otp) || user.otpExpiry < Date.now()) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    user.password = newPassword;
    user.resetOTP = undefined;
    user.otpExpiry = undefined;
    await user.save();

    return res.status(200).json({ success: true, message: "Password reset successfully" });

  } catch (error) {
    next(error);
    console.error("Reset password error:", error);
  }
};

module.exports = resetPassword;
