import { BagType, Santa, Sled, Bag, Present, PresentType } from "./hello";

const myNewSanta = new Santa("Adelina", 21);
const myNewSled = new Sled(myNewSanta);
const myNewBag = new Bag(10, BagType.paper);
const myCar = new Present("car", 8, PresentType.hard);
const myLaptop = new Present("laptop", 3, PresentType.soft);

myNewBag.addPresents(myCar);
// myNewBag.addPresents(myLaptop);
myNewSled.addBag(myNewBag);
myNewBag.totalWeight();
myNewSled.addPresentAndNewBagIfNeeded(myLaptop);
myNewSled.print();
