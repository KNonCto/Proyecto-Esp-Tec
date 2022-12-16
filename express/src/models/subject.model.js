import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  urlImage: {
    type: String,
    required: true,
  },
  evaluations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Evaluation",
    },
  ],
});

const subjectModel = mongoose.model("Subject", subjectSchema);

export default subjectModel;
