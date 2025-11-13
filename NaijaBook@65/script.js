// mobile menu toggle

document.querySelector('.mobile-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// smooth scrolling for anchor links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelectorAll(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// add to cart functionality

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const cartCount = document.querySelector('.cart-count');
        const currenCount = parseInt(cartCount.textContent);
        cartCount.textContent = currenCount + 1;

        //animation effect

        this.innerHTML = '<i class="fas fa-check"></i>';
        serTimeout(() => {
            this.innerHTML = '<i class="fas fa-cart-plus"></i>';
        }, 1000);
    });
});