let offerclosebtn = document.getElementById("head-offertitle-close"); //selecting the clos button




let offermsg=document.querySelector(".head-offers-msg"); //selecting the offer message

let navbar=document.querySelector("nav");

offerclosebtn.addEventListener("click", function () {
  let offerbox=document.getElementById("head-offers");
  let offermsg=document.querySelector(".head-offers-msg"); //selecting the offer box
  offerbox.classList.add("hidden");
  offermsg.classList.add("hidden"); //adding the hidden class to the offer box to hide it
  setTimeout(() => {
    offerbox.style.display = 'none'; 
    offermsg.style.display = 'none';// fully removes it from flow after transition
  }, 1000); // match this to your CSS transition duration
});



let toggltbtn = document.getElementById("navbar-toggle"); //selecting the toggle button

let sidenavbar = document.getElementById("sidenavbar"); //selecting the siedenavbar

toggltbtn.addEventListener("click", function () {
  sidenavbar.style.transform = "translateX(0%)"; //transforming the sidenavbar to 0% to show it
});

let closbtn = document.getElementById("sidenavbar-closebtn"); //selecting the cloe buttom

closbtn.addEventListener("click", function () {
  sidenavbar.style.transform = "translateX(-100%)"; //transforming the sidenavbar to -100% to hide it
});



















const checkboxes = document.querySelectorAll(".category-container input[type=checkbox]");
console.log(checkboxes)
    const products = document.querySelectorAll(".product-item");

    checkboxes.forEach(cb => cb.addEventListener("change", filterProducts));

    function filterProducts() {
      const selectedOccasions = getSelectedValues("occasion");
      const selectedColors = getSelectedValues("color");
      const selectedArrivals = getSelectedValues("arrival");

      products.forEach(product => {
        const occasion = product.dataset.occasion;
        const color = product.dataset.color;
        const arrival = product.dataset.arrival;

        const matchOccasion = selectedOccasions.length === 0 || selectedOccasions.includes(occasion);
        const matchColor = selectedColors.length === 0 || selectedColors.includes(color);
        const matchArrival = selectedArrivals.length === 0 || selectedArrivals.includes(arrival);

        if (matchOccasion && matchColor && matchArrival) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
    }

    function getSelectedValues(className) {
      return Array.from(document.querySelectorAll(`input.${className}:checked`)).map(cb => cb.value);
    }




    // selecting the elements

    let inputtext=document.getElementById("search")//selecting the input box

    let productlist=document.querySelectorAll(".product-item")

    console.log(productlist[0].innerText)


    // let searchicon=document.getElementById("search-icon")
    // console.log(searchicon)

    
   

    inputtext.addEventListener("keyup",function(){
      let searchtext=inputtext.value.toLowerCase();
      

      productlist.forEach(function(title){
        if(title.innerText.toLowerCase().indexOf(searchtext)<0){
          title.style.display="none"
        }
        else{
          title.style.display="flex"
        }

      })
    })


  // const searchInput = document.getElementById("search");
const searchIcon = document.getElementById("search-icon");

inputtext.addEventListener("input", function () {
  if (this.value.trim() !== "") {
    searchIcon.classList.remove("fa-magnifying-glass");
    searchIcon.classList.add("fa-xmark");
    searchIcon.style.cursor = "pointer";
  } else {
    searchIcon.classList.remove("fa-xmark");
    searchIcon.classList.add("fa-magnifying-glass");
    searchIcon.style.cursor = "default";
  }
});

// Optional: Clear input when clicking the X icon
searchIcon.addEventListener("click", function () {
  if (searchIcon.classList.contains("fa-xmark")) {
    inputtext.value = "";
    searchIcon.classList.remove("fa-xmark");
    searchIcon.classList.add("fa-magnifying-glass");
    inputtext.focus();
    // You can also trigger any search clearing logic here
  }
})