const Case = require("../models/Case");

exports.getCases = async (req, res) => {

  const cases = await Case.find()
    .populate("customer_id")
    .populate("assigned_to");

  res.json(cases);
};

exports.createCase = async (req, res) => {

  const newCase = new Case(req.body);

  await newCase.save();

  res.json(newCase);
};

exports.updateCase = async (req, res) => {

  const updated = await Case.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updated);
};