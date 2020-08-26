const card = document.querySelector(".card")
const img = document.querySelector("img")

img.onclick = () => {
  const corazon = document.querySelector(".fa.fa-heart")
  corazon.classList.add("rojo")
}

card.onclick = (e) => {
  console.log(e)
}

window.onkeydown = (e) => {
  if (e.keyCode === 13) {
    alert("apretaste enter")
  }
}
