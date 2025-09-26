/* =====================================================================
    TEMPLATE DATA (templates.js)
    This file contains the data for all website templates.
    To add a new template, add a new object to the `templates` array.
=====================================================================*/

export const templates = [
    {
        id: "tmpl-001",
        title: "Modern Portfolio",
        description: "A sleek, one-page portfolio for creatives. Features a dark theme and smooth scroll animations.",
        image: "images/template-pictures/personal portfolio.png",
        type: "one-page",
        category: "portfolio",
        difficulty: "beginner",
        tags: ["portfolio", "creative", "dark-theme"],
        html: `<header>
    <h1>Shoez Moleleki</h1>
    <p>Creative Web Developer</p>
</header>
<nav>
    <a href="#about">About</a>
    <a href="#portfolio">Portfolio</a>
    <a href="#contact">Contact</a>
</nav>
<section id="about">
    <h2>About Me</h2>
    <p>I build beautiful and functional websites using modern technologies.</p>
</section>
<section id="portfolio">
    <h2>My Work</h2>
    <div class="gallery">
        <img src="https://placehold.co/600x400/3b82f6/white?text=Project+1" alt="Project 1">
        <img src="https://placehold.co/600x400/10b981/white?text=Project+2" alt="Project 2">
        <img src="https://placehold.co/600x400/8b5cf6/white?text=Project+3" alt="Project 3">
    </div>
</section>
<section id="contact">
    <h2>Get in Touch</h2>
    <p>Email: contact@johndoe.com</p>
</section>`,
        css: `body { 
    font-family: sans-serif; 
    background-color: #1a1a1a; 
    color: #f0f0f0; 
    text-align: center; 
    margin: 0;
}
header, section { 
    padding: 40px 20px;
}
nav { 
    background-color: #333; 
    padding: 15px; 
    position: sticky; 
    top: 0; 
}
nav a { 
    color: white; 
    text-decoration: none; 
    margin: 0 15px; 
}
.gallery { 
    display: flex; 
    justify-content: center; 
    gap: 15px; 
    flex-wrap: wrap;
}
.gallery img { 
    max-width: 100%; 
    height: auto;
    border-radius: 8px;
}`,
        js: `// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});`
    },
    {
        id: "tmpl-002",
        title: "E-commerce Storefront",
        description: "A multi-page template for a modern online store, complete with product grids and cart.",
        image: "images/template-pictures/Screenshot 2025-09-26 141754.png",
        type: "multi-page",
        category: "ecommerce",
        difficulty: "intermediate",
        tags: ["shop", "product", "online-store"],
        html: `<h2>Featured Products</h2>
<div class="product-grid">
    <div class="product-card">
        <img src="https://placehold.co/400x400/f59e0b/white?text=Product+A" alt="Product A">
        <h3>Product A</h3>
        <p>$19.99</p>
        <button class="add-to-cart">Add to Cart</button>
    </div>
    <div class="product-card">
        <img src="https://placehold.co/400x400/ef4444/white?text=Product+B" alt="Product B">
        <h3>Product B</h3>
        <p>$24.99</p>
        <button class="add-to-cart">Add to Cart</button>
    </div>
    <div class="product-card">
        <img src="https://placehold.co/400x400/3b82f6/white?text=Product+C" alt="Product C">
        <h3>Product C</h3>
        <p>$29.99</p>
        <button class="add-to-cart">Add to Cart</button>
    </div>
</div>`,
        css: `h2 { text-align: center; margin-bottom: 30px; }
.product-grid { 
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
    gap: 20px; 
    padding: 20px;
}
.product-card { 
    border: 1px solid #ddd; 
    border-radius: 8px; 
    padding: 15px; 
    text-align: center; 
}
.product-card img { 
    max-width: 100%; 
    height: auto; 
    margin-bottom: 10px; 
}
.add-to-cart { 
    background-color: #3b82f6; 
    color: white; 
    border: none; 
    padding: 10px 15px; 
    border-radius: 5px; 
    cursor: pointer; 
}`,
        js: `const cartButtons = document.querySelectorAll('.add-to-cart');
cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert(button.parentElement.querySelector('h3').textContent + ' added to cart!');
        button.textContent = 'Added!';
        setTimeout(() => { button.textContent = 'Add to Cart'; }, 2000);
    });
});`
    },
    {
        id: "tmpl-003",
        title: "Creative Agency",
        description: "A visually striking template for digital agencies to showcase their work and services.",
        image: "images/template-pictures/creative agency.png",
        type: "multi-page",
        category: "business",
        difficulty: "beginner",
        tags: ["business", "agency", "professional"],
        html: `<div class="hero">
    <h1>Innovative Digital Solutions</h1>
    <p>We help brands grow in the digital age.</p>
</div>
<section class="services">
    <h2>Our Services</h2>
    <div class="service-item">Web Design</div>
    <div class="service-item">Marketing</div>
    <div class="service-item">Branding</div>
</section>`,
        css: `.hero {
    background-color: #3b82f6;
    color: white;
    padding: 80px 20px;
    text-align: center;
}
.services {
    padding: 40px 20px;
    display: flex;
    justify-content: space-around;
}
.service-item {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    flex-basis: 30%;
    text-align: center;
}`,
        js: ``
    },
    {
        id: "tmpl-004",
        title: "Personal Blog",
        description: "A clean, content-focused blog template with a minimalist design and great readability.",
        image: "images/template-pictures/blog.png",
        type: "multi-page",
        category: "blog",
        difficulty: "beginner",
        tags: ["blog", "writing", "minimalist"],
        html: `<main>
    <article>
        <h2>My First Blog Post</h2>
        <p class="meta">Published on August 24, 2025</p>
        <p>This is the beginning of my journey into web development. Follow along for more updates!</p>
    </article>
    <article>
        <h2>Understanding CSS</h2>
        <p class="meta">Published on August 25, 2025</p>
        <p>CSS is a powerful tool for styling web pages. Let's dive into the basics...</p>
    </article>
</main>`,
        css: `main { 
    max-width: 800px; 
    margin: 40px auto; 
    padding: 0 20px;
}
article { 
    border-bottom: 1px solid #eee; 
    padding-bottom: 20px; 
    margin-bottom: 20px; 
}
.meta { 
    color: #888; 
    font-size: 0.9em; 
}`,
        js: ``
    },
    {
        id: "tmpl-005",
        title: "Restaurant Landing Page",
        description: "A delicious-looking one-page site for a restaurant with a menu, gallery, and reservation form.",
        image: "images/template-pictures/menu.png",
        type: "one-page",
        category: "business",
        difficulty: "intermediate",
        tags: ["restaurant", "food", "business"],
        html: `<section class="menu">
    <h2>Our Menu</h2>
    <ul>
        <li>Pasta Carbonara - $18</li>
        <li>Margherita Pizza - $15</li>
        <li>Caesar Salad - $12</li>
    </ul>
</section>
<section class="booking">
    <h2>Book a Table</h2>
    <form id="booking-form">
        <input type="text" placeholder="Name" required>
        <input type="email" placeholder="Email" required>
        <input type="date" required>
        <button type="submit">Book Now</button>
    </form>
</section>`,
        css: `.menu, .booking { padding: 40px 20px; text-align: center; }
ul { list-style: none; padding: 0; }
form { display: flex; flex-direction: column; max-width: 400px; margin: auto; gap: 10px; }
input, button { padding: 10px; font-size: 1em; }
button { background-color: #ef4444; color: white; border: none; cursor: pointer; }`,
        js: `const form = document.getElementById('booking-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your booking request has been sent.');
    form.reset();
});`
    },
    {
        id: "tmpl-006",
        title: "SaaS Landing Page",
        description: "A modern, conversion-focused landing page for a Software-as-a-Service product.",
        image: "images/template-pictures/last.png",
        type: "one-page",
        category: "business",
        difficulty: "beginner",
        tags: ["saas", "startup", "tech"],
        html: `<div class="hero">
    <h1>The Future of Productivity is Here</h1>
    <p>Streamline your workflow with our innovative solution.</p>
    <a href="#pricing" class="cta-button">Get Started</a>
</div>
<section id="pricing">
    <h2>Pricing Plans</h2>
    <div class="pricing-card">
        <h3>Basic</h3>
        <p>$10/month</p>
        <button>Choose Plan</button>
    </div>
</section>`,
        css: `.hero { text-align: center; padding: 60px 20px; }
.cta-button { 
    display: inline-block;
    background-color: #8b5cf6; 
    color: white; 
    padding: 12px 24px;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 20px;
}
#pricing { text-align: center; padding: 40px 20px; }
.pricing-card { 
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 8px;
    display: inline-block;
}`,
        js: ``
    }
];
