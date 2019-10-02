import axios from 'axios';

export default async function() {
  const results = await axios.get(`https://swapi.co/api/people`);

  const characters = results.data.results.map(character => {
    const slug = character.name.toLowerCase().replace(' ', '-');
    const gender =
      character.gender === 'n/a'
        ? 'Robot'
        : character.gender.slice(0, 1).toUpperCase() +
          character.gender.slice(1);

    return {
      name: character.name,
      slug: slug,
      birth_year: character.birth_year,
      gender: gender,
      height: character.height,
      mass: character.mass,
      hair_color: character.hair_color,
      skin_color: character.skin_color,
      eye_color: character.eye_color
    };
  });

  return characters;
}
