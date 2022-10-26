const clube = [];
const h2 = document.getElementById("h2");
const h2j = document.getElementById("h2j");

function adicionarTime() {
  h2j.style.display = "none";
  h2.style.display = "block";
  h2.innerText = "Times:";
  const inClube = document.querySelector("#inClube");
  const outClubes = document.querySelector("#outClubes");

  const clubeAdicionado = inClube.value;

  if (clubeAdicionado == "" || clubeAdicionado == Number(clubeAdicionado)) {
    alert("Favor inserir o nome corretamente do clube");
    inClube.focus();
    return;
  }
  clube.push({ time: clubeAdicionado });

  let times = "";

  for (let i = 0; i < clube.length; i++) {
    times += i + 1 + ". " + clube[i].time + "\n";
  }
  outClubes.textContent = times;

  inClube.value = "";
  inClube.focus();
}
const btAdicionar = document.querySelector("#btAdicionar");
btAdicionar.addEventListener("click", adicionarTime);

function listarTimes() {
  h2j.style.display = "none";
  if (clube.length == 0) {
    alert("Não há clubes na lista");
    return;
  }
  let times = "";

  for (let i = 0; i < clube.length; i++) {
    times += i + 1 + "- " + clube[i].time + "\n";
  }

  document.getElementById("outClubes").textContent = times;
  h2.style.display = "block";
  h2.innerText = "Times já adicionados:";
}
const btListar = document.querySelector("#btListar");
btListar.addEventListener("click", listarTimes);

function montarTabela() {
  h2.style.display = "none";
  const inClube = document.querySelector("#inClube");
  const tam = clube.length;

  if (tam == 0 || tam % 2 == 1) {
    alert("Deve haver número par de clubes");
    inClube.focus();
    return;
  }

  let jogos = "";
  const ultimo = tam - 1;

  for (i = 0; i < tam / 2; i++) {
    jogos +=
      i + 1 + " - " + clube[i].time + " x " + clube[ultimo - i].time + "\n";
  }
  const outClubes = document.querySelector("#outClubes");
  outClubes.textContent = jogos;
  h2j.style.display = "block";
}
const btTabela = document.querySelector("#btTabela");
btTabela.addEventListener("click", montarTabela);
