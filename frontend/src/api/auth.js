// Helper for API calls (proxy works in CRA or Vite)
const API_URL = '/api/auth';

export async function signup(name, email, password) {
  const res = await fetch(`${API_URL}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  });
  return res.json();
}

export async function login(email, password) {
  const res = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}

export async function getProfile(token) {
  const res = await fetch(`${API_URL}/profile`, {
    headers: { 'x-auth-token': token },
  });
  return res.json();
}
