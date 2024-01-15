import MazeGame from "./MazeGame";
import EnchantedMazeFactory from "./factories/EnchantedMazeFactory";
import RegularMazeFactory from "./factories/RegularMazeFactory";

const regularMazeFactory = new RegularMazeFactory();
const enchantedMazeFactory = new EnchantedMazeFactory();

const maze1 = MazeGame.CreateMaze(regularMazeFactory);
const maze2 = MazeGame.CreateMaze(enchantedMazeFactory);


console.log(maze1);
console.log(maze2);