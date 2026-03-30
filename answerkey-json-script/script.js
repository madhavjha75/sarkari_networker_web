let allJobs = [];
let currentIndex = 0;
const limit = 10;

document.addEventListener("DOMContentLoaded", () => {
  fetch("answerkey-json-script/data.json")
    .then(res => res.json())
    .then(data => {
      allJobs = data;
      loadMoreJobs();
    });

  document.getElementById("loadMoreBtn")
    .addEventListener("click", loadMoreJobs);
});

function loadMoreJobs() {
  const container = document.getElementById("job-container");

  const nextJobs = allJobs.slice(currentIndex, currentIndex + limit);

  nextJobs.forEach(job => {
    const div = document.createElement("div");
    div.classList.add("job");

    div.innerHTML = `
      <a href="${job.link}">${job.title}</a>
    `;

    container.appendChild(div);
  });

  currentIndex += limit;

  if (currentIndex >= allJobs.length) {
    document.getElementById("loadMoreBtn").style.display = "none";
  }
}