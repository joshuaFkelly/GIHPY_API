const giphsSection = document.querySelector('#giphs');
const btnGroup = document.querySelector('#buttons');
const deleteBtn = document.querySelector('#delete');
const giphySearch = document.querySelector('#searchBar');
const addGiphy = document.querySelector('#submitBtn');
const add10Btn = document.querySelector('#add10');
const moreGiphsDiv = document.querySelector('#moreGiphs');
const topics = [
  'Naruto',
  'CowBoy Bebop',
  'Dragon Ball Z',
  'Dragon Ball Super',
  'Attack on Titan',
  'Inuyasha',
  'Dragon Ball GT',
  'Howls Moving Castle',
  'Spirited Away',
  'Seven Deadly Sins',
  'Death Note',
  'Black Butler',
  'Evangelion',
  'Full Metal Alchemist',
];
const url = 'api.giphy.com/v1/gifs/search';
const api_key = 'q8DYV0M8eXqbtdQxXfnOJHMbFjtuG0Gz';
let limit = 10;
let q = '';
let offset = 0;
const rating = 'r';
const lang = 'en';

// Always load preset buttons
document.onload = displayButtons();

// GET
function getAnime() {
  q = this.id;
  axios
    .get(
      `https://${url}?api_key=${api_key}&q=${q}&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}`,
      {
        timeout: 3000,
      }
    )
    .then(function (res) {
      // handle success
      displayGIPHYs(res);
    })
    .catch(function (err) {
      // handle err
      showError(err);
    });
}

// GIPHY Buttons
function displayButtons() {
  topics.forEach((topic, index, topics) => {
    const btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.addEventListener('click', getAnime);
    btn.classList = 'btn btn-outline-primary m-1';
    btn.id += `${topic}`;
    btn.textContent += `${topic}`;
    btnGroup.append(btn);
  });
}

// Update Buttons
function addButton() {
  const newGiphyName = giphySearch.value.replace(
    /(^\w{1})|(\s+\w{1})/g,
    (letter) => letter.toUpperCase()
  );
  const giphyBtn = document.createElement('button');
  topics.push(newGiphyName);
  giphyBtn.setAttribute('type', 'button');
  giphyBtn.addEventListener('click', getAnime);
  giphyBtn.classList = 'btn btn-outline-primary m-1';
  giphyBtn.id = newGiphyName;
  giphyBtn.textContent = newGiphyName;
  btnGroup.append(giphyBtn);
}

// Event Listener
addGiphy.addEventListener('click', addButton);

// Display Giphs
function displayGIPHYs(res) {
  const giphsArray = res.data.data;

  giphsArray.forEach((giph, index, giphs) => {
    giphsSection.innerHTML = `
    <div class="col-6">
      <div class="card">
        <header class="card-header text-center">
          <h5> ${giphs[0].title} </h5>
        </header>
        <img 
          src= ${giphs[0].images.original_still.url} 
          class="card-img-top bg-dark" 
          alt="GIPHY"
        >
      </div>
    </div>

    <div class="col-6">
      <div class="card">
        <header class="card-header text-center">
          <h5> ${giphs[1].title} </h5>
        </header>
        <img 
          src= ${giphs[1].images.original_still.url} 
          class="card-img-top bg-dark" 
          alt="GIPHY"
        >
      </div>
    </div>

    <div class="col-6">
      <div class="card">
        <header class="card-header text-center">
          <h5> ${giphs[2].title} </h5>
        </header>
        <img 
          src= ${giphs[2].images.original_still.url} 
          class="card-img-top bg-dark" 
          alt="GIPHY"
        >
      </div>
    </div>

    <div class="col-6">
      <div class="card">
        <header class="card-header text-center">
          <h5> ${giphs[3].title} </h5>
        </header>
        <img 
          src= ${giphs[3].images.original_still.url} 
          class="card-img-top bg-dark" 
          alt="GIPHY"
        >
      </div>
    </div>

    <div class="col-6">
      <div class="card">
        <header class="card-header text-center">
          <h5> ${giphs[4].title} </h5>
        </header>
        <img 
          src= ${giphs[4].images.original_still.url} 
          class="card-img-top bg-dark" 
          alt="GIPHY"
        >
      </div>
    </div>

    <div class="col-6">
      <div class="card">
        <header class="card-header text-center">
          <h5> ${giphs[5].title} </h5>
        </header>
        <img 
        src= ${giphs[5].images.original_still.url} 
        class="card-img-top bg-dark" 
        alt="GIPHY"
        >
      </div>
    </div>

    <div class="col-6">
      <div class="card">
        <header class="card-header text-center">
          <h5> ${giphs[6].title} </h5>
        </header>
        <img 
        src= ${giphs[6].images.original_still.url} 
        class="card-img-top bg-dark" 
        alt="GIPHY"
        >
      </div>
    </div>

        <div class="col-6">
      <div class="card">
        <header class="card-header text-center">
          <h5> ${giphs[7].title} </h5>
        </header>
        <img 
          src= ${giphs[7].images.original_still.url} 
          class="card-img-top bg-dark" 
          alt="GIPHY"
        >
      </div>
    </div>

    <div class="col-6">
      <div class="card">
        <header class="card-header text-center">
          <h5> ${giphs[8].title} </h5>
        </header>
        <img 
          src= ${giphs[8].images.original_still.url}
          class="card-img-top bg-dark" alt="GIPHY"
        >
      </div>
    </div>

    <div class="col-6">
      <div class="card">
        <header class="card-header text-center">
          <h5> ${giphs[9].title} </h5>
        </header>
        <img 
        src= ${giphs[9].images.original_still.url} 
        class="card-img-top bg-dark" alt="GIPHY"
        >
      </div>
    </div>
    `;

    const image = document.querySelectorAll('img');
    image.forEach((img, i) => {
      img.addEventListener('click', function (e) {
        const looping = giphs[i].images.original.url;
        const still = giphs[i].images.original_still.url;
        if (this.src === still) {
          this.setAttribute('src', looping);
        } else {
          this.setAttribute('src', still);
        }
      });
    });
  });
}

// Show Error
function showError(err) {
  giphsSection.innerHTML = `
  <h1 class ="text-danger text-center"> ${err} </h1>
  `;
}
