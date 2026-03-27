

// document.addEventListener("DOMContentLoaded", function () {

//   const params = new URLSearchParams(window.location.search);
//   const id = params.get("job");


 
//   fetch("data.json")
//     .then(res => res.json())
//     .then(data => {

//       const post = data.find(item => item.id == id);

//       if (!post) {
//         document.body.innerHTML = "Post Not Found";
//         return;
//       }

//       document.title = post["job-heading"];

//       document.getElementById("job-heading").innerText = post["job-heading"];
//       document.getElementById("introduction").innerText = post["introduction"];
//       document.getElementById("recruitment-body").innerText = post["recruitment-body"];
//       document.getElementById("qualification").innerText = post["qualification"];
//       document.getElementById("exam-mode").innerText = post["exam-mode"];

//       document.getElementById("notification-date").innerText = post["notification-date"];
//       document.getElementById("apply-start-date").innerText = post["apply-start-date"];
//       document.getElementById("apply-last-date").innerText = post["apply-last-date"];
//       document.getElementById("exam-date").innerText = post["exam-date"];
//       document.getElementById("admitcard-date").innerText = post["admitcard-date"];
//       document.getElementById("result-date").innerText = post["result-date"];

//       document.getElementById("categeory-fee").innerText = post["categeory-fee"];
//       document.getElementById("fee-number").innerText = post["fee-number"];
//       document.getElementById("categeory-fee1").innerText = post["categeory-fee1"];
//       document.getElementById("fee-number1").innerText = post["fee-number1"];

//       document.getElementById("minimum-age").innerText = post["minimum-age"];
//       document.getElementById("maximum-age").innerText = post["maximum-age"];

//       document.getElementById("total-vacancy").innerText = post["total-vacancy"];

//       document.getElementById("post-name-one").innerText = post["post-name-one"];
//       document.getElementById("post-name-two").innerText = post["post-name-two"];
//       document.getElementById("post-name-three").innerText = post["post-name-three"];
//       document.getElementById("post-name-four").innerText = post["post-name-four"];
//       document.getElementById("post-name-five").innerText = post["post-name-five"];
//       document.getElementById("post-name-six").innerText = post["post-name-six"];
//       document.getElementById("post-name-seven").innerText = post["post-name-seven"];
//       document.getElementById("post-name-eight").innerText = post["post-name-eight"];
//       document.getElementById("post-name-nine").innerText = post["post-name-nine"];
//       document.getElementById("post-name-ten").innerText = post["post-name-ten"];

//       document.getElementById("post-name-one-vacancy").innerText = post["post-name-one-vacancy"];
//       document.getElementById("post-name-two-vacancy").innerText = post["post-name-two-vacancy"];
//       document.getElementById("post-name-three-vacancy").innerText = post["post-name-three-vacancy"];
//       document.getElementById("post-name-four-vacancy").innerText = post["post-name-four-vacancy"];
//       document.getElementById("post-name-five-vacancy").innerText = post["post-name-five-vacancy"];
//       document.getElementById("post-name-six-vacancy").innerText = post["post-name-six-vacancy"];
//       document.getElementById("post-name-seven-vacancy").innerText = post["post-name-seven-vacancy"];
//       document.getElementById("post-name-eight-vacancy").innerText = post["post-name-eight-vacancy"];
//       document.getElementById("post-name-nine-vacancy").innerText = post["post-name-nine-vacancy"];
//       document.getElementById("post-name-ten-vacancy").innerText = post["post-name-ten-vacancy"];
//       document.getElementById("eligibility").innerText = post["eligibility"];
//       document.getElementById("salary").innerText = post["salary"];

//       document.getElementById("banefits-1").innerText = post["banefits-1"];
//       document.getElementById("banefits-2").innerText = post["banefits-2"];
//       document.getElementById("banefits-3").innerText = post["banefits-3"];
//       document.getElementById("banefits-4").innerText = post["banefits-4"];
//       document.getElementById("banefits-5").innerText = post["banefits-5"];

//       document.getElementById("subject-1").innerText = post["subject-1"];
//       document.getElementById("subject-1-topics").innerText = post["subject-1-topics"];

//       document.getElementById("subject-2").innerText = post["subject-2"];
//       document.getElementById("subject-2-topics").innerText = post["subject-2-topics"];

//       document.getElementById("subject-3").innerText = post["subject-3"];
//       document.getElementById("subject-3-topics").innerText = post["subject-3-topics"];
//        document.getElementById("subject-4").innerText = post["subject-4"];
//       document.getElementById("subject-4-topics").innerText = post["subject-4-topics"];

//        document.getElementById("subject-5").innerText = post["subject-5"];
//       document.getElementById("subject-5-topics").innerText = post["subject-5-topics"];

//        document.getElementById("subject-6").innerText = post["subject-6"];
//       document.getElementById("subject-6-topics").innerText = post["subject-6-topics"];

//        document.getElementById("subject-7").innerText = post["subject-7"];
//       document.getElementById("subject-7-topics").innerText = post["subject-7-topics"];

//        document.getElementById("subject-8").innerText = post["subject-8"];
//       document.getElementById("subject-8-topics").innerText = post["subject-8-topics"];

//        document.getElementById("subject-9").innerText = post["subject-9"];
//       document.getElementById("subject-9-topics").innerText = post["subject-9-topics"];

//        document.getElementById("subject-10").innerText = post["subject-10"];
//       document.getElementById("subject-10-topics").innerText = post["subject-10-topics"];
//       document.getElementById("post-vacancy-name-one").innerText = post["post-vacancy-name-one"];
//       document.getElementById("total-vacancy-count-one").innerText = post["total-vacancy-count-one"];
//       document.getElementById("post-vacancy-name-two").innerText = post["post-vacancy-name-two"];
//       document.getElementById("total-vacancy-count-two").innerText = post["total-vacancy-count-two"];
//        document.getElementById("post-vacancy-name-three").innerText = post["post-vacancy-name-three"];
//       document.getElementById("total-vacancy-count-three").innerText = post["total-vacancy-count-three"];
//        document.getElementById("post-vacancy-name-four").innerText = post["post-vacancy-name-four"];
//       document.getElementById("total-vacancy-count-four").innerText = post["total-vacancy-count-four"];
//        document.getElementById("post-vacancy-name-five").innerText = post["post-vacancy-name-five"];
//       document.getElementById("total-vacancy-count-five").innerText = post["total-vacancy-count-five"];
//        document.getElementById("post-vacancy-name-six").innerText = post["post-vacancy-name-six"];
//       document.getElementById("total-vacancy-count-six").innerText = post["total-vacancy-count-six"];
//        document.getElementById("post-vacancy-name-seven").innerText = post["post-vacancy-name-seven"];
//       document.getElementById("total-vacancy-count-seven").innerText = post["total-vacancy-count-seven"];
//        document.getElementById("post-vacancy-name-eight").innerText = post["post-vacancy-name-eight"];
//       document.getElementById("total-vacancy-count-eight").innerText = post["total-vacancy-count-eight"];
//        document.getElementById("post-vacancy-name-nine").innerText = post["post-vacancy-name-nine"];
//       document.getElementById("total-vacancy-count-nine").innerText = post["total-vacancy-count-nine"];
//        document.getElementById("post-vacancy-name-ten").innerText = post["post-vacancy-name-ten"];
//       document.getElementById("total-vacancy-count-ten").innerText = post["total-vacancy-count-ten"];



//       document.getElementById("exam-pattern-one").innerText = post["exam-pattern-one"];
//       document.getElementById("exam-pattern-two").innerText = post["exam-pattern-two"];
//       document.getElementById("exam-pattern-three").innerText = post["exam-pattern-three"];
//       document.getElementById("exam-pattern-four").innerText = post["exam-pattern-four"];
//         document.getElementById("selection-method").innerText = post["selection-method"];

//       document.getElementById("apply-link").href = post["apply-link"];
//       document.getElementById("official-website").href = post["official-website"];
//       document.getElementById("video-box").src = post["video-box"];

//     })
//     .catch(error => {
//       console.error("Error:", error);
//     });

// });



































// document.addEventListener("DOMContentLoaded", function () {

//   const url = new URL(window.location.href);
//   let id = url.searchParams.get("job");


//   if (!id) {
//     document.body.innerHTML = "ID not found in URL";
//     return;
//   }

//   id = id.trim().toLowerCase();

//   fetch("data.json")   // ⚠️ path check karo
//     .then(res => res.json())
//     .then(data => {






      
//       const post = data.find(item =>
//         item.id && item.id.trim().toLowerCase() === id
//       );

//       console.log("FOUND POST:", post);

//       if (!post) {
//         document.body.innerHTML = "Post Not Found";
//         return;

//       }


      
//   document.title = post["job-heading"];
// document.getElementById("job-heading").innerText = post["job-heading"];
// document.getElementById("introduction").innerText = post["introduction"];
// document.getElementById("recruitment-body").innerText = post["recruitment-body"];
// document.getElementById("qualification").innerText = post["qualification"];
// document.getElementById("exam-mode").innerText = post["exam-mode"];

// document.getElementById("notification-date").innerText = post["notification-date"];
// document.getElementById("apply-start-date").innerText = post["apply-start-date"];
// document.getElementById("apply-last-date").innerText = post["apply-last-date"];
// document.getElementById("exam-date").innerText = post["exam-date"];
// document.getElementById("admitcard-date").innerText = post["admitcard-date"];
// document.getElementById("result-date").innerText = post["result-date"];

// document.getElementById("categeory-fee").innerText = post["categeory-fee"];
// document.getElementById("fee-number").innerText = post["fee-number"];
// document.getElementById("categeory-fee1").innerText = post["categeory-fee1"];
// document.getElementById("fee-number1").innerText = post["fee-number1"];

// document.getElementById("minimum-age").innerText = post["minimum-age"];
// document.getElementById("maximum-age").innerText = post["maximum-age"];

// document.getElementById("total-vacancy").innerText = post["total-vacancy"];

// document.getElementById("post-name-one").innerText = post["post-name-one"];
// document.getElementById("post-name-one-vacancy").innerText = post["post-name-one-vacancy"];
// document.getElementById("post-name-two").innerText = post["post-name-two"];
// document.getElementById("post-name-two-vacancy").innerText = post["post-name-two-vacancy"];

// document.getElementById("post-name-three").innerText = post["post-name-three"];
// document.getElementById("post-name-three-vacancy").innerText = post["post-name-three-vacancy"];
// document.getElementById("post-name-four").innerText = post["post-name-four"];
// document.getElementById("post-name-four-vacancy").innerText = post["post-name-four-vacancy"];

// document.getElementById("post-name-five").innerText = post["post-name-five"];
// document.getElementById("post-name-five-vacancy").innerText = post["post-name-five-vacancy"];
// document.getElementById("post-name-six").innerText = post["post-name-six"];
// document.getElementById("post-name-six-vacancy").innerText = post["post-name-six-vacancy"];
// document.getElementById("post-name-seven").innerText = post["post-name-seven"];
// document.getElementById("post-name-seven-vacancy").innerText = post["post-name-seven-vacancy"];
// document.getElementById("post-name-eight").innerText = post["post-name-eight"];
// document.getElementById("post-name-eight-vacancy").innerText = post["post-name-eight-vacancy"];
// document.getElementById("post-name-nine").innerText = post["post-name-nine"];
// document.getElementById("post-name-nine-vacancy").innerText = post["post-name-nine-vacancy"];
// document.getElementById("post-name-ten").innerText = post["post-name-ten"];
// document.getElementById("post-name-ten-vacancy").innerText = post["post-name-ten-vacancy"];




// document.getElementById("eligibility").innerText = post["eligibility"];
// document.getElementById("salary").innerText = post["salary"];

// document.getElementById("banefits-1").innerText = post["banefits-1"];
// document.getElementById("banefits-2").innerText = post["banefits-2"];
// document.getElementById("banefits-3").innerText = post["banefits-3"];
// document.getElementById("banefits-4").innerText = post["banefits-4"];
// document.getElementById("banefits-5").innerText = post["banefits-5"];

// document.getElementById("subject-1").innerText = post["subject-1"];
// document.getElementById("subject-1-topics").innerText = post["subject-1-topics"];

// document.getElementById("subject-2").innerText = post["subject-2"];
// document.getElementById("subject-2-topics").innerText = post["subject-2-topics"];

// document.getElementById("subject-3").innerText = post["subject-3"];
// document.getElementById("subject-3-topics").innerText = post["subject-3-topics"];

// document.getElementById("subject-4").innerText = post["subject-4"];
// document.getElementById("subject-4-topics").innerText = post["subject-4-topics"];

// document.getElementById("subject-5").innerText = post["subject-5"];
// document.getElementById("subject-5-topics").innerText = post["subject-5-topics"];

// document.getElementById("subject-6").innerText = post["subject-6"];
// document.getElementById("subject-6-topics").innerText = post["subject-6-topics"];

// document.getElementById("subject-7").innerText = post["subject-7"];
// document.getElementById("subject-7-topics").innerText = post["subject-7-topics"];

// document.getElementById("subject-8").innerText = post["subject-8"];
// document.getElementById("subject-8-topics").innerText = post["subject-8-topics"];

// document.getElementById("subject-9").innerText = post["subject-9"];
// document.getElementById("subject-9-topics").innerText = post["subject-9-topics"];

// document.getElementById("subject-10").innerText = post["subject-10"];
// document.getElementById("subject-10-topics").innerText = post["subject-10-topics"];

// document.getElementById("post-vacancy-name-one").innerText = post["post-vacancy-name-one"];
// document.getElementById("total-vacancy-count-one").innerText = post["total-vacancy-count-one"];

// document.getElementById("post-vacancy-name-two").innerText = post["post-vacancy-name-two"];
// document.getElementById("total-vacancy-count-two").innerText = post["total-vacancy-count-two"];

// document.getElementById("post-vacancy-name-three").innerText = post["post-vacancy-name-three"];
// document.getElementById("total-vacancy-count-three").innerText = post["total-vacancy-count-three"];

// document.getElementById("post-vacancy-name-four").innerText = post["post-vacancy-name-four"];
// document.getElementById("total-vacancy-count-four").innerText = post["total-vacancy-count-four"];

// document.getElementById("post-vacancy-name-five").innerText = post["post-vacancy-name-five"];
// document.getElementById("total-vacancy-count-five").innerText = post["total-vacancy-count-five"];

// document.getElementById("post-vacancy-name-six").innerText = post["post-vacancy-name-six"];
// document.getElementById("total-vacancy-count-six").innerText = post["total-vacancy-count-six"];

// document.getElementById("post-vacancy-name-seven").innerText = post["post-vacancy-name-seven"];
// document.getElementById("total-vacancy-count-seven").innerText = post["total-vacancy-count-seven"];

// document.getElementById("post-vacancy-name-eight").innerText = post["post-vacancy-name-eight"];
// document.getElementById("total-vacancy-count-eight").innerText = post["total-vacancy-count-eight"];

// document.getElementById("post-vacancy-name-nine").innerText = post["post-vacancy-name-nine"];
// document.getElementById("total-vacancy-count-nine").innerText = post["total-vacancy-count-nine"];

// document.getElementById("post-vacancy-name-ten").innerText = post["post-vacancy-name-ten"];
// document.getElementById("total-vacancy-count-ten").innerText = post["total-vacancy-count-ten"];

// document.getElementById("exam-pattern-one").innerText = post["exam-pattern-one"];
// document.getElementById("exam-pattern-two").innerText = post["exam-pattern-two"];
// document.getElementById("exam-pattern-three").innerText = post["exam-pattern-three"];
// document.getElementById("exam-pattern-four").innerText = post["exam-pattern-four"];

// document.getElementById("selection-method").innerText = post["selection-method"];

// document.getElementById("apply-link").href = post["apply-link"];
// document.getElementById("official-website").href = post["official-website"];
// document.getElementById("video-box").src = post["video-box"];


//     })

//     .catch(err => console.error("ERROR:", err));

// });




// document.addEventListener("DOMContentLoaded", function () {

//   const url = new URL(window.location.href);

//   let id = url.searchParams.get("job");
//   let type = url.searchParams.get("type") || "data";
  
  

//   const jsonMap = {
//     data: "data.json",
//     dataone: "data-one.json",
   
//   };

//   if (!id || !jsonMap[type]) {
//     document.body.innerHTML = "Invalid URL";
//     return;
//   }

//   id = id.toLowerCase().trim();

//   // ✅ sirf ek JSON load
//   fetch(`${jsonMap[type]}`)
//     .then(res => res.json())
//     .then(data => {

//       const post = data.find(item =>
//         item.id && item.id.toLowerCase() === id
//       );

//       if (!post) {
//         document.body.innerHTML = "Post Not Found";
//         return;
//       }

//       // 🔥 AUTO SYSTEM (sab mapping khatam)
//       Object.keys(post).forEach(key => {
//         const el = document.getElementById(key);

//         if (el) {
//           if (el.tagName === "A") {
//             el.href = post[key];
//           } else if (el.tagName === "IFRAME") {
//             el.src = post[key];
//           } else {
//             el.innerText = post[key];
//           }
//         }
//       });

//       document.title = post["job-heading"];

//     })
//     .catch(err => console.error(err));

// });









// document.addEventListener("DOMContentLoaded", function () {

//   const url = new URL(window.location.href);

//   let id = url.searchParams.get("job");
//   let type = url.searchParams.get("type");

//   const jsonMap = {
//     data: "data.json",
//     dataone: "data-one.json"
//   };

//   if (!id) {
//     document.body.innerHTML = "Invalid URL";
//     return;
//   }

//   id = id.toLowerCase().trim();

//   let file = jsonMap[type] || "data.json";

//   fetch(file)
//     .then(res => res.json())
//     .then(data => {

//       const post = data.find(item =>
//         item.id && item.id.toLowerCase() === id
//       );

//       if (!post) {
//         document.body.innerHTML = "Post Not Found";
//         return;
//       }

//       Object.keys(post).forEach(key => {
//         const el = document.getElementById(key);

//         if (el) {
//           if (el.tagName === "A") {
//             el.href = post[key];
//           } else if (el.tagName === "IFRAME") {
//             el.src = post[key];
//           } else {
//             el.innerText = post[key];
//           }
//         }
//       });

//       document.title = post["job-heading"];

//     })
//     .catch(err => console.error(err));

// });
























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
