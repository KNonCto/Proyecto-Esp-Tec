import Subject from "../models/subject.model.js";

async function getSubjects(req, res) {
  const subjects = await Subject.find();
  return res.status(200).send({ subjects });
}

async function getSubject(req, res) {
  const subjectId = req.params.id;

  const subject = await Subject.findById(subjectId);
  return res.status(200).send({ subject });
}

async function createSubject(req, res) {
  try {
    const createdSubject = await Subject.create({
      name: req.body.name,
      urlImage: req.body.urlImage,
      evaluations: req.body.evaluations,
    });
    return res.status(201).send({ response: createdSubject });
  } catch (error) {
    return res.status(500).send({ error });
  }
}

export { getSubjects, getSubject, createSubject };
