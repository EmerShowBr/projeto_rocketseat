function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem 
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/foto de perfil.png")
    alt.setAttribute("Foto Emersom e Bruna vestindo branco no Congresso.")

  } else {
    img.setAttribute("src", "./assets/foto 2.png")

  }




}