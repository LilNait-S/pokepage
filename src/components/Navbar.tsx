import React from "react";
import { Link } from "react-router-dom";
import pokemonlogo from "../assets/pokemonlogo.png";

const Navbar = () => {
  return (
    <nav className="relative z-30">
      <div className="bg-highpink h-16"></div>
      <div className="flex justify-center text-slate-900 h-20 font-bold text-lg bg-slate-100 rounded-t-3xl absolute inset-x-0 top-5">
        <div className="flex justify-between items-center max-w-7xl mx-5 w-full px-6">
          <Link to="/">
            <img
              className="object-cover h-10"
              src={pokemonlogo}
              alt="pokemon"
            />
          </Link>
          <div className="flex py-2 px-3 gap-7">
            <Link
              to="/"
              className="hover:text-highpink transition duration-200 ease-out hover:ease-in-out"
            >
              Inicio
            </Link>
            <Link
              to="/pokedex"
              className="hover:text-highpink transition duration-200 ease-out hover:ease-in-out"
            >
              Pokedex
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
