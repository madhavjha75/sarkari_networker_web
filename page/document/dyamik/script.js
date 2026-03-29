document.addEventListener("DOMContentLoaded", () => {

  fetch("dynamik/data.json")
    .then(res => {
      if (!res.ok) {
        throw new Error("JSON load nahi hua");
      }
      return res.json();
    })
    .then(data => {

      // Text Data
      setText("heading", data.heading);
      setText("introduction", data.introduction);
      setText("eligibility", data.eligibility);

      setText("document-one", data["document-one"]);
      setText("document-two", data["document-two"]);
      setText("document-three", data["document-three"]);

      // Links
      setLink("apply-link", data["apply-link"]);
      setLink("download-link", data["download-link"]);
      setLink("update-link", data["update-link"]);

    })
    .catch(err => {
      console.error("Error:", err);
    });

});


// Helper Functions (Code ko clean banane ke liye)
function setText(id, value) {
  const el = document.getElementById(id);
  if (el && value) el.innerText = value;
}

function setLink(id, url) {
  const el = document.getElementById(id);
  if (el && url) el.href = url;
}