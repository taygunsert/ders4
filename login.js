const butonLogin = document.querySelector("#butonLogin");
butonLogin.addEventListener("click", function () {
  document.querySelector("#id01").style.display = "block";
});

const butonKapat = document.querySelector("#butonKapat");
butonKapat.addEventListener("click", function () {
  document.querySelector("#id01").style.display = "none";
});

let modal = document.querySelector("#id01");

// Tıklanan eleman modal etiketiyse
window.addEventListener("click", function (olay) {
  if (olay.target == modal) {
    modal.style.display = "none";
  }
});
