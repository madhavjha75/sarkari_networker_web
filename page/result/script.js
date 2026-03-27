async function loadResultData() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("job");

    const res = await fetch("data.json");
    const data = await res.json();

    const job = data.find(item => item.id === id);

    if (!job) {
        document.body.innerHTML = "<h2>Result Not Found</h2>";
        return;
    }

    // Title + SEO
    document.title = job.title + " | Sarkari Networker";
    document.getElementById("meta-description").setAttribute("content", job.description);

    // Fill Data
    document.getElementById("result-heading").innerText = job.title;
    document.getElementById("result-description").innerText = job.description;

    document.getElementById("exam-date").innerText = job.examDate;
    document.getElementById("result-date").innerText = job.resultDate;
    document.getElementById("result-status").innerText = job.status;

    document.getElementById("result-link").href = job.resultLink;
    document.getElementById("official-link").href = job.officialLink;

    document.getElementById("faq-one").innerText = job.faq1;
    document.getElementById("faq-two").innerText = job.faq2;
    document.getElementById("faq-three").innerText = job.faq3;
}

loadResultData();