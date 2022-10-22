ReactDOM.render(<h1>Hello, Evo</h1>, document.getElementById("root"));
ReactDOM.render(
    <div>
        <h1>Tasks:</h1>
        <ul>
            <li>Code on FreeCodeCamp</li>
            <li>Code on LeetCode</li>
            <li>Code on Scrimba</li>
            <li>Version Control</li>
        </ul>
    </div>, document.getElementById("root")
);
ReactDOM.render(<h1>Hello, Eva</h1>, document.getElementById("root"));

// Challenge: Create your own custom React component!
// Call it "MainContent", and have it return a simple
// h1 element that says "I'm learning React!"

// Afterward, render it below the Navbar (which
// you can do inside the ReactDOM.render call below)
const MainContent = function(){
    return (
        <h1>I'm learning React!</h1>
    );
};
ReactDOM.render(
    <div>
        <MainContent />
    </div>, document.getElementById("root")
);


/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/
const h1 = document.createElement("h1");
h1.textContent = "This is imperative way to program";
h1.className = "header";
document.getElementById("root").appendChild(h1);


/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/
const navbar = (
    <nav>
        <h1>Informatio</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
);
ReactDOM.render(navbar, document.getElementById("root"));