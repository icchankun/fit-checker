import Human from "./human.js";
import { adultObesityMap } from "./obesity-map.js";

export default class Adult extends Human {
  #appropriateWeight;
  constructor(height, weight) {
    super(height, weight);
    this.height = this.convertCmToM(height);
    this.#appropriateWeight = this.calcAppropriateWeight();
  }
  convertCmToM(height) {
    return height / 100;
  }
  calcAppropriateWeight() {
    return (this.height ** 2 * 22).toFixed(2);
  }
  calcBmi() {
    return this.weight / this.height ** 2;
  }
  checkObesity() {
    const bmi = this.calcBmi();
    return adultObesityMap(bmi);
  }
  showBodyInfo() {
    super.showBodyInfo({
      obesity: this.checkObesity(),
      appropriateWeight: this.#appropriateWeight,
      weightDiff: super.calcWeightDiff(this.weight, this.#appropriateWeight),
    });
  }
}
