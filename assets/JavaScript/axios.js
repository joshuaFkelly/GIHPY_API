const giphsSection = document.querySelector("#giphs");
const btnGroup = document.querySelector("#buttons");
const deleteBtn = document.querySelector("#delete");
const topics = [
  "Naruto",
  "CowBoy Bebop",
  "Dragon Ball Z",
  "Dragon Ball Super",
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
const limit = 10;
// GET
function getAnime(giphName) {
  let giph = giphName.target.id;
  let url = `https://api.giphy.com/v1/gifs/search?api_key=q8DYV0M8eXqbtdQxXfnOJHMbFjtuG0Gz&q=${giph}&limit=10&offset=0&rating=r&lang=en`;
  axios
    .get(url, { timeout: 3000 })
    .then(function (res) {
      // handle success
      showOutput(res);
      console.log(res.data);
    })
    .catch(function (err) {
      // handle err
      showError(err);
    })
    .then(function () {
      // always executed
    });
}

//DELETE

// PUT

// GIPHYs
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
// GIPHY Buttons
topics.forEach((button, index, buttons) => {
  const giphyBtn = document.createElement("button");
  giphyBtn.setAttribute("type", "button");
  giphyBtn.addEventListener("click", getAnime);
  giphyBtn.classList = "btn btn-outline-primary m-1";
  giphyBtn.id = `${buttons[index]}`;
  giphyBtn.textContent += buttons[index];
  btnGroup.append(giphyBtn);
});
// Show Error
function showError(err) {
  const error = err;
  console.log(error);
  giphsSection.innerHTML = `
  <h1 class ="text-danger"> ${err} </h1>
 `;
}
