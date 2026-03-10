// controller/Auth/forgotPassword.js
const UserModel = require("../../models/user.models");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

const forgotPassword = async (req, res, next) => {
  try {
    const { Email } = req.body;

    const user = await UserModel.findOne({ Email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);
    const expiry = Date.now() + 5 * 60 * 1000; // 5 min validity

    user.resetOTP = otp;
    user.otpExpiry = expiry;
    await user.save();

    // Mail config
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "batrajiya94@gmail.com", // apna gmail
        pass: "your-app-password-1223626"     // App Password (not normal password)
      },
    });

    await transporter.sendMail({
      from: "batrajiya94@gmail.com",
      to: Email,
      subject: "Password Reset OTP",
      text: `Your OTP is ${otp}. It is valid for 5 minutes.`,
    });

    return res.status(200).json({ success: true, message: "OTP sent to email" });

  } catch (error) {
    next(error);
    console.error("Forgot password error:", error);
  }
};

module.exports = forgotPassword;
