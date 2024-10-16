
let hero = document.querySelector(".hero");

if(window.innerWidth <= 768){
    hero.innerHTML = `
        <div class="img"><img src="./images/hero..JPG" alt=""></div>
        <div class="content">
            <span>SUMMER COLLECTION</span>
            <h1>Fall-Summer<br> Collection 2023</h1>
            
            <p>The Best Collection of Summer that you ever Wear.<br>Explore our trendy outfits and enjoy the sunny days with style.</p>
            <button>Shop Now</button>
           </div>`;
}

let products = document.getElementById("Products");
let xhr = new XMLHttpRequest();

// Function to render products based on filters
function renderProducts(data, filter = 'Best Sellers') {
    products.innerHTML = ""; // Clear current products display
    data.forEach(product => {
        const {image, title, original_price, New, Hot, discounted_price, availability} = product;

        // Apply filter logic
        if ((filter === 'New Arrival' && New === "New") || 
            (filter === 'Hot Sales' && Hot === "Hot") || 
            filter === 'Best Sellers') {
            
            const productHTML = `
                <div class="col-md-6 col-lg-4 mb-4 mb-lg-0 p-3">
                    <div class="card">
                        <div class="d-flex justify-content-between p-3">
                            <p class="lead mb-0">Today's Combo Offer</p>
                            <div class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong" style="width: 35px; height: 35px;">
                                <p class="text-white mb-0 small">x4</p>
                            </div>
                        </div>
                        <img src="${image}" class="card-img-top" alt="Product ${title}" />
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <p class="small"><a href="#!" class="text-muted">${title}</a></p>
                                <p class="small text-danger"><s>$${original_price.toFixed(2)}</s></p>
                            </div>
                            <div class="d-flex justify-content-between mb-3">
                                <h5 class="mb-0">${title}</h5>
                                <h5 class="text-dark mb-0">$${discounted_price.toFixed(2)}</h5>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <p class="text-muted mb-0">Available: <span class="fw-bold">${availability}</span></p>
                                <div class="ms-auto text-warning">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                <button class='btn btn-danger btn-sm add-to-cart'>Add-To-Cart</button>
                                ${New ? `<span class="new">${New}</span>` : ""}
                                ${Hot ? `<span class="hot">${Hot}</span>` : ""}
                            </div>
                        </div>
                    </div>
                </div>`;

            products.innerHTML += productHTML;
        }
    });

    // Attach event listeners to all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(btn => {
        btn.addEventListener("click", () => {
           let modal = new bootstrap.Modal(document.getElementById("modal"));
           modal.show();
        });
    });
}

// Load products and set up filters
xhr.open("GET", "./product.json", true);
xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status <= 400) {
        let data = JSON.parse(xhr.responseText);

        // Initial render of Best Sellers
        renderProducts(data);

        // Filter event listeners
        document.getElementById("bestSellers").addEventListener("click", () => renderProducts(data, 'Best Sellers'));
        document.getElementById("newArrival").addEventListener("click", () => renderProducts(data, 'New Arrival'));
        document.getElementById("hotSales").addEventListener("click", () => renderProducts(data, 'Hot Sales'));
    }
};
xhr.send();









const themeToggleButton = document.getElementById('theme-toggle');
        const body = document.getElementById('body');

        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            body.className = currentTheme; 
            themeToggleButton.textContent = currentTheme === 'bg-dark text-light' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
        }

        themeToggleButton.addEventListener('click', () => {
            if (body.classList.contains('bg-dark')) {
                body.className = 'bg-light text-dark';
                themeToggleButton.textContent = 'Switch to Dark Mode';
                localStorage.setItem('theme', 'bg-light text-dark');
            } else {
                body.className = 'bg-dark text-light';
                themeToggleButton.textContent = 'Switch to Light Mode';
                localStorage.setItem('theme', 'bg-dark text-light');
            }
        });




    



            let filterOption = document.getElementById("filterProducts");
            filterOption.children[0].classList.add("active");
            if(filterOption){
                [...filterOption.children].slice(1,3).forEach(child=>{
                    child.addEventListener("click",function(){
                        [...filterOption.children].forEach(item => {
                            item.classList.remove("active");
                        });
                        this.classList.toggle("active");
                    });
                });
            }












            let homebtn = document.getElementById("home");
            let home = document.getElementById("container-fluid");
            homebtn.addEventListener("click",()=>{
                window.scrollTo({
                    top:home.offsetTop,
                    behavior: "smooth"  
                });
            });





            let shopbtn = document.getElementById("shop");
            let shop = document.getElementById("shopsec");
            shopbtn.addEventListener("click",()=>{
                window.scrollTo({
                    top:shop.offsetTop,
                    behavior: "smooth"  
                });
            });







            let aboutbtn = document.getElementById("about");
            let about = document.getElementById("aboutsec");
            aboutbtn.addEventListener("click",()=>{
                window.scrollTo({
                    top:about.offsetTop,
                    behavior: "smooth"  
                });
            });





            let contactbtn = document.getElementById("contact");
            let contact = document.getElementById("contactsec");
            contactbtn.addEventListener("click",()=>{
                window.scrollTo({
                    top:contact.offsetTop,
                    behavior: "smooth"  
                });
            });