const giphsSection = document.querySelector("#giphs");
const btnGroup = document.querySelector("#buttons");
const deleteBtn = document.querySelector("#delete");
const giphySearch = document.querySelector("#searchBar");
const addGiphy = document.querySelector("#submitBtn");
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
// Always load preset buttons
document.onload = displayButtons();

// GET
function getAnime(giphName) {
  let giph = giphName.target.id;
  let url = `https://api.giphy.com/v1/gifs/search?api_key=q8DYV0M8eXqbtdQxXfnOJHMbFjtuG0Gz&q=${giph}&limit=10&offset=0&rating=r&lang=en`;
  axios
    .get(url, { timeout: 3000 })
    .then(function (res) {
      // handle success
      showOutput(res);
    })
    .catch(function (err) {
      // handle err
      showError(err);
    })
    .then(function () {
      // always executed
    });
}

// GIPHY Buttons
function displayButtons() {
  topics.forEach((button, index, buttons) => {
    const giphyBtn = document.createElement("button");
    giphyBtn.setAttribute("type", "button");
    giphyBtn.addEventListener("click", getAnime);
    giphyBtn.classList = "btn btn-outline-primary m-1";
    giphyBtn.id = `${buttons[index]}`;
    giphyBtn.textContent += buttons[index];
    btnGroup.append(giphyBtn);
  });
}

// Update Buttons
function addButton() {
  const newGiphy = giphySearch.value;
  const giphyBtn = document.createElement("button");
  console.log(newGiphy);
  console.log(topics);
  topics.push(newGiphy);
  giphyBtn.setAttribute("type", "button");
  giphyBtn.addEventListener("click", getAnime);
  giphyBtn.classList = "btn btn-outline-primary m-1";
  giphyBtn.id = `${newGiphy}`;
  giphyBtn.textContent += newGiphy;
  btnGroup.append(giphyBtn);
}

// GIPHYs
function showOutput(res) {
  const giphsArray = res.data.data;
  giphsArray.forEach((giph, index, giphs) => {
    console.log(giph.images.looping.mp4);
    displayGiphs(giphs, giph);
  });
}
// Start/Stop Loop
function startLoop(params) {
  if (condition) {
  }
}
// HTML for GIPHs
function displayGiphs(giphs, giph) {
  giphsSection.innerHTML = `


  
                <div class="col-6">
                      <div class="card">
                          <header class="card-header text-center">
                             <h5> ${giphs[0].title} </h5>
                          </header>
                          <img src= "${giphs[0].images.original_still.url}" class="card-img-top bg-dark" alt="GIPHY">
                      </div>
                  </div>
                                  <div class="col-6">
                      <div class="card">
                          <header class="card-header text-center">
                             <h5> ${giphs[1].title} </h5>
                          </header>
                          <img src= "${giphs[1].images.original_still.url}" class="card-img-top bg-dark" alt="GIPHY">
                      </div>
                  </div>
                                  <div class="col-6">
                      <div class="card">
                          <header class="card-header text-center">
                             <h5> ${giphs[2].title} </h5>
                          </header>
                          <img src= "${giphs[2].images.original_still.url}" class="card-img-top bg-dark" alt="GIPHY">
                      </div>
                  </div>
                                  <div class="col-6">
                      <div class="card">
                          <header class="card-header text-center">
                             <h5> ${giphs[3].title} </h5>
                          </header>
                          <img src= "${giphs[3].images.original_still.url}" class="card-img-top bg-dark" alt="GIPHY">
                      </div>
                  </div>
                                  <div class="col-6">
                      <div class="card">
                          <header class="card-header text-center">
                             <h5> ${giphs[4].title} </h5>
                          </header>
                          <img src= "${giphs[4].images.original_still.url}" class="card-img-top bg-dark" alt="GIPHY">
                      </div>
                  </div>
                                  <div class="col-6">
                      <div class="card">
                          <header class="card-header text-center">
                             <h5> ${giphs[5].title} </h5>
                          </header>
                          <img src= "${giphs[5].images.original_still.url}" class="card-img-top bg-dark" alt="GIPHY">
                      </div>
                  </div>
                                  <div class="col-6">
                      <div class="card">
                          <header class="card-header text-center">
                             <h5> ${giphs[6].title} </h5>
                          </header>
                          <img src= "${giphs[6].images.original_still.url}" class="card-img-top bg-dark" alt="GIPHY">
                      </div>
                  </div>
                                  <div class="col-6">
                      <div class="card">
                          <header class="card-header text-center">
                             <h5> ${giphs[7].title} </h5>
                          </header>
                          <img src= "${giphs[7].images.original_still.url}" class="card-img-top bg-dark" alt="GIPHY">
                      </div>
                  </div>
                                  <div class="col-6">
                      <div class="card">
                          <header class="card-header text-center">
                             <h5> ${giphs[8].title} </h5>
                          </header>
                          <img src= "${giphs[8].images.original_still.url}" class="card-img-top bg-dark" alt="GIPHY">
                      </div>
                  </div>
                               <div class="col-6">
                      <div class="card">
                          <header class="card-header text-center">
                             <h5> ${giphs[9].title} </h5>
                          </header>
                          <img src= "${giphs[9].images.original_still.url}" class="card-img-top bg-dark" alt="GIPHY">
                      </div>
                  </div>
      `;

  // let img = document.querySelectorAll("img");
  // let still = giph.images.original_still.url;
  // let looping = giph.images.looping.mp4;

  // img.addEventListener("click", () => {
  //   let imgUrl = img.getAttribute("src");

  //   if (imgUrl === still) {
  //     img.setAttribute("src", looping);
  //   } else {
  //     img.setAttribute("src", still);
  //   }
  // });
}

// Show Error
function showError(err) {
  const error = err;
  giphsSection.innerHTML = `
  <h1 class ="text-danger text-center"> ERROR 404: GIPHY NOT FOUND </h1>
  `;
}

// Event Listener
addGiphy.addEventListener("click", addButton);
