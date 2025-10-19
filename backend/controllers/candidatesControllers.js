const Candidate = require("../models/candidateModel");

const addCandidate = async (req, res) => {
  try {
    const { name, email, phone, jobTitle } = req.body;
    
    if (!name || !email || !phone || !jobTitle) {
      return res.status(400).json({ message: "All fields are required." });
    }
    const candidate = new Candidate({ name, email, phone, jobTitle });
    const saved = await candidate.save();
    res.status(201).json({message:"candidate created successfully", saved});
  } catch (err) {
    return res.status(400).json({ message: "something went wrong", err });
  }
};

const getCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.status(200).json({message : "All candidates are...", candidates});
  } catch (err) {
    return res.status(500).json({ message: "something went wrong", err });
  }

};

const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!["Pending", "Reviewed", "Hired"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }
    const candidate = await Candidate.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    if (!candidate)
      return res.status(404).json({ message: "Candidate not found" });
    res.json(candidate);
  } catch (err) {
    return res.status(400).json({ message: "something went wrong", err });
  }
};

const deleteCandidate = async (req, res) => {
  try {
    const { id } = req.params;
    const candidate = await Candidate.findByIdAndDelete(id);
    if (!candidate) return res.status(404).json({ message: "Candidate not found" });
    res.json({ message: "Deleted", id });
  } catch (err) {
    return res.status(400).json({ message: "something went wrong", err });
  }
};




module.exports = { addCandidate, getCandidates, updateStatus, deleteCandidate,  }
