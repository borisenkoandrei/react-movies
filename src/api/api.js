export const searchMovies = ({ request, apiKey, typeMovie, year, page }) => {
  return fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&s=${request}&page=${page}&type=${typeMovie}&y=${year}`
  )
    .then(response => response.json())
    .then(data => {
      if (data.Error) {
        throw new Error(data.Error);
      } else {
        return { data };
      }
    })
    .catch(error => ({ error }));
};

export function checkApiKey(apiKey) {
  return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=1`)
    .then(response => response.json())
    .then(data => ({ data }))
    .catch(error => ({ error }));
}
