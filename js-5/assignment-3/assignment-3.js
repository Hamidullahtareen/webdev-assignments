const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const value = document.querySelector("#query").value;

    fetch(`https://api.tvmaze.com/search/shows?q=${value}`)
        .then(response => response.json())
        .then(data => {
            const results = document.querySelector("#results");

            results.innerHTML = "";

            data.forEach(tvShow => {
                results.innerHTML += `
                    <article>
                        <h2>${tvShow.show.name}</h2>
                        <a href="${tvShow.show.url}" target="_blank">Show details</a>
                        <img src="${tvShow.show.image?.medium || ""}" alt="${tvShow.show.name}">
                        <div>${tvShow.show.summary || ""}</div>
                    </article>
                `;
            });
        });
});