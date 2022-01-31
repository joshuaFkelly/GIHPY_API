const giphsSection = document.querySelector("#giphs");
const btnGroup = document.querySelector("#buttons");
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

// Get Request
function getAnime(giphName) {
  let giph = giphName.target.id;
  axios
    .get(
      `https://api.giphy.com/v1/gifs/search?api_key=q8DYV0M8eXqbtdQxXfnOJHMbFjtuG0Gz&q=${giph}&limit=10&offset=0&rating=r&lang=en`
    )
    .then(function (res) {
      // handle success
      showOutput(res);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

// Display Giphs
function showOutput(res) {
  const giphsArray = res.data.data;
  giphsArray.forEach((giph, index, giphs) => {
    giphsSection.innerHTML += `
                <div class="col-6">
                      <div class="card">
                          <header class="card-header text-center">
                             <h5> ${giphs[index].title} </h5>
                          </header>
                          <img src= "${giphs[index].images.original.url}" class="card-img-top bg-dark" alt="GIPHY">
                      </div>
                  </div>
      `;
  });
}

// Buttons
topics.forEach((button, index, buttons) => {
  const giphyBtn = document.createElement("button");
  giphyBtn.setAttribute("type", "button");
  giphyBtn.addEventListener("click", getAnime);
  giphyBtn.classList = "btn btn-outline-primary m-1";
  giphyBtn.id = `${buttons[index]}`;
  giphyBtn.textContent += buttons[index];
  btnGroup.append(giphyBtn);
});
