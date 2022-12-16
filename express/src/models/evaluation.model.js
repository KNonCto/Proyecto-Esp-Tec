import mongoose from "mongoose";

const evaluationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  grade: {
    type: mongoose.Schema.Types.Decimal128,
    require: true,
  },
});

const evaluationModel = mongoose.model("Evaluation", evaluationSchema);

export default evaluationModel;
