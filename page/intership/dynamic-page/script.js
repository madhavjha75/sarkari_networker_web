fetch("data.json")
.then(res => res.json())
.then(data => {

  const params = new URLSearchParams(window.location.search);
  const id = params.get("intership");

  const post = data.find(item => item.id === id);

if(post){
document.getElementById("intership-heading").innerText = post["intership-heading"];
document.getElementById("introduction-para").innerText = post["introduction-para"];
document.getElementById("company-name").innerText = post["company-name"];
document.getElementById("post").innerText = post["post"];
document.getElementById("location").innerText = post["location"];
document.getElementById("duration").innerText = post["duration"];
document.getElementById("stipend").innerText = post["stipend"];
document.getElementById("about-intrship").innerText = post["about-intrship"];
document.getElementById("inteship-highlight-one").innerText = post["inteship-highlight-one"];
document.getElementById("inteship-highlight-sec").innerText = post["inteship-highlight-sec"];
document.getElementById("inteship-highlight-thr").innerText = post["inteship-highlight-thr"];
document.getElementById("inteship-highlight-foth").innerText = post["inteship-highlight-foth"];
document.getElementById("inteship-highlight-fith").innerText = post["inteship-highlight-fith"];
document.getElementById("elegibility-creteria-one").innerText = post["elegibility-creteria-one"];
document.getElementById("elegibility-creteria-sec").innerText = post["elegibility-creteria-sec"];
document.getElementById("elegibility-creteria-thr").innerText = post["elegibility-creteria-thr"];
document.getElementById("elegibility-creteria-foth").innerText = post["elegibility-creteria-foth"];
document.getElementById("elegibility-creteria-fith").innerText = post["elegibility-creteria-fith"];
document.getElementById("required-skill-one").innerText = post["required-skill-one"];
document.getElementById("required-skill-sec").innerText = post["required-skill-sec"];
document.getElementById("required-skill-thr").innerText = post["required-skill-thr"];
document.getElementById("required-skill-foth").innerText = post["required-skill-foth"];
document.getElementById("required-skill-fith").innerText = post["required-skill-fith"];
document.getElementById("required-skill-six").innerText = post["required-skill-six"];
document.getElementById("education-qualification").innerText = post["education-qualification"];
document.getElementById("intership-duration").innerText = post["intership-duration"];
document.getElementById("intership-stipend").innerText = post["intership-stipend"];
document.getElementById("intership-location").innerText = post["intership-location"];
document.getElementById("intership-benefit-one").innerText = post["intership-benefit-one"];
 document.getElementById("intership-benefit-sec").innerText = post["intership-benefit-sec"];
document.getElementById("intership-benefit-thr").innerText = post["intership-benefit-thr"];
document.getElementById("intership-benefit-foth").innerText = post["intership-benefit-foth"];
document.getElementById("intership-benefit-fith").innerText = post["intership-benefit-fith"];




document.getElementById("learning-opportunities").innerText = post["learning-opportunities"];
document.getElementById("training-program").innerText = post["training-program"];
document.getElementById("responsibility-one").innerText = post["responsibility-one"];
document.getElementById("responsibility-sec").innerText = post["responsibility-sec"];
document.getElementById("responsibility-thr").innerText = post["responsibility-thr"];
document.getElementById("responsibility-foth").innerText = post["responsibility-foth"];

document.getElementById("selection-one").innerText = post["selection-one"];
  document.getElementById("selection-sec").innerText = post["selection-sec"];
  document.getElementById("selection-thr").innerText = post["selection-thr"];

  document.getElementById("application-fee").innerText = post["application-fee"];
  document.getElementById("intership-certificate").innerText = post["intership-certificate"];
  document.getElementById("career-opportunities").innerText = post["career-opportunities"];

  document.getElementById("intership-schedule-one").innerText = post["intership-schedule-one"];
  document.getElementById("intership-schedule-sec").innerText = post["intership-schedule-sec"];

  document.getElementById("start").innerText = post["start"];
  document.getElementById("last-date").innerText = post["last-date"];
  document.getElementById("apply-btn").href = post["apply-btn"];


   document.getElementById("apply-link").href = post["apply-link"];
    document.getElementById("official-website").href = post["official-website"];






   
  }else{
    document.body.innerHTML = "<h2>please use valid URL</h2>";
  }

})
.catch(err => {
  console.log("Error loading JSON:", err);
});





















