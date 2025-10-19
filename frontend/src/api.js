const BASE_URL = "https://candidate-referral-system.onrender.com";

export async function getCandidates() {
  const res = await fetch(`${BASE_URL}/candidates/get-candidates`);
  if (!res.ok) throw new Error("Failed to fetch candidates");
  return res.json();
}

export async function createCandidate(data) {
  const res = await fetch(`${BASE_URL}/candidates/create-candidate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create candidate");
  return res.json();
}

export async function updateStatus(id, status) {
  const res = await fetch(`${BASE_URL}/candidates/${id}/status`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  if (!res.ok) throw new Error("Failed to update status");
  return res.json();
}

export async function deleteCandidate(id) {
  const res = await fetch(`${BASE_URL}/candidates/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete candidate");
  return res.json();
}
