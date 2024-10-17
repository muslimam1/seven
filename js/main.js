const box = document.querySelector(".content");
const form = document.querySelector(".block");
const title_input = document.querySelector(".name__input");
const description_input = document.querySelector(".desc__input");

const render = (data) => {
  box.innerHTML = data.map((item) => {
    return `<h1>${item.name}</h1>
      <h2>${item.desc}</h2>
    `;
  });
};

const getData = () => {
  fetch("http://jsonplaceholder.typicode.com/users")
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
  obj.title = name__input.value;
  obj.description = desc__input.value;
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
