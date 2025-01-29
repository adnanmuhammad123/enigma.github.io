const productList = document.getElementById('product-list');
window.addEventListener('load', () => {
  fetch('js/index.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const itemElements = data.products.map(item => {
        const itemElement = document.createElement('li');
        itemElement.innerHTML = `<img class="photo" src="${item.image}" alt="">
                  <div class="content">
                      <span>
                          <p>${item.category}</p>
                          <a href="#"><small>Explore Now!</small></a>
                      </span>
                      <a href="#"><img class="arrow"  src="images/arrow-right.svg" alt=""></a>
                  </div>`
        return itemElement;
      });
      productList.append(...itemElements);
    })
    .catch(error => {
      console.log("Error:", error);
    });
});
let  sponsor = document.getElementById("sponsor")
let sponsorList = document.getElementById("Brands")
let overlay = document.getElementById("overlay")


sponsor.addEventListener("click",() => {
  if (sponsorList.style.display == "none"){
    sponsorList.style.display = "block";
    overlay.style.display = "block";
    }
  else {
    sponsorList.style.display = "none";
  }
})

overlay.addEventListener("click",() => {
  sponsorList.style.display = "none";
  overlay.style.display = "none";
})

