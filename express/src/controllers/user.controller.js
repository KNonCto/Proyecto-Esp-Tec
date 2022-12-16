import User from "../models/user.model.js";

async function getUsers(req, res) {
  const users = await User.find().populate("subjects");
  return res.status(200).send({ users });
}

async function getUser(req, res) {
  try {
    const user = await User.findById(req.params.id).populate("subjects");
    return res.status(200).send({ user });
  } catch (error) {
    return res.status(500).send({ error });
  }
}

export { getUsers, getUser };
