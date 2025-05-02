
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const headerOffset = 100; // Adjust this height based on your header/nav
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});










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

// window.addEventListener("scroll", function () {
//   const elements = document.querySelectorAll(".intiate-scroll-animate");

//   elements.forEach((el) => {
//     const windowHeight = window.innerHeight;
//     const elTop = el.getBoundingClientRect().top;

//     if (elTop < windowHeight - 50 && !el.classList.contains("reveal-scroll-animate")) {
//       el.classList.add("reveal-scroll-animate");
//     }
//   });
// });

// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// };


function revealOnScroll() {
  const elements = document.querySelectorAll(".intiate-scroll-animate");

  elements.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elTop = el.getBoundingClientRect().top;

    if (elTop < windowHeight - 50 && !el.classList.contains("reveal-scroll-animate")) {
      el.classList.add("reveal-scroll-animate");
    }
  });
}

// Run on scroll
window.addEventListener("scroll", revealOnScroll);

// Also run on page load
window.addEventListener("load", revealOnScroll);

// Reset scroll on refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};


