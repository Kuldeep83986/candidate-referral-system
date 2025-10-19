import React, { createContext, useReducer, useEffect } from "react";
import { reducer, initialState } from "./reducer";
import * as api from "../api";

export const CandidateContext = createContext();

export function CandidateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadCandidates = async () => {
    dispatch({ type: "LOADING" });
    try {
      const all_data = await api.getCandidates();
      // console.log(all_data.candidates);
      const data = all_data.candidates;
      console.log(data)
      dispatch({ type: "SET_CANDIDATES", payload: data });
    } catch (err) {
      dispatch({ type: "ERROR", payload: err.message });
    }
  };

  const addCandidate = async (formData) => {
    try {
      const newCandidate = await api.createCandidate(formData);
      dispatch({ type: "ADD_CANDIDATE", payload: newCandidate });
    } catch (err) {
      dispatch({ type: "ERROR", payload: err.message });
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const updated = await api.updateStatus(id, status);
      dispatch({ type: "UPDATE_STATUS", payload: updated });
    } catch (err) {
      dispatch({ type: "ERROR", payload: err.message });
    }
  };

  const deleteCandidate = async (id) => {
    try {
      await api.deleteCandidate(id);
      dispatch({ type: "DELETE_CANDIDATE", payload: id });
    } catch (err) {
      dispatch({ type: "ERROR", payload: err.message });
    }
  };

  useEffect(() => {
    loadCandidates();
  }, []);

  return (
    <CandidateContext.Provider
      value={{
        state,
        dispatch,
        loadCandidates,
        addCandidate,
        updateStatus,
        deleteCandidate,
      }}
    >
      {children}
    </CandidateContext.Provider>
  );
}
