import React, { useContext } from "react";
import { CandidateContext } from "../context/CandidateContext";

export default function SearchBar() {
  const { state, dispatch } = useContext(CandidateContext);
  const { searchQuery, candidates } = state;

  const handleChange = (e) => {
    dispatch({ type: "SET_SEARCH", payload: e.target.value });
  };

  const filteredCount = candidates.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
  ).length;

  return (
    <div className="search-bar">
      <input
        placeholder="Search by name or job title..."
        value={searchQuery}
        onChange={handleChange}
      />
      <p>{filteredCount} results</p>
    </div>
  );
}
