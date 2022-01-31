const giphsSection = document.querySelector("#giphs");
function getAnime() {
  axios
    .get(
      "https://api.giphy.com/v1/gifs/search?api_key=q8DYV0M8eXqbtdQxXfnOJHMbFjtuG0Gz&q=cowboybebop&limit=10&offset=0&rating=r&lang=en"
    )
    .then(function (response) {
      // handle success
      showOutput(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}
getAnime();

function showOutput(response) {
  const giphsArray = response.data.data;
  giphsArray.forEach((giph, index, giphs) => {
    giphsSection.innerHTML += `
                <div class="col-6">
                      <div class="card">
                          <header class="card-header text-center">
                              ${giphs[index].title}
                          </header>
                          <img src= "${giphs[index].images.original.url}" class="card-img-top bg-dark" alt="GIPHY">
                      </div>
                  </div>
      `;
  });
}
