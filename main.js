document.getElementById("output").style.visibility = "hidden";
document.getElementById("lbsInput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  let lbs = e.target.value;
  let a = lbs / 0.0022046;
  let b = lbs / 2.2046;
  let c = lbs * 16;

  document.getElementById("gramsOutput").innerHTML = a.toFixed(2);
  document.getElementById("kgOutput").innerHTML = b.toFixed(2);
  document.getElementById("ozOutput").innerHTML = c.toFixed(2);
  document.getElementById("lbsOutput").innerHTML = lbs;
  document.getElementById("kgInput").value = "";
  document.getElementById("ozInput").value = "";
});

document.getElementById("kgInput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  let kg = e.target.value;
  let a = kg * 1000;
  let b = kg * 35.274;
  let c = kg * 2.205;
  document.getElementById("gramsOutput").innerHTML = a.toFixed(2);
  document.getElementById("kgOutput").innerHTML = kg;
  document.getElementById("ozOutput").innerHTML = b.toFixed(2);
  document.getElementById("lbsOutput").innerHTML = c.toFixed(2);
  document.getElementById("lbsInput").value = "";
  document.getElementById("ozInput").value = "";
});

document.getElementById("ozInput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  let oz = e.target.value;
  let a = oz * 28.35;
  let b = oz * 0.0283;
  let c = oz * 0.0625;
  document.getElementById("gramsOutput").innerHTML = a.toFixed(2);
  document.getElementById("kgOutput").innerHTML = b.toFixed(2);
  document.getElementById("ozOutput").innerHTML = oz;
  document.getElementById("lbsOutput").innerHTML = c.toFixed(2);
  document.getElementById("lbsInput").value = "";
  document.getElementById("kgInput").value = "";
});
