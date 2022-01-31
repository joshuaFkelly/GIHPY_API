const btnGroup = document.querySelector("#giphs");

function showOutput(res) {
  const giphsArray = res.data.data;
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
