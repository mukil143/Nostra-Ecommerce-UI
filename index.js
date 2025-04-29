function resetScrollOnReload() {
  // Disable browser's automatic scroll restoration
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  // Scroll to top when the page loads
  window.addEventListener('load', function () {
    window.scrollTo(0, 0);
  });
}

// Call the function when your script loads
resetScrollOnReload();





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

// fav item like function

let emptyheart = document.querySelectorAll(
  ".mostwanted-product-item-emptyheart"
);//selecting the all emptyheart

console.log(emptyheart);

for (let count = 0; count < emptyheart.length; count++) {
  emptyheart[count].addEventListener("click", function (e) {
    if (e.target.src.indexOf("blackheart") > 0) {
      e.target.src = "./icons/redheart.png";
    } else {
     e.target.src = "./icons/blackheart.png";
    }
  });
}



// scroll animation

window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".intiate-scroll-animate");

  elements.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elTop = el.getBoundingClientRect().top;

    if (elTop < windowHeight - 100 && !el.classList.contains("reveal-scroll-animate")) {
      el.classList.add("reveal-scroll-animate");
    }
  });
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};