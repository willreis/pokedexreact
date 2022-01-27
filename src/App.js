import React, { useState, useEffect } from "react";
import api from "./services/Api";

export default function App() {
  const [poke, setPoke] = useState();

  useEffect(() => {
    api
      .get("/pokemon")
      .then((resposta) => {
        console.log(resposta);
        setPoke(resposta.data);
      })
      .catch((error) => {
        console.log("Ocorreu um erro", error);
      });
  }, []);

  return (
    <>
      <h2>Pokédex</h2>
      <div>
        {poke.map((pokes) => (
          <div>
            <h3 key={pokes.id}>{pokes.name}</h3>
            <div>{pokes.sprites}</div>
          </div>
        ))}
        <h3>nome poke</h3>
        <div>foto poke</div>
      </div>
    </>
  );
}
