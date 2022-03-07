import React, { useState, useEffect } from "react";
import api from "./services/Api";

export default function App() {
  const [pokemon, setPokemon] = useState([])
  const [poke, setPoke] = useState();
  const [img, setImg] = useState();
  const [type, setType] = useState();
  const[name, setNome] = useState();

  useEffect(() => {
    api
      .get("/pokemon/charmeleon")
      .then((response) => {
        console.log(response);
        console.log('nome :', response.data.name)
        setPoke(response.data);
        console.log('asdfasdfa', poke.name)
        console.log('tipo: ', poke.types[0].type.name)
      })
      .catch((error) => {
        console.log("Ocorreu um erro", error);
      });
  }, []);

  return (
    <>
      <h2>Pokédex</h2>
      <div>
        <h3>nome poke: {poke.name}</h3> 
        <div><img src={poke.sprites.front_default} alt="" /></div>
        <h3>tipo: {poke.types[0].type.name}</h3>
      </div>
    </>
  );
}
