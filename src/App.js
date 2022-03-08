import React, { useState, useEffect } from "react";
import "./index.css";
import api from "./services/Api";

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [poke, setPoke] = useState();
  const [img, setImg] = useState();
  const [type, setType] = useState();
  const [name, setNome] = useState();

  useEffect(() => {
    api
      .get("/pokemon/bulbasaur")
      .then((response) => {
        console.log(response);
        console.log("nome :", response.data.name);
        setPoke(response.data);
        console.log("asdfasdfa", poke.name);
        console.log("tipo: ", poke.types[0].type.name);
      })
      .catch((error) => {
        console.log("Ocorreu um erro", error);
      });
  }, []);

  return (
    <>
      <h2>Pokédex</h2>
      {/* <div>
        <h3>nome poke: {poke.name}</h3>
        <div>
          <img src={poke.sprites.front_default} alt="" />
        </div>
        <h3>tipo: {poke.types[0].type.name}</h3>
        <h3>
          Habilidade:{" "}
          {poke.abilities.map((item) => " " + item.ability.name).toString()}
        </h3>
        <p>versão: {poke.game_indices[0].version.name}</p>
      </div> */}

      <div className="cardBox">
        <div className="headerInfo">
          <div className="pokeNumber">{poke.id}</div>
          <div className="pokeName">{poke.name}</div>
        </div>
        <div className="pokeType">
          <div>{poke.types[0].type.name}</div>
        </div>
        <div className="pokeImgBox">
          <figure>
            <img src={poke.sprites.front_default} alt="" />
          </figure>
        </div>

        <div className="pokeAbility">
          <div className="textAbil">Abilities:</div>
          <p className="abilitiesText">
            {poke.abilities.map((item) => " " + item.ability.name).toString()}
          </p>
        </div>

        <div className="versionBox">
        {poke.game_indices.map((item) => " " + item.version.name).toString()}
        </div>
      </div>
    </>
  );
}
