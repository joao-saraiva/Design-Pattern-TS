import Circle from "./Graphics/Circle";
import CompoundGraphic from "./Graphics/CompoundGraphic";
import Dot from "./Graphics/Dot";

const compoundGraphic = new CompoundGraphic();
compoundGraphic.addChildren(new Dot(10, 20));
compoundGraphic.addChildren(new Circle(5, 3, 10));

const compoundGraphic2 = new CompoundGraphic();
compoundGraphic2.addChildren(compoundGraphic);
compoundGraphic2.draw();
