const httpRequest = async (url, options = {}) => {
  const response = await fetch(url, options);
  return await response.json();
};

export function getRequest(url) {
  return httpRequest(url);
}

export const createRequest = (url, data) => {
  const options = {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  return httpRequest(url, options);
};

export function updateRequest(url, id, data) {
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  return httpRequest(`${url}/${id}`, options);
}

export function deleteRequest(url, id) {
  const options = {
    method: "DELETE",
  };
  return httpRequest(`${url}/${id}`, options);
}
