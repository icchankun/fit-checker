#!/usr/bin/env node

import enquirer from "enquirer";
import Adult from "./src/adult.js";
import Child from "./src/child.js";

const { prompt } = enquirer;
const ADULT_AGE = 18;
const LOWER_LIMIT_AGE = 5;

const isNumber = (input) => {
  if (!input || isNaN(input)) {
    return "数値を入力してください";
  } else {
    return true;
  }
};
const isValidAge = (input) => {
  if (input < LOWER_LIMIT_AGE) {
    return "5歳以上の年齢を入力してください";
  } else {
    return true;
  }
};
const { age } = await prompt({
  type: "input",
  name: "age",
  message: "年齢はいくつですか？",
  validate: (age) => {
    if (typeof isNumber(age) === "string") {
      return isNumber(age);
    } else {
      return isValidAge(age);
    }
  },
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
    validate: (height) => isNumber(height),
  },
  {
    type: "input",
    name: "weight",
    message: "体重は何kgですか？",
    validate: (weight) => isNumber(weight),
  },
]);

const human =
  age >= ADULT_AGE
    ? new Adult(height, weight)
    : new Child(height, weight, age, gender);

human.showBodyInfo();
