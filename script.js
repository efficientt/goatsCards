const data = [
  {
    id: 0,
    name: "Musashi",
    status: "Status : GOAT",
    desc: "Japanese Samurai who was known like a best swordsman in a history.",
    img: "https://pm1.narvii.com/8344/eba0a33fa37fc4f3e2ef45cb85d59c8ea02137f9r1-736-531v2_00.jpg",
  },
  {
    id: 1,
    name: "Guts",
    status: "Status : GOAT",
    desc: "He's a man who called Black Swordsman.",
    img: "https://i.pinimg.com/564x/0c/a3/8e/0ca38eaa2b611abd1ddac8179533846f.jpg",
  },
  {
    id: 2,
    name: "Thorfinn",
    status: "Status : GOAT",
    desc: "He doesn't have any enemies. He has lived with people who killed his father...",
    img: "https://tiermaker.com/images/templates/vinland-saga-cross-characters-15561980/155619801674344183.PNG",
  },
  {
    id: 2,
    name: "Ronaldo",
    status: "Status : GOAT",
    desc: "Greates Youngster. Mr.UCL 5 ballon dors .  800+ goals, 180+ assists",
    img: "https://img.bleacherreport.net/img/images/photos/003/081/851/hi-res-dbb19cf0fa095a56c2792f57377a0561_crop_exact.jpg?w=1200&h=1200&q=75",
  },
];

function displayData(data) {
  const cardContainer = document.getElementById("card__container");

  const cardHTML = data.map(
    (card) =>
      '<div class="card">' +
      '<div class="card__img__parent">' +
      `<img class="card__img" src=${card.img}>` +
      "</div>" +
      '<div class="card__text__block">' +
      '<div class="card__name__parent">' +
      '<h2 class="card__name">' +
      card.name +
      "</h2>" +
      "</div>" +
      '<div class="card__status__parent">' +
      '<h2 class="card__status">' +
      card.status +
      "</h2>" +
      "</div>" +
      '<div class="card__desc__parent">' +
      '<h2 class="card__desc">' +
      card.desc +
      "</h2>" +
      "</div>" +
      "</div>" +
      "</div>"
  );

  const displayCardsHTML = cardHTML.join("");
  cardContainer.innerHTML = displayCardsHTML;
}

displayData(data);
