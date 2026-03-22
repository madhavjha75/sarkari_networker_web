let allData = [];
let currentIndex = 0;
const limit = 4;

document.addEventListener("DOMContentLoaded", () => {
  loadData();

  document.getElementById("loadMoreBtn")
    .addEventListener("click", loadMore);
});

async function loadData() {
  try {
    const res = await fetch("data.json");
    allData = await res.json();

    loadMore(); // first load
  } catch (err) {
    console.error("Error loading JSON:", err);
  }
}

function loadMore() {
  const container = document.getElementById("cardContainer");

  const nextData = allData.slice(currentIndex, currentIndex + limit);

  nextData.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.onclick = () => {
      location.href = `page/intership/dynamic-page/post.html?intership=${item.link}`;
    };

    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    `;

    container.appendChild(card);
  });

  currentIndex += limit;

  if (currentIndex >= allData.length) {
    document.getElementById("loadMoreBtn").style.display = "none";
  }
}