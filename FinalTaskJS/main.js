document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("inputField");
  const addBtn = document.getElementById("addBtn");
  const sortNameBtn = document.getElementById("sortNameBtn");
  const sortValueBtn = document.getElementById("sortValueBtn");
  const deleteBtn = document.getElementById("deleteBtn");
  const listBox = document.getElementById("listBox");

  // Додавання пари при натисканні кнопки або Enter
  addBtn.addEventListener("click", addPair);
  // inputField.addEventListener("keypress", (event) => {
  //   if (event.key === "Enter") {
  //     addPair();
  //   }
  // });

  // Сортування
  sortNameBtn.addEventListener("click", () => sortList("name"));
  sortValueBtn.addEventListener("click", () => sortList("value"));

  // Видалення
  deleteBtn.addEventListener("click", deleteSelected);

  // Функція додавання пари
  function addPair() {
    let input = inputField.value.trim();
    let regExp = /^([a-zA-Z0-9]+)\s*=\s*([a-zA-Z0-9]+)$/;
    if (!input.match(regExp)) {
      alert("Incorrect format! Use only latin letters or numbers and split with '=' ");
      return;
    }
    let split = input.split('=');
    let name = split[0];
    let value = split[1];

    let option = document.createElement("option");
    option.text = `${name} = ${value}`;
    option.dataset.name = name.toLowerCase();
    option.dataset.value = value.toLowerCase();

    listBox.appendChild(option);
    inputField.value = "";
  }

  // Функція сортування
  function sortList(type) {
    let options = Array.from(listBox.options);

    options.sort((a, b) => {
      return a.dataset[type].localeCompare(b.dataset[type]);
    });

    listBox.innerHTML = "";
    options.forEach(option => listBox.appendChild(option));
  }

  // Функція видалення вибраних елементів
  function deleteSelected() {
    [...listBox.selectedOptions].forEach(option => option.remove());
  }
});
