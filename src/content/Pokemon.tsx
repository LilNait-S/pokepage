import React from "react";
import Topbar from "../components/Topbar";
import PokeList from "../components/PokeList";
import waves from '../assets/wavesOpacity.svg'

const Pokemon = () => {
  return (
    <header className="bg-slate-100 relative ">
      <div className="h-full pb-52">
        <Topbar />
        <PokeList />
      </div>
      <img className="w-full rotate-180  absolute inset-x-0 bottom-0" src={waves} alt="waves" />
    </header>
  );
};

export default Pokemon;
