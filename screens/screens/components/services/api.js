const BASE_URL = 'http://localhost:5000/devices';

export const getDevices = async () => {
  const res = await fetch(BASE_URL);
  return await res.json();
};

export const addDevice = async (device) => {
  await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(device)
  });
};

export const toggleDevice = async (id) => {
  await fetch(`${BASE_URL}/${id}/toggle`, { method: 'PUT' });
};
