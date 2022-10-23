/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */
const content = (
    <div>
        <img src="./react-1.svg" width="40px" />
        <h1>Fun Facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
);
ReactDOM.render(content, document.getElementById("root"));
console.log(content);

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */
const Page = function() {
    return (
        <ol>
            <li>React is interesting</li>
            <li>React is more efficeint way of web development</li>
        </ol>
    );
};
ReactDOM.render(<Page />, document.getElementById("root"));

/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

    
     /**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
*/
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-1.svg" width="50px" />
            </nav>
        </header>
    )
}
/**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/
function Footer() {
    return (
        <footer>
            <small>© 20xx eto's development. All rights reserved.</small>
        </footer>
    )
}
function MainContents() {
    return (
        <>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>React is interesting</li>
                <li>React is more efficeint way of web development</li>
            </ol>
        </>
    )
}
const Page1 = function(){
    return (
        <div>
            <Header />
            <MainContents />
            <Footer />
        </div>
    );
};
ReactDOM.render(<Page1 />, document.getElementById("root"));
