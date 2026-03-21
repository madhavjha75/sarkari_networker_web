
let allData = [];
let filteredData = [];
let start = 0;
let limit = 5;

fetch("data.json")
  .then(res => res.json())
  .then(data => {
    allData = data;
    filteredData = data;
    showData();
  });

function showData() {
  let output = "";

  let slice = filteredData.slice(start, start + limit);

  slice.forEach(job => {
    output += `
      <div class="job">
        <a href="${job.link}">${job.title}</a>
        <p>${job.date}</p>
      </div>
    `;
  });

  document.getElementById("jobList").innerHTML += output;
}

function loadMore() {
  start += limit;
  showData();
}

function filterCategory(cat) {
  start = 0;
  document.getElementById("jobList").innerHTML = "";

  if (cat === "All") {
    filteredData = allData;
  } else {
    filteredData = allData.filter(job => job.category === cat);
  }

  showData();
}

document.getElementById("search").addEventListener("input", function() {
  let value = this.value.toLowerCase();
  start = 0;
  document.getElementById("jobList").innerHTML = "";

  filteredData = allData.filter(job =>
    job.title.toLowerCase().includes(value)
  );

  showData();
});
