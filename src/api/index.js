async function httpRequest(url, options = {}) {
  const response = await fetch(url, options);
  return await response.json();
}

export const createRequest = (url, data) => {
  const options = {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  return httpRequest(url, options);
};
