async function getTodos() {
  const data = await fetch(baseurl + "/gettodos");

  const json = await data.json();
  console.log(json);

  document.getElementById("app").innerHTML = "";
  const div = document.createElement("div");

  for (var i = 0; i <= json.length - 1; i++) {
    const div = document.createElement("div");
    div.classList.add("tododiv");
    const nazwa = document.createElement("h1");
    nazwa.innerHTML = json[i].name;
    div.appendChild(nazwa);

    const czas = document.createElement("h1");
    czas.innerHTML = json[i].daystoend;
    div.appendChild(czas);

    if (json[i].done == true) {
      div.classList.add("done");
    } else {
      div.classList.add("notdone");
    }

    document.getElementById("app").appendChild(div);
  }
}

async function sendData() {
  const nazwa = document.getElementById("nazwa").value;
  const dni = document.getElementById("dni").value;

  const url = `${baseurl}/addtodos/${nazwa}/${dni}`;

  await fetch(url);
  console.log(nazwa);
  console.log(dni);
  getTodos();
}

getTodos();
