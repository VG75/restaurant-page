const renderMenu = function () {
    const heading  = document.createElement("h1");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    heading.textContent = "Menu";
    const beverageContent = `<h2>Bevarage</h2>
            <div class="dishes">
                <div class="card">
                    <div id="price">$2</div>
                    <img src="./images/lemon-tea.jpg" alt="Lemon tea" width="200" height="200">
                    <h4>Lemon Tea</h4>
                    <p>A warm, sweet tea made with the highest quality honey 
                        and a bit of lemon to start your day off right!</p>
                    
                </div>
                <div class="card">
                    <div id="price">$3</div>
                    <img src="./images/berry-tea.jpg" alt="Beary tea" width="200" height="200">
                    <h4>Beary Tea</h4>
                    <p>A comforting, almost filling, tea that is infused with the flavors of several kinds of berries.
                         Best served cold, but can be served hot on request.</p>
                </div>
            </div>`;
    div1.innerHTML = beverageContent;
    const sidesContent = `<h2>Sides</h2>
            <div class="dishes">
                <div class="card">
                    <div id="price">$1</div>
                    <img src="./images/bread-jam.jpg" alt="Lemon tea" width="200" height="200">
                    <h4>Toast and Jam</h4>
                    <p>A slice of toast, your choice
                         of bread, and our homemade blackberry or raspberry jam.</p>
                    
                </div>
                <div class="card">
                    <div id="price">$3</div>
                    <img src="./images/fruits.jpg" alt="Beary tea" width="200" height="200">
                    <h4>Fresh Fruit</h4>
                    <p>A small 
                        bowl of fresh fruit, whatever we find at the market for the day.</p>
                </div>
            </div>`;
    div2.innerHTML = sidesContent;
    const mainDishContent = `<h2>Main Dishes</h2>
            <div class="dishes">
                <div class="card">
                    <div id="price">$4</div>
                    <img src="./images/pancake.jpg" alt="Lemon tea" width="200" height="200">
                    <h4>Pancakes</h4>
                    <p>A stack of homemade 
                        buttermilk pancakes, served with our locally sourced maple syrup.</p>
                    
                </div>
                <div class="card">
                    <div id="price">$5</div>
                    <img src="./images/fruit-toast.jpg" alt="Beary tea" width="200" height="200">
                    <h4>French Toast</h4>
                    <p>Two slices of the best french toast 
                        you will ever eat, served with our locally sourced maple syrup.</p>
                </div>
                <div class="card">
                    <div id="price">$5</div>
                    <img src="./images/beary-poridge.png" alt="Lemon tea" width="200" height="200">
                    <h4> Best Porridge</h4>
                    <p>Made by Baby Bear himself, 
                        this porridge is guarenteed to be just right, or your money back.</p>
                    
                </div>
                <div class="card">
                    <div id="price">$7</div>
                    <img src="./images/sandwitch.jpg" alt="Beary tea" width="200" height="200">
                    <h4>Veggie Sandwich</h4>
                    <p>Do you like vegetables? Then this is the sandwich for you! 
                        Stuffed full of a variety of fresh produce, it will fill you up.</p>
                </div>
                
            </div>`;
    div3.innerHTML = mainDishContent;
    return {heading, div1, div2, div3};
}

export {renderMenu};