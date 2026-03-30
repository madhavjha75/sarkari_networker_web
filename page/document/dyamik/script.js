// ================= STEP 1: URL se id lena =================
const params = new URLSearchParams(window.location.search);

// ?id=aadhar se "aadhar" nikalega
const pageId = params.get("id");


// ================= STEP 2: JSON load =================
fetch("data.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {

    // ================= STEP 3: sahi object dhundhna =================
    const page = data.find(function(item) {
      return item.id === pageId;
    });

    // ================= STEP 4: agar nahi mila =================
    if (!page) {
      document.body.innerHTML = "<h2>Page Not Found</h2>";
      return;
    }

    // ================= STEP 5: data ko HTML me dalna =================
    for (let key in page) {

      const element = document.getElementById(key);

      if (element) {

        // link case
        if (key === "apply-link") {
          element.href = page[key];
        } else {
          element.innerText = page[key];
        }

      }

    }

  })
  .catch(function(error) {
    console.log("Error:", error);
  });


// ================= MENU =================
function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}