const BASE_URL = 'https://enigmatic-anchorage-21289.herokuapp.com';

type RequestMethod = 'GET';

function request<T>(url: string, method: RequestMethod = 'GET'): Promise<T> {
  const options: RequestInit = {method};

  return fetch(BASE_URL + url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    })
    .catch((error) => console.log(error));
}

export const client = {
  get: <T>(url: string) => request<T>(url),
};
