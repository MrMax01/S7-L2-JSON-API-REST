window.onload = () => {
  showUserList();
};

let userList = [];
const inputName = document.getElementById("user-name");
const saveBtn = document.getElementById("save-name");
const deleteBtn = document.getElementById("delete-name");
const userBlock = document.getElementById("user-list");

const showUserList = () => {
  userBlock.innerHTML = "";
  userList = JSON.parse(localStorage.getItem("list"));
  userList.forEach((elem) => {
    const p = document.createElement("p");
    p.innerText = elem;
    console.log(p);
    userBlock.appendChild(p);
  });
};

saveBtn.addEventListener("click", (event) => {
  event.preventDefault();
  userList.push(inputName.value);
  localStorage.setItem("list", JSON.stringify(userList));
  showUserList();
});
deleteBtn.addEventListener("click", (event) => {
  event.preventDefault();
  userList.pop();
  localStorage.setItem("list", JSON.stringify(userList));
  showUserList();
});
