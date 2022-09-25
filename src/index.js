const submitButton = document.getElementById("submit-data");
const textInput = document.getElementById("input-show");
const textBody = document.getElementById("body-text");

async function getData() {
  const url = "https://api.tvmaze.com/search/shows?q=" + textInput.value;
  const dataPromise = await fetch(url);
  const dataJSON = await dataPromise.json();
  for (let i = 0; i < dataJSON.length; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("show-data");

    const newImg = document.createElement("img");
    if (dataJSON[i].show.image != null) {
      newImg.src = dataJSON[i].show.image.medium;
    }
    newDiv.appendChild(newImg);

    const innerDiv = document.createElement("div");
    innerDiv.classList.add("show-info");

    const newH1 = document.createElement("h1");
    newH1.innerHTML = dataJSON[i].show.name;
    innerDiv.appendChild(newH1);

    innerDiv.innerHTML += dataJSON[i].show.summary;

    newDiv.appendChild(innerDiv);
    textBody.appendChild(newDiv);
  }
}

submitButton.addEventListener("click", () => getData());
