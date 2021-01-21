// https://github.com/shakilahmedatik/jsbasic_assignment1

// Kelometer to Meter Converter
function kelometerToMeter(km) {
  //Checking input type
  if (typeof km !== "number") {
    return "ERROR: Please use a number as input.";
  } else if (km < 0) {
    return "ERROR: Please use a positive number.";
  } else {
    let meter = km * 1000;
    return meter;
  }
}
let distance = kelometerToMeter(10);
console.log(distance);

//Budget Calculator
function budgetCalculator(watchQty, phoneQty, laptopQty) {
  //Checking input type
  if (
    typeof watchQty !== "number" ||
    typeof phoneQty !== "number" ||
    typeof laptopQty !== "number"
  ) {
    return "ERROR: Please use a number as input.";
  } else if (watchQty < 0 || phoneQty < 0 || laptopQty < 0) {
    return "ERROR: Please use a positive number.";
  } else {
    var watchPrice = 50 * watchQty;
    var phonePrice = 100 * phoneQty;
    var laptopPrice = 500 * laptopQty;

    var total = watchPrice + phonePrice + laptopPrice;
    return total;
  }
}
let totalPrice = budgetCalculator(2, 2, 2);
console.log(totalPrice);

// Hotel Cost Calculator
function hotelCost(totalDay) {
  var totalCost = 0;
  //Checking input type
  if (totalDay < 0) {
    return "ERROR: Please use a positive number.";
  } else {
    if (totalDay <= 10) {
      totalCost = totalDay * 100;
    } else if (totalDay <= 20) {
      var firstPart = 10 * 100;
      var remaining = totalDay - 10;
      var secondPart = remaining * 80;
      totalCost = firstPart + secondPart;
    } else {
      var firstPart = 10 * 100;
      var secondPart = 10 * 80;
      var remaining = totalDay - 20;
      var thirdPart = remaining * 50;

      totalCost = firstPart + secondPart + thirdPart;
    }
    return totalCost;
  }
}
let totalCost = hotelCost(25);
console.log(totalCost);

// //Mega Friend
var nameList = ["Jack", "Ray", "Willy", "Lina", "Dextar", "Alexander"];
function megaFriend(nameList) {
  var bigName = "";
  //Checking input type
  if (nameList.length < 1) {
    return "ERROR: Please provide a name list.";
  } else {
    for (i = 0; i < nameList.length; i++) {
      if (nameList[i].length > bigName.length) {
        bigName = nameList[i];
      }
    }
    return bigName;
  }
}
var maxName = megaFriend(nameList);
console.log(maxName);
