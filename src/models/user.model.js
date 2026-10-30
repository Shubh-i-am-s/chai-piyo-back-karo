import mongoose from "mongoose";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    refreshToken: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    fullname: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },
    avatar: {
      type: String, //claudinary link
      required: true,
    },
    coverImage: {
      type: String,
    },
    wactHistory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
  },
  {
    timestamps: true,
  }
);
//this function bcrypt the password before saving but before bcrypting unnecessarily check if the password is chnaged and if changed then bcrypt
userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  this.password = bcrypt.hashSync(this.password, 10);
});

//this check if password correct is correct or not. we compare user entered password and alrready this stored password anddddd database query hai isliye async await
userSchema.methods.isPasswordCorrect = async function (password) {
  await bcrypt.compare(password, this.password);
};

export const User = mongoose.model("user", userSchema);

//generateAccessTokens and generateRefereshToken
//required 3 things
//1.payload --> accessTkn have high payload ....... refreshTkn have less payload as it is refreshed in long time duration and hence less data is easy to store as we just need to identify the user
//2. secret: proces.env.accTkn and refTkn
//3.expireIn:

userschema.methods.generateAccessToken = function () {
  jwt.sign(
    {
      id: this._id,
      email: this.email,
      username: this.username,
      fullname: this.fullname,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

userschema.methods.generateRefreshToken = function () {
  jwt.sign(
    {
      id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};
