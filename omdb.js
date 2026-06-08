input = document.querySelector("#MovieInput")
searchBtn = document.querySelector("#searchBtn");
result = document.querySelector("#movieResult");
const apiKey = "79e798fb"


searchBtn.addEventListener("click", () => {
    const movieName = input.value.trim();
    result.innerHTML = "";

    if (movieName === "") {
        result.innerText = "Please enter a movie name!";
        return;
    }

    const api = `https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`
    console.log(api);

    fetch(api)
        .then(res => res.json())
        .then((data) => {
            console.log(data);

            if (data.Response === "False") {
                const msg = document.createElement("h2");
                msg.style.color = "red";
                msg.style.textAlign = "center";
                msg.innerText = "Error Movie Not Found ";
                result.append(msg);
                return;
            }

            displayMovie(data);
        })

        })                                           //

    function displayMovie(movie) {
        const box = document.createElement("div");

        const image = document.createElement("img");
        image.setAttribute("src", movie.Poster);

        const title = document.createElement("h2");
        title.innerText = `Title : ${movie.Title}`;

        const date = document.createElement("h3");
        date.innerText = `Release Date : ${movie.Released}`;

        const id = document.createElement("h3");
        id.innerText = `Id : ${movie.imdbID}`;

        const rating = document.createElement("h3");
        if (parseFloat(movie.imdbRating) <= 8.5) rating.innerText = `Rating : ${movie.imdbRating}`;
        else rating.innerText = `Rating : ${movie.imdbRating}   Recommended`;



        box.append(image, title, date, id, rating);
        result.append(box);
    }
