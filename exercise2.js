// window.onload = () => {
// };
let count = 0;
count = sessionStorage.getItem("contatore");
const h1 = document.getElementById("count");

setInterval(() => {
  h1.innerHTML = count;
  count++;
  sessionStorage.setItem("contatore", count);
}, 1000);
