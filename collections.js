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