const products = [

];

function formatPrice(price) {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}




function createProductCard(product) {
    return `
    <div class="product-card">
          <img src="${product.image}" alt="${product.title}" class="product-image">
          <h3 class="product-title">${product.title}</h3>
         <div class="product-price">${product.price}</div>
          <div class="product-discount">${product.discont}% OFF</div>       
    </div>
    `

}

function renderProduct(products) {
    const grid = document.getElementsById('productsGrid')

    grid.innerHTML = products.map(createProductCard).join('')

}





document.addEventListener('DOMContentLoaded', () => {




})