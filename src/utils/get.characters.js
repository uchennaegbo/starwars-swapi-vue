import axios from 'axios';
export default async function(page) {
  try {
    page = Math.ceil(Math.random() * 6);
    const response = await axios.get(
      `https://swapi.co/api/people?page=${page}`
    );

    const characters = response.data.results.map(character => {
      const slug = character.name.toLowerCase().replace(/ /g, '-');
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
        eye_color: character.eye_color,
        url: character.url
      };
    });

    return characters;
  } catch (error) {
    //eslint-disable-next-line
    console.error(error);
  }
}
