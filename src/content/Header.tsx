import React from "react";
import pikachu from '../assets/pikachu.png';
import blob from '../assets/blob.svg'
import waves from '../assets/wavesOpacity.svg'
import { CgPokemon } from 'react-icons/cg'
import { GoTriangleRight } from 'react-icons/go'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-100 relative ">
      <section className="flex flex-col sm:flex-row justify-center items-center max-w-7xl w-full px-6 pt-10 sm:pt-20 mx-auto gap-10 pb-40">
        <div className="flex flex-col gap-10 max-w-xl w-full h-full  justify-center">
          <h1 className="text-5xl font-bold">
            Encuentra <span className="text-highpink">todos los pokemons </span>
            en un solo lugar
          </h1>
          <p className="text-xl">Tu pokemon favorito a un solo click.</p>
          <div className="flex flex-col sm:flex-row gap-5 items-center">
            <Link
              to="/pokedex"
              className="bg-highpink text-white py-3 px-14 sm:py-5 sm:px-16 rounded-full flex gap-3 items-center text-lg"
            >
              <CgPokemon className="h-full w-8" />
              <hr className="border-2 h-6" />
              Pokedex
            </Link>
            <button className="border-4 text-highpink w-20 h-20 px-4 py-4 rounded-full">
              <GoTriangleRight className="w-10 h-10" />
            </button>
          </div>
        </div>

        <div className="max-w-xl relative flex">
          <img
            className="object-cover h-full z-10 relative p-3"
            src={pikachu}
            alt="pikachu"
          />
          <img
            className="absolute top-0 z-0 object-cover h-full"
            src={blob}
            alt="blob"
          />
        </div>
      </section>
      <img className="w-full rotate-180  absolute inset-x-0 bottom-0" src={waves} alt="waves" />
    </header>
  );
};

export default Header;
