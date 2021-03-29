import getHash from "../utils/getHash";
import getData from "../utils/getData";

const Character = async () => {
  const id = getHash();
  const character = await getData(id);

  const view = `
    <div class="Characters-inner">
      <article class="Characters-card">
        <img src="${character.image}" alt="${character.name}" loading="lazy">
        <h2>${character.name}</h2>
      </article>
      <article class="Characters-card">
        <h3>Tallas: <span>${character.tallas}</span></h3>
        <h3>Descripción: <span>${character.descripcion}</span></h3>
      </article>
    </div>
  `;
  return view;
};

export default Character;
