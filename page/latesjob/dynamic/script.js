
document.addEventListener("DOMContentLoaded", function () {

  const params = new URLSearchParams(window.location.search);
  const id = params.get("job");

  fetch("data.json")
    .then(res => res.json())
    .then(data => {

      const post = data.find(item => item.id === id);

      if (!post) {
        document.body.innerHTML = "Post Not Found";
        return;
      }


       document.title = post.title;

      // 🔥 META DESCRIPTION
      document.querySelector('meta[name="description"]')
        .setAttribute("content", post.description);

      // 🔥 META KEYWORDS
      document.querySelector('meta[name="keywords"]')
        .setAttribute("content", post.keywords);

      // 🔹 Heading
      document.getElementById("job-heading").innerText = post["job-heading"];

      // 🔹 Introduction
      document.getElementById("introduction").innerText = post["introduction"];

      // 🔹 Key Points
      document.getElementById("recruitment-body").innerText = post["recruitment-body"];
      document.getElementById("qualification").innerText = post["qualification"];
      document.getElementById("exam-mode").innerText = post["exam-mode"];

      // 🔹 Dates
      document.getElementById("notification-date").innerText = post["notification-date"];
      document.getElementById("apply-start-date").innerText = post["apply-start-date"];
      document.getElementById("apply-last-date").innerText = post["apply-last-date"];
      document.getElementById("exam-date").innerText = post["exam-date"];
      document.getElementById("admitcard-date").innerText = post["admitcard-date"];
      document.getElementById("result-date").innerText = post["result-date"];

      // 🔹 Fee
      document.getElementById("categeory-fee").innerText = post["categeory-fee"];
      document.getElementById("fee-number").innerText = post["fee-number"];
      document.getElementById("categeory-fee1").innerText = post["categeory-fee1"];
      document.getElementById("fee-number1").innerText = post["fee-number1"];

      // 🔹 Age
      document.getElementById("minimum-age").innerText = post["minimum-age"];
      document.getElementById("maximum-age").innerText = post["maximum-age"];

      // 🔹 Vacancy
      document.getElementById("total-vacancy").innerText = post["total-vacancy"];
      document.getElementById("post-vacancy").innerText = post["post-vacancy"];

      // 🔹 Post Name
      document.getElementById("post-name").innerText = post["post-name"];

      // 🔹 Eligibility
      document.getElementById("eligibility").innerText = post["eligibility"];

      // 🔹 Salary
      document.getElementById("salary").innerText = post["salary"];

      // 🔹 Selection
      document.getElementById("selection-method").innerText = post["selection-method"];

       document.getElementById("apply-link").href = post["apply-link"];
      
      document.getElementById("official-website").href = post["official-website"];
      document.getElementById("video-box").src = post["video-box"];

    
     

    })
    .catch(error => {
      console.error("Error loading data:", error);
    });

});




















  