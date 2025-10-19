import React, { useContext } from "react";
import { CandidateContext } from "../context/CandidateContext";
import CandidateCard from "./CandidateCard";
import SearchBar from "./SearchBar";

export default function Dashboard() {
  const { state } = useContext(CandidateContext);
  const { candidates, searchQuery } = state;

  const filteredCandidates = candidates.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );
  

  return (
    <div>
      <h2>Referred Candidates</h2>
      <SearchBar />

      <div className="grid">
        {filteredCandidates.length > 0 ? (
          filteredCandidates.map((c) => (
            <CandidateCard key={c._id} candidate={c} />
          ))
        ) : (
          <p>No matching candidates found.</p>
        )}
      </div>
    </div>
  );
}
