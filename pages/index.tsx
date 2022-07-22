import { useState, useEffect } from "React";
import { Pokemons } from "./pokemons";
import Header from "@components/organisms/Header/Header";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Pokemons />
      </div>
    </>
  );
}
