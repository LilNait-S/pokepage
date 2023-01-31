import React from "react";
import { CgPokemon } from "react-icons/cg";
import usePokemons from "../hooks/usePokemons";

const Topbar = () => {

  const { numPokemons } = usePokemons();
  return (
    <div className="text-footer-gray mt-8">
      <div className="flex justify-between items-center px-6 py-4 text-xl max-w-7xl mx-auto">
        <div className="flex gap-8 items-center bg-silver py-3 px-14 rounded-full font-bold ">
          <p className="">Pokedex</p>
          <CgPokemon className="h-full w-8 text-highpink" />
          <p>{numPokemons}</p>
        </div>
        <p> </p>
      </div>
    </div>
  );
};

export default Topbar;
