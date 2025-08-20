
fetch("https://swapi.py4e.com/api/people/4/")
  .then(res => res.json())
  .then(char=> {
    return fetch(char.homeworld).then(res => res.json());
  })
  .then(planet => {
    console.log( planet.name);
  })
  .catch(err => console.error(err));
