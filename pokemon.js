import aron from "./img/aron.png";
import bulbasur from "./img/bulbasaur.png";
import butterfree from "./img/butterfree.png";
import charmander from "./img/charmander.png";
import ditto from "./img/ditto.png";
import gastly from "./img/gastly.png";
import mew from "./img/mew.png";
import pikachu from "./img/pikachu.png";
import squirtle from "./img/squirtle.png";

const Pokemons = () => {
  const pokemons = [
    {
      img: aron,
      name: "Aron",
      id: "#304",
      elements: {
        element1: "Steel",
        element2: "Rock",
      },
      about: {
        weight: "60,0 kg",
        height: "0,4 m",
        moves: "Sturdy Rock-Head",
      },
      info: "It eats iron ore- and sometimes railroad tracks - to build up the steel armor that protects its body",
      baseStats: {
        hp: "050",
        atk: "070",
        def: "100",
        satk: "040",
        sdef: "040",
        spd: "030",
      },
    },
    {
      img: bulbasur,
      name: "Bulbasaur",
      id: "#001",
      elements: {
        element1: "Grass",
        element2: "Poison",
      },
      about: {
        weight: "6,9 kg",
        height: "0,7 m",
        moves: "Chiorophyll Overgrow",
      },

      info: "There is a plant seed on its back right from the day this pokemon is born. The seed slowly grows larger",
      baseStats: {
        hp: "045",
        atk: "049",
        def: "049",
        satk: "065",
        sdef: "065",
        spd: "045",
      },
    },
    {
      img: butterfree,
      name: "Butterfree",
      id: "#012",
      elements: {
        element1: "Bug",
        element2: "Flying",
      },
      about: {
        weight: "32,0 kg",
        height: "1,1 m",
        moves: "Compound-Eyes-Tinted-Lens",
      },
      info: "In battle, it flaps its wings at great speed to release highly toxic dust into the air",
      baseStats: {
        hp: "060",
        atk: "045",
        def: "050",
        satk: "090",
        sdef: "080",
        spd: "070",
      },
    },
    {
      img: charmander,
      name: "Charmander",
      id: "#004",
      elements: {
        element1: "Fire",
      },
      about: {
        weight: "8,5 kg",
        height: "0,6 m",
        moves: "Mega-Punch-Fire-Punch",
      },
      info: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail",
      baseStats: {
        hp: "039",
        atk: "052",
        def: "043",
        satk: "060",
        sdef: "050",
        spd: "065",
      },
    },
    {
      img: ditto,
      name: "Ditto",
      id: "#132",
      elements: {
        element1: "Normal",
      },
      about: {
        weight: "4,0 kg",
        height: "0,3 m",
        moves: "Limber Imposter",
      },

      info: "It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes",
      baseStats: {
        hp: "048",
        atk: "048",
        def: "048",
        satk: "048",
        sdef: "048",
        spd: "048",
      },
    },

    {
      img: gastly,
      name: "Gastly",
      id: "#092",
      elements: {
        element1: "Ghost",
        element2: "Type",
      },
      about: {
        weight: "0,1 kg",
        height: "1,3 m",
        moves: "Levitate",
      },

      info: "Born from gases, anyone would falint if engulfed by its gaseous body, which contains poison",
      baseStats: {
        hp: "030",
        atk: "035",
        def: "030",
        satk: "100",
        sdef: "035",
        spd: "080",
      },
    },
    {
      img: mew,
      name: "Mew",
      id: "#152",
      elements: {
        element1: "Psychic",
      },
      about: {
        weight: "4,0 kg",
        height: "0,4 m",
        moves: "Synchronize",
      },
      info: "When viewed throught a microscope, this pokemons short, fine, delicate hair can be seen",
      baseStats: {
        hp: "100",
        atk: "100",
        def: "100",
        satk: "100",
        sdef: "100",
        spd: "100",
      },
    },

    {
      img: pikachu,
      name: "Pikachu",
      id: "#025",
      elements: {
        element1: "Electric",
      },
      about: {
        weight: "6,0 kg",
        height: "0,4 m",
        moves: "Mega-Punch-Pay-Day",
      },
      info: "Pikachu that can generate powerful electricity have a cheek sacs that are extra soft and super stretchy",
      baseStats: {
        hp: "035",
        atk: "055",
        def: "040",
        satk: "050",
        sdef: "050",
        spd: "090",
      },
    },

    {
      img: squirtle,
      name: "Squirtle",
      id: "#007",
      elements: {
        element1: "Water",
      },
      about: {
        weight: "9,0 kg",
        height: "0,5 m",
        moves: "Torrent Rain-Dish",
      },
      info: "When it retracts its long neck into its shell, it squirts out water with vigorous force",
      baseStats: {
        hp: "044",
        atk: "048",
        def: "065",
        satk: "050",
        sdef: "064",
        spd: "043",
      },
    },
  ];
  return pokemons;
};

export default Pokemons;
