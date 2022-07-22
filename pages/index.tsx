import { useState, useEffect } from "React";
import { Pokemons } from "./pokemons";
import Header from "@components/organisms/Header";
import { Devider } from "@components/atoms/Devider";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Devider />
        <Pokemons />
      </div>
    </>
  );
}
