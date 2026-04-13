document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('products-grid');

    // سحب البيانات من ملف JSON
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const card = `
                    <div class="product-card">
                        <img src="${product.image}" alt="${product.name}" class="product-image">
                        <div class="product-info">
                            <div class="product-name">${product.name}</div>
                            <div class="product-price">${product.price}</div>
                        </div>
                    </div>
                `;
                grid.innerHTML += card;
            });
        })
        .catch(err => console.error('Error loading products:', err));
});
