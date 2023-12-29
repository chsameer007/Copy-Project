const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', ()=> {
        nav.classList.add('active');
    }) 
}

if (close) {
    close.addEventListener('click', ()=> {
        nav.classList.remove('active');
    }) 
}


    // Sample data for products
    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: 1000,
            image: 'img/product1.jpg'
        },
        // Add more product data as needed
    ];

    // Function to add a product to the cart
    function addToCart(productId) {
        const product = products.find(item => item.id === productId);

        if (product) {
            // Assuming you have a cart array to store added items
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));

            // Update the cart icon or quantity display
            updateCartIcon(cart.length);
        }
    }

    // Function to update the cart icon or quantity display
    function updateCartIcon(quantity) {
        const cartIcon = document.getElementById('cart-icon');
        if (cartIcon) {
            cartIcon.setAttribute('data-quantity', quantity);
        }
    }

    // Attach the addToCart function to your product buttons
    document.addEventListener('DOMContentLoaded', function () {
        const addToCartButtons = document.querySelectorAll('.add-cart');

        addToCartButtons.forEach(button => {
            button.addEventListener('click', function () {
                const productId = parseInt(this.getAttribute('data-product-id'), 10);
                addToCart(productId);
            });
        });
    });
