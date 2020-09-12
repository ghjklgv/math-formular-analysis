import symbol from "./mathSymbol";
export default class MathAnalysis {
  Symbol = new symbol();
  analysis = data => {
    let regFormularString = data.toString();
    const forlopNumber = data.split("Math.").length;
    let divNumber = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i] == "/") {
        divNumber = divNumber + 1;
      }
    }
    for (let index = 0; index < forlopNumber; index++) {
      for (const content of this.Symbol.data()) {
        if (regFormularString.search(content.type) !== -1) {
          try {
            switch (content.type) {
              case "Math.ceil":
                regFormularString = this.intervalAlgorithm(
                  regFormularString,
                  index,
                  content
                );
                break;
              case "Math.abs":
                regFormularString = this.intervalAlgorithm(
                  regFormularString,
                  index,
                  content
                );
                break;
              case "Math.floor":
                regFormularString = this.intervalAlgorithm(
                  regFormularString,
                  index,
                  content
                );
                break;
              case "Math.pow":
                regFormularString = this.powAlgorithm(
                  regFormularString,
                  index,
                  content
                );
                break;
              default:
                regFormularString = this.funcConsAlgorithm(
                  regFormularString,
                  index,
                  content
                );
                break;
            }
          } catch (error) {
            console.log(error);
          }
        }
      }
    }
    for (let i = 0; i < divNumber; i++) {
      let leftIndex = 0;
      let leftCount = 0;
      let rightCount = 0;
      let rightIndex = 0;
      let breakFlag = false;
      for (let index = 0; index < regFormularString.length; index++) {
        if (regFormularString[index] === "(") {
          if (leftCount == 0) {
            leftIndex = index;
          }
          leftCount = leftCount + 1;
        }
        if (regFormularString[index] === ")") {
          rightCount = rightCount + 1;
          if (leftCount == rightCount) {
            rightIndex = index;
            breakFlag = true;
          }
        }
        if (breakFlag) {
          break;
        }
      }
      regFormularString =
        regFormularString.substr(0, leftIndex) +
        "{" +
        regFormularString.substring(leftIndex + 1, rightIndex) +
        "}" +
        regFormularString.substr(rightIndex + 1, regFormularString.length);
      regFormularString = regFormularString.replace("/", "\\over");
    }
    regFormularString = regFormularString.replace("_", "\\_");
    regFormularString = regFormularString.replace("#", "\\#");
    regFormularString = regFormularString.replace("$", "\\$");
    regFormularString = regFormularString.replace("%", "\\%");
    regFormularString = regFormularString.replace("&", "\\&");
    return regFormularString;
  };
  funcConsAlgorithm = (regFormularString, item, content) => {
    regFormularString = regFormularString.replace(content.type, "#");
    const indexOfHash = regFormularString.indexOf("#");
    let leftCount = 0;
    let rightCount = 0;
    let functionRightIndex = 0;
    let breakFlag = false;
    for (
      let index = indexOfHash + 1;
      index < regFormularString.length;
      index++
    ) {
      if (regFormularString[index] === "(") {
        leftCount = leftCount + 1;
      }
      if (regFormularString[index] === ")") {
        rightCount = rightCount + 1;
        if (leftCount == rightCount) {
          functionRightIndex = index;
          breakFlag = true;
          // index = index + regFormularString.length + 1
        }
      }
      if (breakFlag) {
        break;
      }
    }
    if (functionRightIndex == 0) {
      regFormularString = regFormularString.replace("#", content.value);
    } else {
      regFormularString =
        regFormularString.substr(0, indexOfHash) +
        "#{" +
        regFormularString.substring(indexOfHash + 2, functionRightIndex) +
        "}" +
        regFormularString.substr(
          functionRightIndex + 1,
          functionRightIndex.length
        );
      regFormularString = regFormularString.replace("#", content.value);
    }

    return regFormularString;
  };

  intervalAlgorithm = (regFormularString, item, content) => {
    regFormularString = regFormularString.replace(content.type, "#");
    const indexOfHash = regFormularString.indexOf("#");
    let leftCount = 0;
    let rightCount = 0;
    let functionRightIndex = 0;
    let breakFlag = false;
    for (
      let index = indexOfHash + 1;
      index < regFormularString.length;
      index++
    ) {
      if (regFormularString[index] === "(") {
        leftCount = leftCount + 1;
      }
      if (regFormularString[index] === ")") {
        rightCount = rightCount + 1;
        if (leftCount == rightCount) {
          functionRightIndex = index;
          breakFlag = true;
        }
      }
      if (breakFlag) {
        break;
      }
    }
    regFormularString =
      regFormularString.substr(0, indexOfHash) +
      "#{" +
      regFormularString.substring(indexOfHash + 2, functionRightIndex) +
      "}" +
      content.valueRight +
      regFormularString.substr(
        functionRightIndex + 1,
        functionRightIndex.length
      );
    regFormularString = regFormularString.replace("#", content.valueLeft);
    return regFormularString;
  };
  powAlgorithm = (regFormularString, item, content) => {
    regFormularString = regFormularString.replace(content.type, "#");
    const indexOfHash = regFormularString.indexOf("#");
    let leftCount = 0;
    let rightCount = 0;
    let functionRightIndex = 0;
    let breakFlag = false;
    let point = 0;
    for (
      let index = indexOfHash + 1;
      index < regFormularString.length;
      index++
    ) {
      if (regFormularString[index] === "(") {
        leftCount = leftCount + 1;
      }
      if (regFormularString[index] === ")") {
        rightCount = rightCount + 1;
        if (leftCount == rightCount) {
          functionRightIndex = index;
          breakFlag = true;
          // index = index + regFormularString.length + 1
        }
      }
      if (breakFlag) {
        break;
      }
    }
    let powSplit = regFormularString
      .substring(indexOfHash + 2, functionRightIndex)
      .split(",");
    regFormularString =
      regFormularString.substr(0, indexOfHash) +
      "{" +
      regFormularString.substring(indexOfHash + 2, functionRightIndex) +
      "}}" +
      regFormularString.substr(
        functionRightIndex + 1,
        functionRightIndex.length
      );
    regFormularString = regFormularString.replace(",", "^{");
    // regFormularString = regFormularString.replace('#', content.value)
    return regFormularString;
  };
}
