enum BagType {
  paper = "PAPER",
  canvas = "CANVAS",
}
enum PresentType {
  soft = "SOFT",
  hard = "HARD",
}
class Present {
  name: string;
  weight: number;
  presentType: PresentType;
  constructor(name: string, weight: number, presentType: PresentType) {
    console.log(name, weight, presentType);
    this.name = name;
    this.weight = weight;
    this.presentType = presentType;
  }
  getPresentType() {
    console.log(this.presentType);
    return this.presentType;
  }
  getPresentWeight() {
    console.log(this.weight);
    return this.weight;
  }
  print(): void {
    console.log(this.name + this.weight + this.presentType);
  }
}
const newPresent = new Present("Adelina", 17, PresentType.soft);
// console.log(newPresent);
newPresent.getPresentType();
newPresent.getPresentWeight();
class Bag {
  maxWeight: number;
  bagType: BagType;
  presents: Present[];
  constructor(maxWeight: number, bagType: BagType) {
    (this.maxWeight = maxWeight), (this.bagType = bagType), (this.presents = []);
  }
  addPresents(present: Present) {
    const totalWeight = this.totalWeight();
    const newTotalWeight = totalWeight + present.weight;
    if (newTotalWeight > this.maxWeight) {
      return false;
    } else {
      if (present.presentType === PresentType.soft && this.bagType === BagType.canvas) {
        this.presents.push(present);
      } else if (present.presentType === PresentType.hard) {
        this.presents.push(present);
      } else if (present.presentType === PresentType.soft && this.bagType === BagType.paper) {
        console.log("Soft presents can only be pushed in canvas");
        return false;
      }

      return true;
    }
  }
  totalWeight(): number {
    let totalPresetnWeigth = 0;
    this.presents.forEach((present) => {
      totalPresetnWeigth += present.weight;
    });
    console.log(totalPresetnWeigth);
    return totalPresetnWeigth;
  }
  print(): void {
    console.log("This bag has a max weight of: " + this.maxWeight + "type of" + this.bagType);
    this.presents.forEach((present) => {
      present.print();
    });
  }
}
class Santa {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
class Sled {
  santa: Santa;
  bags: Bag[];
  constructor(santa: Santa) {
    (this.santa = santa), (this.bags = []);
  }
  addBag(bag: Bag) {
    this.bags.push(bag);
  }
  setSanta(santa: Santa) {
    this.santa = santa;
  }
  addPresentAndNewBagIfNeeded(present: Present) {
    if (this.bags.length === 0) {
      const newBag = new Bag(10, BagType.canvas);
      newBag.addPresents(present);
      this.addBag(newBag);
    } else if (present.presentType === PresentType.soft) {
      console.log("it gets here");
      const arrayLength = this.bags.length;
      const indexlLastOne = arrayLength - 1;
      //   const lastOne = this.bags[indexlLastOne];
      //   const bagTypeLastOne = lastOne.bagType;
      if (this.bags[indexlLastOne].addPresents(present)) {
        console.log("success");
      } else {
        console.log("added necessary bag");
        const newBag = new Bag(10, BagType.canvas);
        newBag.addPresents(present);
        this.addBag(newBag);
      }
    }
  }
  print(): void {
    this.bags.forEach((bag) => {
      bag.print();
    });
  }
}
export { Santa, Sled, Bag, Present, PresentType, BagType };
