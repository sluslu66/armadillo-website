function funFact() {
  alert("Armadillos can hold their breath for up to 6 minutes!");
}

// load facts
if (document.getElementById("facts")) {
  fetch("data/facts.json")
    .then(res => res.json())
    .then(data => {
      let html = "";
      data.forEach(f => {
        html += `<p>${f}</p>`;
      });
      document.getElementById("facts").innerHTML = html;
    });
}

// footer
fetch("components/footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });
