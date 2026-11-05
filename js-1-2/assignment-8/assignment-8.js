const start = parseInt(prompt("Start year:"));
const end = parseInt(prompt("End year:"));
const list = document.getElementById("target");

for (let y = start; y <= end; y++) {
  if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
    list.innerHTML += "<li>" + y + "</li>";
  }
}