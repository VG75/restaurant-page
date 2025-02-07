const renderInitial = function () {
    const content = `<h1>VG's Veg Van</h1>
        <div id="testimonieal">
            <p>Beary's has the best porridge! The atmosphere and customer service 
                make you feel like you are sitting in the middle of the woods, eating like a bear! 
                This is exactly the kind of place that I like to return to again and again.
            </p>
            <h3>Sergin</h3>
        </div>

        <div id="timings">
            <h3>Hours</h3>
            <div id="timings-list">
                <ul>
                    <li>Sunday: 8am - 8pm</li>
                    <li>Monday: 6am - 6pm</li>
                    <li>Tuesday: 6am - 6pm</li>
                    <li>Wednesday: 6am - 6pm</li>
                    <li>Thursday: 6am - 6pm</li>
                    <li>Friday: 6am - 6pm</li>
                    <li>Saturday: 8am - 10pm</li>
                </ul>
            </div>
            
        </div>

        <div id="location">
            <h3>location</h3>
            <p>321 Forest Drive, Forestvillaa, Sirsi</p>
        </div>
    `;
   
    const container = document.querySelector("#container");
    container.innerHTML = content;

}
export {renderInitial};