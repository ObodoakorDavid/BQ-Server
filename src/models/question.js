import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  topic: {
    type: mongoose.Types.ObjectId,
    ref: "Topic",
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  askedBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  comments: [
    {
      text: String,
      by: {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    },
  ],
});

const Question = mongoose.model("Question", questionSchema);

export default Question;
