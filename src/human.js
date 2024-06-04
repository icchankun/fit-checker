export default class Human {
  constructor(height, weight) {
    this.height = Number(height);
    this.weight = Number(weight);
    this.appropriateWeight = null;
  }
  checkObesity() {
    throw new Error("Must be implemented by subclass");
  }
  #calcWeightDiff(weight, appropriateWeight) {
    return (weight - appropriateWeight).toFixed(2);
  }
  showBodyCondition() {
    const obesity = this.checkObesity();
    const appropriateWeight = this.appropriateWeight;
    const weightDiff = this.#calcWeightDiff(this.weight, appropriateWeight);

    console.log("\n肥満度 | 適正体重 | 適正体重との差");
    console.log(
      [obesity.evaluation, `${appropriateWeight}kg`, `${weightDiff}kg`].join(
        " | ",
      ),
    );
    console.log(`\n${obesity.comment}\n`);
  }
}
