const API_KEY = "vhxZFF3FXLU5sSVtN4bbYlu8UrIjN185MnFVKx40";
const API_URL = "https://api.nasa.gov/planetary/apod";

// Utility to fetch data from a service with url
export default fetchData = async (urlParams) => {
  // urlParams son los parámetros opcionales que se pueden pedir
  try {
    const apiUrl = urlParams && urlParams.length > 0 // Se valida si urlParams existe y su tamaño es mayor a 0
      ? `${API_URL}?api_key=${API_KEY}${urlParams}`
      : `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
