const topics = [
  "Naruto",
  "CowBoy Bebop",
  "Dragon Ball Z",
  "Dragon Bakk Super",
  "Attack on Titan",
  "Inuyasha",
  "Bleach",
  "Naruto Shippuden",
  "Dragon Ball GT",
  "Howls Moving Castle",
  "Spirited Away",
  "Seven Deadly Sins",
  "A Quiet World",
  "Death Note",
  "Baki",
  "Black Butler",
  "Evangelion",
  "Full Metal Alchemist",
];
const btnGroup = document.querySelector("#buttons");
topics.forEach((button, index, buttons) => {
  const giphyBtn = document.createElement("button");
  giphyBtn.setAttribute("type", "button");
  //   giphyBtn.addEventListener("click");
  giphyBtn.classList = "btn btn-outline-primary m-1";
  giphyBtn.textContent += buttons[index];
  btnGroup.append(giphyBtn);
});
