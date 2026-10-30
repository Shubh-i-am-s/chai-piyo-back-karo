import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    videofile: {
      type: String, //claudonary
    },
    thumbnail: {
      type: String, //cladinary
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
videoSchema.plugin(mongooseAggregatePaginate);
export const Video = mongoose.model("video", videoSchema);
