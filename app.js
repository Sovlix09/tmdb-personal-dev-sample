const results = document.getElementById("results");
const typeFilter = document.getElementById("type-filter");

const items = [
  {
    title: "City Lights",
    type: "movie",
    year: "1931",
    summary: "A classic film entry used to test recommendation card layout and browsing flow.",
  },
  {
    title: "Signal House",
    type: "series",
    year: "2024",
    summary: "A series entry included for testing mixed-content filtering and card presentation.",
  },
  {
    title: "Weekend Escape",
    type: "movie",
    year: "2022",
    summary: "A lightweight recommendation entry used for early interface and interaction testing.",
  },
];

function renderCards(filter) {
  const filtered = filter === "all" ? items : items.filter((item) => item.type === filter);

  results.innerHTML = filtered
    .map(
      (item) => `
        <article class="card">
          <div class="meta">
            <span>${item.type}</span>
            <span>${item.year}</span>
          </div>
          <h2>${item.title}</h2>
          <p>${item.summary}</p>
        </article>
      `
    )
    .join("");
}

typeFilter.addEventListener("change", (event) => {
  renderCards(event.target.value);
});

renderCards("all");
