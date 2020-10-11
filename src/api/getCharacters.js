const URL = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=d7d724bacd105f1994d4de80a83ee5c3&hash=22df4498c9bd71196fb0d4a825a6b7c6&limit=10';

const getCharacters = () => fetch(URL)
  .then(response => response.json()).then(result => {
    return result.data.results;
  }).catch(err => {
    console.error('Failed to fetch characters', err);
  });

export default getCharacters