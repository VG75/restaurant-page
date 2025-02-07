import lemonTea from "./images/lemon-tea.jpg";
import berryTea from "./images/berry-tea.jpg";
import breadJam from "./images/bread-jam.jpg";
import fruits from "./images/fruits.jpg";
import pancake from "./images/pancake.jpg";
import fruitToast from "./images/fruit-toast.jpg";
import bearyPorridge from "./images/beary-poridge.png";
import sandwich from "./images/sandwitch.jpg";

const renderMenu = function () {
    const heading  = document.createElement("h1");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    heading.textContent = "Menu";

    div1.innerHTML = `
        <h2>Beverage</h2>
        <div class="dishes">
            <div class="card">
                <div id="price">$2</div>
                <img src="${lemonTea}" alt="Lemon tea" width="200" height="200">
                <h4>Lemon Tea</h4>
                <p>A warm, sweet tea made with honey and lemon.</p>
            </div>
            <div class="card">
                <div id="price">$3</div>
                <img src="${berryTea}" alt="Berry tea" width="200" height="200">
                <h4>Berry Tea</h4>
                <p>A tea infused with mixed berries.</p>
            </div>
        </div>
    `;
   

    div2.innerHTML = `
        <h2>Sides</h2>
        <div class="dishes">
            <div class="card">
                <div id="price">$1</div>
                <img src="${breadJam}" alt="Toast and Jam" width="200" height="200">
                <h4>Toast and Jam</h4>
                <p>A slice of toast with homemade jam.</p>
            </div>
            <div class="card">
                <div id="price">$3</div>
                <img src="${fruits}" alt="Fresh Fruit" width="200" height="200">
                <h4>Fresh Fruit</h4>
                <p>A bowl of fresh fruit.</p>
            </div>
        </div>
    `;

    div3.innerHTML = `
        <h2>Main Dishes</h2>
        <div class="dishes">
            <div class="card">
                <div id="price">$4</div>
                <img src="${pancake}" alt="Pancakes" width="200" height="200">
                <h4>Pancakes</h4>
                <p>Homemade buttermilk pancakes with maple syrup.</p>
            </div>
            <div class="card">
                <div id="price">$5</div>
                <img src="${fruitToast}" alt="French Toast" width="200" height="200">
                <h4>French Toast</h4>
                <p>French toast with maple syrup.</p>
            </div>
            <div class="card">
                <div id="price">$5</div>
                <img src="${bearyPorridge}" alt="Best Porridge" width="200" height="200">
                <h4>Best Porridge</h4>
                <p>Made by Baby Bear, guaranteed to be just right.</p>
            </div>
            <div class="card">
                <div id="price">$7</div>
                <img src="${sandwich}" alt="Veggie Sandwich" width="200" height="200">
                <h4>Veggie Sandwich</h4>
                <p>Fresh veggie sandwich.</p>
            </div>
        </div>
    `;
    div1.style.width = "90%";
    div2.style.width = "90%";
    div3.style.width = "90%";
    return { heading, div1, div2, div3 };
};

export { renderMenu };
