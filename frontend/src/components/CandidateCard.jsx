import React, { useContext } from "react";
import { CandidateContext } from "../context/CandidateContext";

export default function CandidateCard({ candidate }) {
  const { updateStatus, deleteCandidate } = useContext(CandidateContext);

  return (
    <div className="candidate-card">
      <div>
        <h3>{candidate.name}</h3>
        <p><b>Job:</b> {candidate.jobTitle}</p>
        <p><b>Email:</b> {candidate.email}</p>
        <p><b>Phone:</b> {candidate.phone}</p>
      </div>
      <div>
        <label>Status: </label>
        <select
          value={candidate.status}
          onChange={(e) => updateStatus(candidate._id, e.target.value)}
        >
          <option>Pending</option>
          <option>Reviewed</option>
          <option>Hired</option>
        </select>
        <button className="danger" onClick={() => deleteCandidate(candidate._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
