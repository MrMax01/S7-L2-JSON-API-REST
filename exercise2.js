window.onload = () => {
  count = sessionStorage.getItem("contatore");
};
let count = 0;
const h1 = document.getElementById("count");

setInterval(() => {
  h1.innerHTML = count;
  count++;
  sessionStorage.setItem("contatore", count);
}, 1000);
