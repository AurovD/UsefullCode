// let images = document.getElementsByClassName("images")[0];
// let images = document.querySelectorAll(".images")[0];
let images = document.querySelector(".images");
let lb = document.querySelector(".lightbox");


for (let i = 0, cnt = images.children.length; i < cnt; i++) {
    let item = images.children[i];
    item.addEventListener("click", function () {
        document.body.classList.add("active");
        let img = document.createElement("img");
        // console.log(item.getAttribute("data-src"));
        img.src = item.getAttribute("data-src");
        lb.innerHTML = img.outerHTML + `<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                        <a class="next" onclick="plusSlides(1)">&#10095;</a>`;
    });
}
document.body.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        if (document.body.classList.contains("active")) {
            document.body.classList.remove("active");
        } else {
            console.log("Обрабодчик отключен")
        }
    }
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}


function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }