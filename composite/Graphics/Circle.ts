import Dot from "./Dot";

export default class Circle extends Dot {
  constructor(private pointX: number, private pointY: number, private radius: number){
    super(pointX, pointY);
  }

  draw(){
    console.log(`Desenhando um circulo em X ${this.pointX}, em Y: ${this.pointY} e raio ${this.radius}`);
  }
}