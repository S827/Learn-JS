1. create a simple jsx element

const JSX = <h1>Hello JSX!</h1>

page will display 
Hello JSX!

2. Create complex JSX element

const JSX = 
<div>
    <h1>The Telegraph</h1>
    <p>this is a news feed</p>
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>

3. add comments in JSX element {/**/}
{/* this is a comment */}

4. render HTML elements to the DOM
suppose we have a JSX and we want to render in the DOM
ReactDOM.render(JSX, target);
example: 
ReactDOM.render(JSX, document.getElementByID("#id"));

5, define an html class in JSX
class is defined as className in JSX
JSX follows camelcase convention
const JSX = (
    <div className="myDiv">
        <h1></h1>
    </div>
)

6. self closing tags
in html we have self closing tags like <br> and <hr>
un JSX it is not allowed, we need to give self closing tag like <br /> and <hr />
or <div />


7. create stateless functional component
example:
const DemoComponent = function(){
    return {
        <div className="any" />
    };
};
another example:
const   MyComponent = function(){
    return (
        <div>some text</div>
    );
};


8. Create a React Component
example1:
class Kitten extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <h1>Hello React!</h1>
        );
    }
}
exmaple2:
class MyCompnent extend React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                <h1>Hello React!</h1>
            </div>
        );
    }
}

9. Create a component with Composition
example:
const ChildComponent = () => {
    return {
        <div>
            <p>SOme text</p>
        </div>
    };
};

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                <h1> I am jjj </h1>
                <ChildComponent />
            </div>
        )
    }
}
