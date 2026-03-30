// URL se id nikalna (example: answer.html?id=up-police-answer-key-2026)
const params = new URLSearchParams(window.location.search);
const pageId = params.get("job");

// JSON file load
fetch("data.json")
  .then(res => res.json())
  .then(data => {

    // matching data find karo
    const d = data.find(item => item.id === pageId);

    if (!d) {
      document.body.innerHTML = "<h2 style='text-align:center'>Data Not Found 😢</h2>";
      return;
    }

    // 🔥 TITLE + META SEO
    document.getElementById("title").innerText = d.title;
    document.getElementById("meta-description").setAttribute("content", d.description);

    // 🔥 MAIN CONTENT
    document.getElementById("answer-heading").innerText = d["answer-heading"];
    document.getElementById("answer-description").innerText = d["answer-description"];

    document.getElementById("exam-date").innerText = d["exam-date"];
    document.getElementById("answer-date").innerText = d["answer-date"];

    document.getElementById("answer-status").innerText = d["answer-status"];

    // 🔥 LINKS
    document.getElementById("answer-link").href = d["answer-link"];
    document.getElementById("official-link").href = d["official-link"];

    // 🔥 FAQ
    document.getElementById("faq-one").innerText = d["faq-one"];
    document.getElementById("faq-two").innerText = d["faq-two"];
    document.getElementById("faq-three").innerText = d["faq-three"];

  })
  .catch(err => {
    console.error("Error loading JSON:", err);
  });