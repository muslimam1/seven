const box = document.querySelector(".box");
const form = document.querySelector(".form");
const title_input = document.querySelector(".title_input");
const description_input = document.querySelector(".description_input");

const render = (data) => {
  box.innerHTML = data.map((item) => {
    return `<h1>${item.title}</h1>
      <h2>${item.description}</h2>
    `;
  });
};

const getData = () => {
  fetch("http://localhost:3600/todos")
    .then((res) => {
      return res.json("");
    })
    .then((data) => {
      render(data);
    });
};

getData();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const obj = {};
  obj.title = title_input.value;
  obj.description = description_input.value;
  console.log(obj);

  fetch("http://localhost:3600/todos", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .finally(() => {
      getData();
    });
});
