let news = [];
let index = 0;
const perLoad = 4;

// JSON LOAD
fetch("newspaper-json-java/data.json")
  .then(res => res.json())
  .then(data => {
    news = data;
    loadMore();
  });

// FORMAT DATE + TIME
function formatDateTime(date){
  const d = new Date(date);

  const dateStr = d.toLocaleDateString('hi-IN',{
    day:'numeric',month:'long',year:'numeric'
  });

  const timeStr = d.toLocaleTimeString('hi-IN',{
    hour:'2-digit',minute:'2-digit'
  });

  return `📅 ${dateStr} | 🕒 ${timeStr}`;
}

// TIME AGO
function getTimeAgo(date){
  const now = new Date();
  const past = new Date(date);
  const diff = Math.floor((now - past)/1000);

  const hours = Math.floor(diff/3600);
  const days = Math.floor(diff/86400);

  if(hours < 24) return hours + " घंटे पहले";
  return days + " दिन पहले";
}

// LOAD MORE
function loadMore(){
  const container = document.getElementById("newsContainer");
  const btn = document.getElementById("loadBtn");

  for(let i=0;i<perLoad;i++){
    if(index >= news.length){
      btn.style.display="none";
      return;
    }

    const item = news[index];

    container.innerHTML += `
      <div class="card">
        <img src="${item.img}">
        <div class="card-content">
          <h3>${item.title}</h3>
          <p style="color:gray;font-size:13px;">${formatDateTime(item.date)}</p>
          <p style="color:#007bff;font-size:13px;">⏱️ ${getTimeAgo(item.date)}</p>
          <a href="${item.link}" class="btn">पूरा पढ़ें</a>
        </div>
      </div>
    `;

    index++;
  }
}

// LIVE SEARCH
function liveSearch(){
  const input=document.getElementById("searchInput").value.toLowerCase();
  const container=document.getElementById("newsContainer");

  container.innerHTML="";

  if(input===""){
    index=0;
    document.getElementById("loadBtn").style.display="block";
    loadMore();
    return;
  }

  const filtered=news.filter(item=>item.title.toLowerCase().includes(input));

  if(filtered.length===0){
    container.innerHTML="<p>कोई परिणाम नहीं मिला ❌</p>";
    return;
  }

  filtered.forEach(item=>{
    container.innerHTML+=`
      <div class="card">
        <img src="${item.img}">
        <div class="card-content">
          <h3>${item.title}</h3>
          <p>${formatDateTime(item.date)}</p>
          <p>⏱️ ${getTimeAgo(item.date)}</p>
          <a href="${item.link}" class="btn">पूरा पढ़ें</a>
        </div>
      </div>
    `;
  });

  document.getElementById("loadBtn").style.display="none";
}

// MENU
function toggleMenu(){
  document.getElementById("menu").classList.toggle("active");
}