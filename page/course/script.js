
function getCourseId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("course");
}

async function loadCourse() {

  const id = getCourseId();

  if (!id) {
    console.log("No course ID in URL");
    return;
  }

  try {
    const response = await fetch("data.json");
    const data = await response.json();

    console.log("Loaded Data:", data);

    // ✅ ARRAY search
    const course = data.find(c => c.id === id);

    if (!course) {
      console.log("Course not found");
      return;
    }

    // ✅ Data fill
    for (let key in course) {

      const element = document.getElementById(key);

      if (element) {
        if (key === "apply-link") {
          element.href = course[key];
        } else {
          element.innerText = course[key];
        }
      }
    }

    // 🔥 SEO auto (bonus)
    document.title = course["course-heading"];

  } catch (error) {
    console.error("Error loading course:", error);
  }
}

// ✅ menu fix
function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}

// ✅ run
window.onload = loadCourse;

