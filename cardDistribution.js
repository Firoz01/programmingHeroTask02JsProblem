function cardDistribution(users) {
  var card = [];
  for (let i = 0; i < users.length; i++) {
    let f2CFD = users[i].district.slice(0, 2).toUpperCase();
    let l2NFY = users[i].currentYear.toString().slice(2, 4);
    let f2NFP = users[i].postNo.toString().slice(0, 2);
    let padding = i + 1;
    SixdigitNumber = padding.toLocaleString(undefined, {
      useGrouping: false,
      minimumIntegerDigits: 6,
    });
    let cardNumber =
      f2CFD + l2NFY + f2NFP + users[i].birthYear + SixdigitNumber;
    let gift;
    if (cardNumber.slice(15, 16) % 2 == 0) gift = "R";
    else gift = "W";

    let priority = users[i].priority;

    let cardDetails = {
      cardNumber,
      gift,
      priority,
    };
    card.push(cardDetails);
  }
  card.sort(function (a, b) {
    return a.priority - b.priority;
  });
  return card;
}
