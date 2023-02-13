const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");

let color = "";

document.addEventListener("keydown", function (event) {
  const teclaPresionada = event.key;

  div1.addEventListener("click", function () {
    if (event.key === "a" ) {
      color = "red";
      div1.style.backgroundColor = color;
    }
    if (teclaPresionada === "s") {
      color = "blue";
      div1.style.backgroundColor = color;
    }
    if (teclaPresionada === "d") {
      color = "green";
      div1.style.backgroundColor = color;
    }
  });

  div2.addEventListener("click", function () {
    if (teclaPresionada === "a") {
      color = "red";
      div2.style.backgroundColor = color;
    }
    if (teclaPresionada === "s") {
      color = "blue";
      div2.style.backgroundColor = color;
    }
    if (teclaPresionada === "d") {
      color = "green";
      div2.style.backgroundColor = color;
    }
  });

  div3.addEventListener("click", function () {
    if (teclaPresionada === "a") {
      color = "red";
      div3.style.backgroundColor = color;
    }
    if (teclaPresionada === "s") {
      color = "blue";
      div3.style.backgroundColor = color;
    }
    if (teclaPresionada === "d") {
      color = "green";
      div3.style.backgroundColor = color;
    }
  });

  div4.addEventListener("click", function () {
    if (teclaPresionada === "a") {
      color = "red";
      div4.style.backgroundColor = color;
    }
    if (teclaPresionada === "s") {
      color = "blue";
      div4.style.backgroundColor = color;
    }
    if (teclaPresionada === "d") {
      color = "green";
      div4.style.backgroundColor = color;
    }
  });
});
