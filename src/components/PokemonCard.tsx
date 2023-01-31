import { useState } from "react";
import { Pokemons } from "../types";
import { MdCatchingPokemon } from "react-icons/md";
import { CgPokemon } from "react-icons/cg";

interface Props {
  pokeStats: Array<Pokemons>;
}

const PokemonCard = ({ pokeStats }: Props) => {
  const [onPokemon, setOnPokemon] = useState<string>();

  const shownPokemon = () => {
    const selectedObject = pokeStats.filter((obj) => obj.name === onPokemon);

    const mappedSelectedObject = selectedObject.map((pokeStats) => {
      
      return (
        <div
          className="flex items-center justify-between flex-col w-full max-w-md gap-6 sm:px-10 py-10 h-full "
          key={pokeStats.id + pokeStats.name}
        >
          <div className="flex gap-4 items-center justify-between bg-highpink py-2 px-10 w-full rounded-full text-white relative">
            <div className=" bg-footer-gray relative z-10">
              <h2>N.º {pokeStats.id.toString().padStart(3, "0")}</h2>
            </div>
            <div className=" bg-footer-gray h-full w-32 absolute left-0 rounded-full "></div>
            <div className="flex items-center justify-between w-36 gap-4">
              <h2>
                {pokeStats.name.replace(/^./, (str) => str.toUpperCase())}
              </h2>
              <CgPokemon className="h-8 w-8" />
            </div>
          </div>
          <div className="flex flex-col justify-center ">
            <img
              className="max-h-80 h-full"
              src={pokeStats.sprites.other["official-artwork"].front_default}
              alt={pokeStats.name}
            />
            <div className=" ">
              <span className="capitalize flex justify-center gap-5 w-full">
                {pokeStats.types.map((types) => {
                  return (
                    <div
                      key={types.type.name}
                      className={`${
                        types.type.name === "grass" 
                        ? "bg-grass" 
                        : types.type.name === "poison"
                        ? "bg-poison"
                        : types.type.name === "fire"
                        ? "bg-fire"
                        : types.type.name === "flying"
                        ? "bg-flying"
                        : types.type.name === "water"
                        ? "bg-water"
                        : types.type.name === "bug"
                        ? "bg-bug"
                        : types.type.name === "normal"
                        ? "bg-normal"
                        : types.type.name === "electric"
                        ? "bg-electric"
                        : types.type.name === "ground"
                        ? "bg-ground"
                        : types.type.name === "fairy"
                        ? "bg-fairy"
                        : types.type.name === "fighting"
                        ? "bg-fighting"
                        : types.type.name === "ghost"
                        ? "bg-ghost"
                        : types.type.name === "ice"
                        ? "bg-ice"
                        : types.type.name === "steel"
                        ? "bg-steel"
                        : types.type.name === "dark"
                        ? "bg-dark"
                        : types.type.name === "dragon"
                        ? "bg-dragon"
                        : types.type.name === "psychic"
                        ? "bg-psychic"
                        : types.type.name === "rock"
                        ? "bg-rock"
                        : "bg-footer-gray"}  py-1 px-6 rounded-full`}
                    >
                      {types.type.name}
                    </div>
                  );
                })}
              </span>
            </div>
          </div>
          <div className="flex gap-10 items-center">
            <div className="flex gap-4  items-center">
              <span className="text-highpink text-lg font-bold">Height</span>
              <p>{pokeStats.height} cm</p>
            </div>
            <div className="flex gap-4 items-center">
              <span className="text-highpink text-lg font-bold">Weight</span>
              <p>{pokeStats.weight} Lbs</p>
            </div>
          </div>
          <div className="flex flex-col max-w-xs w-full items-center gap-5 ">
            <div className="flex w-full max-w-small justify-between px-10 py-2 bg-silver rounded-full hover:bg-highpink hover:text-white">
              <p>Hp </p>
              <span>
                {pokeStats.stats.map((stat) => stat.base_stat).slice(0, 1)}
              </span>
            </div>
            <div className="flex w-full max-w-small justify-between px-10 py-2 bg-silver rounded-full hover:bg-highpink hover:text-white">
              <p>Attack </p>
              <span>
                {pokeStats.stats.map((stat) => stat.base_stat).slice(1, 2)}
              </span>
            </div>
            <div className="flex w-full max-w-small justify-between px-10 py-2 bg-silver rounded-full hover:bg-highpink hover:text-white">
              <p>Defense </p>
              <span>
                {pokeStats.stats.map((stat) => stat.base_stat).slice(2, 3)}
              </span>
            </div>
          </div>
        </div>
      );
    });
    return mappedSelectedObject;
  };

  const renderList = (): JSX.Element[] => {
    return pokeStats.map((pokeStats) => {
      return (
        <div key={pokeStats.id + pokeStats.name}>
          <div className="flex relative mr-5 max-h-48 group">
            <ul
              className="flex gap-8 items-center max-w-lg justify-between
                w-full  max-h-14 bg-silver px-6 py-2 rounded-full text-base
                shadow-md group-hover:bg-highpink hover:cursor-pointer 
              group-hover:text-white transition ease-in-out duration-300"
              onMouseOver={(event) => {
                const e = event.currentTarget.getElementsByTagName("p");
                setOnPokemon(e[0].innerHTML.toLowerCase());
              }}
            >
              <img
                className="max-h-14 h-full"
                src={pokeStats.sprites.other["official-artwork"].front_default}
                alt={pokeStats.name}
              />
              <li className="items-start w-24">
                N.º {pokeStats.id.toString().padStart(3, "0")}
              </li>
              <p className="items-start w-3/4">
                {pokeStats.name.replace(/^./, (str) => str.toUpperCase())}
              </p>
              <MdCatchingPokemon className="h-full w-14 text-highpink group-hover:text-silver transition ease-in-out duration-300" />
            </ul>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col justify-between gap-8 lg:flex-row px-6 ">
      <div className="w-full max-w-md">{shownPokemon()}</div>
      <div className="flex flex-col gap-7 overflow-y-auto h-full  max-h-128 w-full max-w-lg">
        {renderList()}
      </div>
    </div>
  );
};

export default PokemonCard;
