const btnGroup = document.querySelector("#giphs");

topics.forEach((button, index, buttons) => {
  const giphyBtn = document.createElement("button");
  giphyBtn.setAttribute("type", "button");
  //   giphyBtn.addEventListener("click");
  giphyBtn.classList = "btn btn-outline-primary m-1";
  giphyBtn.textContent += buttons[index];
  btnGroup.append(giphyBtn);
});
