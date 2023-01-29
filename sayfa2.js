const alisverisListesi = [{ ad: "Elma", resim: "🍎", adet: 1 }, { ad: "Armut", resim: "🍐", adet: 3 }, {}, {}];
const kokEtiket = document.querySelector("#root");

alisverisListesi.forEach(listeyiGoster);

function listeyiGoster(urun) {
  if (urun.ad) {
    let html = `<span> ${urun.resim} </span> <span> ${urun.ad} </span> <span> ${urun.adet} </span>`;
    let div = document.createElement("div");
    div.innerHTML = html;
    kokEtiket.append(div);
  }
}

// Ekle butonunu ekliyoruz
let butonEkle = document.createElement("button");
butonEkle.textContent = "+ Ekle";
kokEtiket.prepend(butonEkle);

// Ürün Adı inputunu oluşturuyoruz
let inputUrunAd = document.createElement("input");
inputUrunAd.type = "text";
inputUrunAd.placeholder = "Ürün Adı";
butonEkle.after(inputUrunAd);

// Ürün Resim inputunu oluşturuyoruz
let inputUrunResim = document.createElement("input");
inputUrunResim.type = "text";
inputUrunResim.placeholder = "Ürün Resmi";
inputUrunAd.after(inputUrunResim);

// Ürün No inputunu oluşturuyoruz
let inputUrunNo = document.createElement("input");
inputUrunNo.type = "text";
inputUrunNo.placeholder = "Ürün Adet";
inputUrunResim.after(inputUrunNo);

// Butonun click eventine inputlardan gelen datanın okunması ...
butonEkle.addEventListener("click", function () {
  let yeniUrun = {
    ad: inputUrunAd.value,
    resim: inputUrunResim.value,
    adet: parseInt(inputUrunNo.value),
  };

  // ... ve diziye eklenmesi
  alisverisListesi.push(yeniUrun);

  // Yeni dizi elemanlarını eklemek için eski oluşturulan divleri siliyoruz
  let eskiUrunEtiketleri = kokEtiket.querySelectorAll("div");
  eskiUrunEtiketleri.forEach(function (etiket) {
    etiket.remove();
  });

  // Listenin güncel halini gösteriyoruz
  alisverisListesi.forEach(listeyiGoster);

  // Inputlardaki metinleri 3sn sonra siliyoruz
  setTimeout(function () {
    inputUrunAd.value = "";
    inputUrunResim.value = "";
    inputUrunNo.value = "";
  }, 3000);
});
