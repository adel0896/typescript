"use strict";
exports.__esModule = true;
exports.BagType = exports.PresentType = exports.Present = exports.Bag = exports.Sled = exports.Santa = void 0;
var BagType;
(function (BagType) {
    BagType["paper"] = "PAPER";
    BagType["canvas"] = "CANVAS";
})(BagType || (BagType = {}));
exports.BagType = BagType;
var PresentType;
(function (PresentType) {
    PresentType["soft"] = "SOFT";
    PresentType["hard"] = "HARD";
})(PresentType || (PresentType = {}));
exports.PresentType = PresentType;
var Present = /** @class */ (function () {
    function Present(name, weight, presentType) {
        console.log(name, weight, presentType);
        this.name = name;
        this.weight = weight;
        this.presentType = presentType;
    }
    Present.prototype.getPresentType = function () {
        console.log(this.presentType);
        return this.presentType;
    };
    Present.prototype.getPresentWeight = function () {
        console.log(this.weight);
        return this.weight;
    };
    Present.prototype.print = function () {
        console.log(this.name + this.weight + this.presentType);
    };
    return Present;
}());
exports.Present = Present;
var newPresent = new Present("Adelina", 17, PresentType.soft);
// console.log(newPresent);
newPresent.getPresentType();
newPresent.getPresentWeight();
var Bag = /** @class */ (function () {
    function Bag(maxWeight, bagType) {
        (this.maxWeight = maxWeight), (this.bagType = bagType), (this.presents = []);
    }
    Bag.prototype.addPresents = function (present) {
        var totalWeight = this.totalWeight();
        var newTotalWeight = totalWeight + present.weight;
        if (newTotalWeight > this.maxWeight) {
            return false;
        }
        else {
            if (present.presentType === PresentType.soft && this.bagType === BagType.canvas) {
                this.presents.push(present);
            }
            else if (present.presentType === PresentType.hard) {
                this.presents.push(present);
            }
            else if (present.presentType === PresentType.soft && this.bagType === BagType.paper) {
                console.log("Soft presents can only be pushed in canvas");
                return false;
            }
            return true;
        }
    };
    Bag.prototype.totalWeight = function () {
        var totalPresetnWeigth = 0;
        this.presents.forEach(function (present) {
            totalPresetnWeigth += present.weight;
        });
        console.log(totalPresetnWeigth);
        return totalPresetnWeigth;
    };
    Bag.prototype.print = function () {
        console.log("This bag has a max weight of: " + this.maxWeight + "type of" + this.bagType);
        this.presents.forEach(function (present) {
            present.print();
        });
    };
    return Bag;
}());
exports.Bag = Bag;
var Santa = /** @class */ (function () {
    function Santa(name, age) {
        this.name = name;
        this.age = age;
    }
    return Santa;
}());
exports.Santa = Santa;
var Sled = /** @class */ (function () {
    function Sled(santa) {
        (this.santa = santa), (this.bags = []);
    }
    Sled.prototype.addBag = function (bag) {
        this.bags.push(bag);
    };
    Sled.prototype.setSanta = function (santa) {
        this.santa = santa;
    };
    Sled.prototype.addPresentAndNewBagIfNeeded = function (present) {
        if (this.bags.length === 0) {
            var newBag = new Bag(10, BagType.canvas);
            newBag.addPresents(present);
            this.addBag(newBag);
        }
        else if (present.presentType === PresentType.soft) {
            console.log("it gets here");
            var arrayLength = this.bags.length;
            var indexlLastOne = arrayLength - 1;
            //   const lastOne = this.bags[indexlLastOne];
            //   const bagTypeLastOne = lastOne.bagType;
            if (this.bags[indexlLastOne].addPresents(present)) {
                console.log("success");
            }
            else {
                console.log("added necessary bag");
                var newBag = new Bag(10, BagType.canvas);
                newBag.addPresents(present);
                this.addBag(newBag);
            }
        }
    };
    Sled.prototype.print = function () {
        this.bags.forEach(function (bag) {
            bag.print();
        });
    };
    return Sled;
}());
exports.Sled = Sled;
