function textoAleatorio() {

  setInterval(() => {
    let numeroGerado = Math.floor(Math.random() * frases.length);
    textos.innerText = frases[numeroGerado];
    console.log('random')
  }, 7000);
}

window.onload = () => {
  textoAleatorio()

  var textos = document.getElementById("textos")
}