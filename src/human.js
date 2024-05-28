export default class Human {
  constructor(height, weight) {
    this.height = Number(height);
    this.weight = Number(weight);
  }
  calcWeightDiff(weight, appropriateWeight) {
    return (weight - appropriateWeight).toFixed(2);
  }
  showBodyInfo(bodyInfo) {
    console.log("\n肥満度 | 適正体重 | 適正体重との差");
    console.log(
      [
        bodyInfo.obesity.evaluation,
        `${bodyInfo.appropriateWeight}kg`,
        `${bodyInfo.weightDiff}kg`,
      ].join(" | "),
    );
    console.log(`\n${bodyInfo.obesity.comment}\n`);
  }
}
