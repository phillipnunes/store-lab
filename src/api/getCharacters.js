const URL = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=d7d724bacd105f1994d4de80a83ee5c3&hash=22df4498c9bd71196fb0d4a825a6b7c6&limit=10';

const getCharacters = () => fetch(URL)
  .then(res => {
    if(res.ok) {
      return res.json().then(data => data.data.results)
    }

    return res.json().then(json => {
      throw json
    })
  })

export default getCharacters