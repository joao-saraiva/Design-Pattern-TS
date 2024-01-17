import RoundHole from "./RoundHole";
import RoundPeg from "./RoundPeg";
import SquarePeg from "./SquarePeg";
import SquarePegAdapter from "./SquarePegAdapter";

const roundHole = new RoundHole(5);
const roundPeg = new RoundPeg(5);
console.log(roundHole.fits(roundPeg));

const smallSquarePeg = new SquarePeg(5);
const largeSquarePeg = new SquarePeg(10);

// roundHole.fits(smallSquarePeg) não complila

const smallSquarePegAdapter = new SquarePegAdapter(smallSquarePeg);
const largeSquarePegAdapter = new SquarePegAdapter(largeSquarePeg);

console.log(roundHole.fits(smallSquarePegAdapter));
console.log(roundHole.fits(largeSquarePegAdapter));
