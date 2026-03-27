

document.addEventListener("DOMContentLoaded", function () {

  const url = new URL(window.location.href);
  let id = url.searchParams.get("job");
  let type = url.searchParams.get("type");

  if (!id) {
    document.body.innerHTML = "Invalid URL";
    return;
  }

  id = id.toLowerCase().trim();

  // 🔥 JSON map
  const jsonMap = {
    data: "data.json",
    dataone: "data-one.json",
    datatwo: "data-two.json"
  };

  // 🔥 सभी JSON files
  const allFiles = Object.values(jsonMap);

  // 👉 अगर type दिया है
  if (type && jsonMap[type]) {

    fetch(jsonMap[type])
      .then(res => res.json())
      .then(data => {

        const post = data.find(item =>
          item.id && item.id.toLowerCase() === id
        );

        if (!post) {
          document.body.innerHTML = "Post Not Found";
          return;
        }

        render(post);

      })
      .catch(err => console.error(err));

  } else {

    // 👉 अगर type नहीं दिया → सभी JSON check
    let index = 0;

    const loadData = () => {
      if (index >= allFiles.length) {
        document.body.innerHTML = "Post Not Found";
        return;
      }

      fetch(allFiles[index])
        .then(res => res.json())
        .then(data => {

          const post = data.find(item =>
            item.id && item.id.toLowerCase() === id
          );

          if (post) {
            render(post);
          } else {
            index++;
            loadData();
          }

        })
        .catch(() => {
          index++;
          loadData();
        });
    };

    loadData();
  }

  // 🔥 render function (common)
  function render(post) {
    Object.keys(post).forEach(key => {
      const el = document.getElementById(key);

      if (el) {
        if (el.tagName === "A") {
          el.href = post[key];
        } else if (el.tagName === "IFRAME") {
          el.src = post[key];
        } else {
          el.innerText = post[key];
        }
      }
    });

    document.title = post["job-heading"];
  }

});
