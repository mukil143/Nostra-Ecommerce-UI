let offerclosebtn = document.getElementById("head-offertitle-close"); //selecting the clos button

offerclosebtn.addEventListener("click", function () {
  offerclosebtn.parentNode.parentNode.remove();
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

let leftsidebtn = document.getElementById("slider-leftarrow-activate"); //selecting the lefte arrow btn

let rightsidebtn = document.getElementById("slider-rightarrow"); //selecting thr right arrow

let slideimg = document.querySelector(".slider-images-container"); //selecting the slider images container

let slidemargin = 0; //initializing the margin to 0

console.log(leftsidebtn);

rightsidebtn.addEventListener("click", function () {
  slidemargin = slidemargin + 100; //increasing the margin by 100px

  if (slidemargin > 200) {
    slidemargin = 0; //when the margin is greated than 200vw reset it to 0 as the 1st image is shown
    slideimg.style.marginLeft = `${slidemargin}vw`; //changing the margin left of the slider image container to show thw 1st image
  } else {
    slideimg.style.marginLeft = `-${slidemargin}vw`; //changing the margin left of the slider images container to -slidemargin px
  }
});

leftsidebtn.addEventListener("click", function () {
  if (slidemargin == 0) {
    slidemargin = 200; //when the margin is 0 set it to 200w as the 3rd image is shown
    slideimg.style.marginLeft = `-${slidemargin}vw`; //changing the margin left of the slider image container to show thw 3rd image
  } else {
    slidemargin = slidemargin - 100; //decreasing the margin by 100vw for image container

    slideimg.style.marginLeft = `-${slidemargin}vw`; //changing the margin left of the slider images container to -slidemargin px
  }
});
