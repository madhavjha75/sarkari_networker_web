document.addEventListener("DOMContentLoaded", function () {

  fetch("data.json") // 👉
    .then(res => res.json())
    .then(data => {

      const url = new URL(window.location.href);
      const id = url.searchParams.get("job");

      const post = data.find(item => item.id === id);

      if (post) {

        // =====================
        // 🔥 BASIC DATA
        // =====================
        document.getElementById("admit-heading").innerText = post.title;
        document.getElementById("admit-description").innerText = post.description;

        document.getElementById("exam-date").innerText = post.examDate;
        document.getElementById("admit-date").innerText = post.admitDate;

        document.getElementById("admit-status").innerText = post.status;

        document.getElementById("admit-link").href = post.admitLink;
        document.getElementById("official-link").href = post.officialLink;

        // =====================
        // ❓ FAQ
        // =====================
        document.getElementById("faq-one").innerText = post.faq1;
        document.getElementById("faq-two").innerText = post.faq2;
        document.getElementById("faq-three").innerText = post.faq3;

        // =====================
        // 🚀 SEO
        // =====================
        document.title = post.title;

        if (post.metaDescription) {
          document.getElementById("meta-description")
            .setAttribute("content", post.metaDescription);
        }

        if (post.keywords) {
          document.querySelector("meta[name='keywords']")
            .setAttribute("content", post.keywords);
        }

      } else {
        document.getElementById("admit-heading").innerText = "No Data Found";
      }

    })
    .catch(error => {
      console.error("Error loading data:", error);
    });

});