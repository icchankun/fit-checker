#!/usr/bin/env node

import enquirer from "enquirer";
import Adult from "./src/adult.js";
import Child from "./src/child.js";

const { prompt } = enquirer;
const ADULT_AGE = 18;
const LOWER_LIMIT_AGE = 5;

const isValid = (input, ageInput = false) => {
  if (!input || isNaN(input)) {
    return "数値を入力してください";
  } else if (input < LOWER_LIMIT_AGE && ageInput) {
    return "5歳以上の年齢を入力してください";
  } else {
    return true;
  }
};
const { age } = await prompt({
  type: "input",
  name: "age",
  message: "年齢はいくつですか？",
  validate: (age) => isValid(age, true),
});
const { gender, height, weight } = await prompt([
  {
    type: "select",
    name: "gender",
    message: "性別を選んでください？",
    choices: [
      { name: "男性", value: "man" },
      { name: "女性", value: "woman" },
    ],
    result() {
      return this.focused.value;
    },
    skip: () => age >= ADULT_AGE,
  },
  {
    type: "input",
    name: "height",
    message: "身長は何cmですか？",
    validate: (height) => isValid(height),
  },
  {
    type: "input",
    name: "weight",
    message: "体重は何kgですか？",
    validate: (weight) => isValid(weight),
  },
]);

if (age >= ADULT_AGE) {
  const adult = new Adult(height, weight);
  adult.showBodyInfo();
} else {
  const child = new Child(height, weight, age, gender);
  child.showBodyInfo();
}
