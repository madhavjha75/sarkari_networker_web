// async function loadJSON() {

//   const params = new URLSearchParams(window.location.search);
//   const page = params.get("page");

//   try {
//     const res = await fetch("data.json");
//     const data = await res.json();

//     // ⭐ array से सही data निकालो
//     const pageData = data.find(item => item.id === page);

//     if (!pageData) {
//       document.body.innerHTML = "<h2>❌ Page Not Found</h2>";
//       return;
//     }

//     // ✅ Safe function (undefined error नहीं आएगा)
//     const setText = (id, value) => {
//       const el = document.getElementById(id);
//       if (el && value) el.innerText = value;
//     };

//     setText("topic", pageData.topic);
//     setText("topic-introduction", pageData["topic-introduction"]);

//     setText("topic-highlight", pageData["topic-highlight"]);
//     setText("topic-highlight-text", pageData["topic-highlight-text"]);

//     setText("topic-button", pageData["topic-button"]);

//     const btn = document.getElementById("app-link");
//     if (btn) {
//       btn.innerText = pageData["app-link-text"] || "";
//       btn.href = pageData["app-link"] || "#";
//     }

//     setText("topic-details", pageData["topic-details"]);
//     setText("topic-detail-one", pageData["topic-detail-one"]);
//     setText("topic-detail-two", pageData["topic-detail-two"]);
//     setText("topic-detail-three", pageData["topic-detail-three"]);
//     setText("topic-detail-four", pageData["topic-detail-four"]);
//     setText("topic-detail-five", pageData["topic-detail-five"]);

//     setText("topic-steps", pageData["topic-steps"]);
//     setText("topic-step-one", pageData["topic-step-one"]);
//     setText("topic-step-two", pageData["topic-step-two"]);
//     setText("topic-step-three", pageData["topic-step-three"]);
//     setText("topic-step-four", pageData["topic-step-four"]);

//     setText("topic-extra", pageData["topic-extra"]);
//     setText("topic-extra-info", pageData["topic-extra-info"]);

//   } catch (err) {
//     console.error("Error loading JSON:", err);
//     document.body.innerHTML = "<h2>⚠️ Data Load Error</h2>";
//   }
// }

// document.addEventListener("DOMContentLoaded", loadJSON);


async function loadJSON() {

  const params = new URLSearchParams(window.location.search);
  const page = params.get("page");

  try {
    const res = await fetch("data.json");
    const data = await res.json();

    const pageData = data.find(item => item.id === page);

    // ❗ agar data nahi mila
    if (!pageData) {
      document.body.innerHTML = "<h2>❌ Page Not Found</h2>";
      return;
    }

    // 🔥 ✅ Banner Dynamic (yaha add kiya)
    const banner = document.getElementById("banner");
    if (banner && pageData.image) {
      banner.style.backgroundImage = `url(${pageData.image})`;
      banner.style.backgroundSize = "cover";
      banner.style.backgroundPosition = "center";
      banner.style.backgroundRepeat = "no-repeat";
    }

    // ✅ Safe function
    const setText = (id, value) => {
      const el = document.getElementById(id);
      if (el && value) el.innerText = value;
    };

    setText("topic", pageData.topic);
    setText("topic-introduction", pageData["topic-introduction"]);

    setText("topic-highlight", pageData["topic-highlight"]);
    setText("topic-highlight-text", pageData["topic-highlight-text"]);

    setText("topic-button", pageData["topic-button"]);

    const btn = document.getElementById("app-link");
    if (btn) {
      btn.innerText = pageData["app-link-text"] || "";
      btn.href = pageData["app-link"] || "#";
    }


    setText("topic-details", pageData["topic-details"]);
    setText("topic-detail-one", pageData["topic-detail-one"]);
    setText("topic-detail-two", pageData["topic-detail-two"]);
    setText("topic-detail-three", pageData["topic-detail-three"]);
    setText("topic-detail-four", pageData["topic-detail-four"]);
    setText("topic-detail-five", pageData["topic-detail-five"]);

    setText("topic-steps", pageData["topic-steps"]);
    setText("topic-step-one", pageData["topic-step-one"]);
    setText("topic-step-two", pageData["topic-step-two"]);
    setText("topic-step-three", pageData["topic-step-three"]);
    setText("topic-step-four", pageData["topic-step-four"]);

    setText("topic-extra", pageData["topic-extra"]);
    setText("topic-extra-info", pageData["topic-extra-info"]);

  } catch (err) {
    console.error("Error loading JSON:", err);
    document.body.innerHTML = "<h2>⚠️ Data Load Error</h2>";
  }
}

document.addEventListener("DOMContentLoaded", loadJSON);