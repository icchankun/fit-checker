import Human from "./human.js";
import { childCoefficientMap } from "./coefficient-map.js";
import { childObesityMap } from "./obesity-map.js";

export default class child extends Human {
  #age;
  #gender;
  #appropriateWeight;
  constructor(height, weight, age, gender) {
    super(height, weight);
    this.#age = Number(age);
    this.#gender = gender;
    this.#appropriateWeight = this.calcAppropriateWeight();
  }
  calcAppropriateWeight() {
    const coefficient = childCoefficientMap(this.#gender, this.#age);
    return (coefficient.a * this.height - coefficient.b).toFixed(2);
  }
  checkObesity() {
    const obesity =
      ((this.weight - this.#appropriateWeight) / this.#appropriateWeight) * 100;
    return childObesityMap(obesity);
  }
  showBodyInfo() {
    super.showBodyInfo({
      obesity: this.checkObesity(),
      appropriateWeight: this.#appropriateWeight,
      weightDiff: super.calcWeightDiff(this.weight, this.#appropriateWeight),
    });
  }
}
