function getCourseId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("course");
}

async function loadCourse() {

  const id = getCourseId();

  try {

    const response = await fetch("course/data.json");
    const data = await response.json();

    const course = data[id];

    if (!course) return;

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

  } catch (error) {
    console.error("Error loading course:", error);
  }
}

window.onload = loadCourse;