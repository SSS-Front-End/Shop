const product = document.querySelectorAll('.cart');
const result = document.querySelector('.total b');

for (let i = 0; i < product.length; i++) {
    const element = product[i];
    element.addEventListener("click", function () { 
        this.classList.toggle("cart-active");
        result.innerHTML = sum(); 
     })
}

function sum() {
    let sum = 0 ;
    for (let i = 0; i < product.length; i++) {
        const element = product[i];
        if (element.classList.contains("cart-active")) {
            sum += +element.getAttribute("data-price");
        }
    }
    return sum + "$";
}