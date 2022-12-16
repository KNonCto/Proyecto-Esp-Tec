import Evaluation from "../models/evaluation.model.js";

async function getEvaluations(req, res) {
  const evaluations = await Evaluation.find();
  return res.status(200).send({ evaluations });
}

async function createEvaluation(req, res) {
  try {
    const createdEvaluation = await Evaluation.create({
      name: req.body.name,
      date: req.body.date,
      grade: req.body.grade,
    });
    return res.status(201).send({ response: createdEvaluation });
  } catch (error) {
    return res.status(500).send({ error });
  }
}

export { getEvaluations, createEvaluation };
