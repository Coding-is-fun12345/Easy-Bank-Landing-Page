function openNav() {
  document.getElementById("nav").style.height = "100%";
  document.getElementById("close-btn").style.color = "hsl(0, 0%, 98%)";
  document.getElementById("close-btn").style.pointerEvents = "all";
}

function closeNav() {
  document.getElementById("nav").style.height = "0%";
  document.getElementById("close-btn").style.color = "transparent";
  document.getElementById("close-btn").style.pointerEvents = "none";
}
