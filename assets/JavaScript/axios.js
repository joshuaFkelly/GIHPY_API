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
  "Dragon Ball GT",
  "Howls Moving Castle",
  "Spirited Away",
  "Seven Deadly Sins",
  "Death Note",
  "Black Butler",
  "Evangelion",
  "Full Metal Alchemist",
];
const api_key = "q8DYV0M8eXqbtdQxXfnOJHMbFjtuG0Gz";
const limit = 10;
// Always load preset buttons
document.onload = displayButtons();

// GET
function getAnime(e) {
  const q = e.target.id;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${q}&limit=${limit}&offset=0&rating=&lang=en`;
  axios
    .get(url, { timeout: 3000 })
    .then(function (res) {
      console.log(res.data.data);
      // handle success
      displayGIPHYs(res);
    })
    .then(function () {})
    .catch(function (err) {
      // handle err
      showError(err);
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
    giphyBtn.textContent = `${buttons[index]}`;
    btnGroup.append(giphyBtn);
  });
}

// Update Buttons
function addButton() {
  const newGiphy = giphySearch.value;
  const giphyBtn = document.createElement("button");
  topics.push(newGiphy);
  giphyBtn.setAttribute("type", "button");
  giphyBtn.addEventListener("click", getAnime);
  giphyBtn.classList = "btn btn-outline-primary m-1";
  giphyBtn.id = `${newGiphy}`;
  giphyBtn.textContent += newGiphy;
  btnGroup.append(giphyBtn);
}

// GIPHYs
function displayGIPHYs(res) {
  const giphsArray = res.data.data;

  giphsArray.forEach((giph) => {
    // console.log(giph);
    // giphsSection.innerHTML = `
    // <div class="col-6">
    //   <div class="card">
    //       <header class="card-header text-center">
    //          <h5> ${giph.title} </h5>
    //       </header>
    //       <img src= "${giph.images.original_still.url}" class="card-img-top bg-dark" alt="GIPHY">
    //   </div>
    // </div>
    // `;
  });

  giphsSection.innerHTML = `
        <div class="col-6">
            <div class="card">
                <header class="card-header text-center">
                   <h5> ${giphsArray[0].title} </h5>
                </header>
                <img src= "${giphsArray[0].images.original_still.url}" class="card-img-top bg-dark" alt="GIPHY">
            </div>
        </div>
    
        <div class="col-6">
          <div class="card">
              <header class="card-header text-center">
                 <h5> ${giphsArray[1].title} </h5>
              </header>
              <img src= "${giphsArray[1].images.original_still.url}" class="card-img-top bg-dark" alt="GIPHY">
          </div>
        </div>
    
        <div class="col-6">
          <div class="card">
              <header class="card-header text-center">
                 <h5> ${giphsArray[2].title} </h5>
              </header>
              <img src= "${giphsArray[2].images.original_still.url}" class="card-img-top bg-dark" alt="GIPHY">
          </div>
        </div>
    
        <div class="col-6">
          <div class="card">
              <header class="card-header text-center">
                 <h5> ${giphsArray[3].title} </h5>
              </header>
              <img src= "${giphsArray[3].images.original_still.url}" class="card-img-top bg-dark" alt="GIPHY">
          </div>
        </div>
    
        <div class="col-6">
          <div class="card">
              <header class="card-header text-center">
                 <h5> ${giphsArray[4].title} </h5>
              </header>
              <img src= "${giphsArray[4].images.original_still.url}" class="card-img-top bg-dark" alt="GIPHY">
          </div>
        </div>
    
        <div class="col-6">
          <div class="card">
              <header class="card-header text-center">
                 <h5> ${giphsArray[5].title} </h5>
              </header>
              <img src= "${giphsArray[5].images.original_still.url}" class="card-img-top bg-dark" alt="GIPHY">
          </div>
        </div>
    
        <div class="col-6">
          <div class="card">
              <header class="card-header text-center">
                 <h5> ${giphsArray[6].title} </h5>
              </header>
              <img src= "${giphsArray[6].images.original_still.url}" class="card-img-top bg-dark" alt="GIPHY">
          </div>
        </div>
    
        <div class="col-6">
          <div class="card">
              <header class="card-header text-center">
                 <h5> ${giphsArray[7].title} </h5>
              </header>
              <img src= "${giphsArray[7].images.original_still.url}" class="card-img-top bg-dark" alt="GIPHY">
          </div>
        </div>
    
        <div class="col-6">
          <div class="card">
              <header class="card-header text-center">
                 <h5> ${giphsArray[8].title} </h5>
              </header>
              <img src= "${giphsArray[8].images.original_still.url}" class="card-img-top bg-dark" alt="GIPHY">
          </div>
        </div>
    
        <div class="col-6">
          <div class="card">
              <header class="card-header text-center">
                 <h5> ${giphsArray[9].title} </h5>
              </header>
              <img src= "${giphsArray[9].images.original_still.url}" class="card-img-top bg-dark" alt="GIPHY">
          </div>
        </div>
      `;
  const originalImgs = document.querySelectorAll("img");
  originalImgs.forEach((img, index, imgs) => {
    img.addEventListener("click", (e) => {
      const imgElement = e.target;
      console.log(imgElement);
      const imgSrc = e.target.attributes.src.value;
      console.log(imgSrc);
      // const still = img.images.original_still.url
      // const looping = img.images.original.url;
      // if (imgSrc === still) {
      //   img.setAttribute("src", looping);
      // } else {
      //   img.setAttribute("src", still);
      // }
    });
  });
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
