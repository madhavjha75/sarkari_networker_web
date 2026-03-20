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
document.getElementById("req-ski-one").innerText = post["req-ski-one"];
document.getElementById("req-ski-sec").innerText = post["req-ski-sec"];
document.getElementById("req-ski-thr").innerText = post["req-ski-thr"];
document.getElementById("req-ski-foth").innerText = post["req-ski-foth"];
document.getElementById("req-ski-fith").innerText = post["req-ski-fith"];
document.getElementById("req-ski-six").innerText = post["req-ski-six"];
document.getElementById("education-qua").innerText = post["education-qua"];
document.getElementById("intership-duration").innerText = post["intership-duration"];
document.getElementById("intership-stipend").innerText = post["intership-stipend"];
document.getElementById("intership-loc").innerText = post["intership-loc"];
document.getElementById("intership-beni-one)").innerText = post["intership-beni-one"];
document.getElementById("intership-beni-sec").innerText = post["intership-beni-sec"];
document.getElementById("intership-beni-thr").innerText = post["intership-beni-thr"];
document.getElementById("intership-beni-foth").innerText = post["intership-beni-foth"];
document.getElementById("intership-beni-fith").innerText = post["intership-beni-fith"];
document.getElementById("lea-oppor").innerText = post["lea-oppor"];
document.getElementById("training-p").innerText = post["training-p"];
document.getElementById("respo-one").innerText = post["respo-one"];
document.getElementById("respo-sec").innerText = post["respo-sec"];
document.getElementById("respo-thr").innerText = post["respo-thr"];
document.getElementById("respo-for").innerText = post["respo-for"];
document.getElementById("sale-one").innerText = post["sale-one"];
document.getElementById("sale-sec").innerText = post["sale-sec"];
document.getElementById("sale-thr").innerText = post["sale-thr"];
document.getElementById("application-fee").innerText = post["application-fee"];
document.getElementById("intership-cer").innerText = post["intership-cer"];
document.getElementById("career-opp").innerText = post["career-opp"];
document.getElementById("inte-she-oe").innerText = post["inte-she-oe"];
document.getElementById("intership-duration").innerText = post["intership-duration"];
document.getElementById("intership-stipend").innerText = post["intership-stipend"];
document.getElementById("intership-loc").innerText = post["intership-loc"];
document.getElementById("apply-btn").href = post["apply-link"];
document.getElementById("apply").href = post["apply-link"];
document.getElementById("offi-web").href = post["official-website"];
document.getElementById("start").innerText = post["start"];
document.getElementById("lst-dat").innerText = post["last-date"];
   
  }else{
    document.body.innerHTML = "<h2>Data Not Found</h2>";
  }

})
.catch(err => {
  console.log("Error loading JSON:", err);
});





















