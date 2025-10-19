import React, { useState, useContext } from "react";
import { CandidateContext } from "../context/CandidateContext";
import { useNavigate } from "react-router-dom";

export default function ReferralForm() {
  const { addCandidate } = useContext(CandidateContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    jobTitle: "",
  });
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.jobTitle) {
      setMsg("All fields are required!");
      return;
    }
    await addCandidate(form);
    setMsg("Candidate added!");
    setForm({ name: "", email: "", phone: "", jobTitle: "" });
    navigate("/dashboard");
    window.location.reload();
  };

  return (
    <div className="card">
      <h2>Refer a Candidate</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
        <input name="jobTitle" placeholder="Job Title" value={form.jobTitle} onChange={handleChange} />
        <button type="submit">Submit</button>
        {msg && <p style={{color:"red"}}>{msg}</p>}
      </form>
    </div>
  );
}
