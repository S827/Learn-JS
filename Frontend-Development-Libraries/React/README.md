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

10. Use React to render nested components
const TypesOfFruit = () => {
    return (
        <h2>Fruits:</h2>
        <ul>
            <li>Apple</li>
            <li>Mango</li>
            <li>Orange</li>
        </ul>
    )
}
const Fruits = () => {
    return (
        <div>
            <TypesOfFruit />            functional componenet nested withing Fruits
        </div>
    );
}

class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Types of food: </h1>
                <Fruits />              Fruits nested in TypesOfFood
            </div>                    
        )
    }
}
TypesOfFood: Parent
children of TypesOfFood is Fruits
children of Fruits is TypesOfFruits functional component
we can say TypesOfFruit is grand children of TypesOfFood

11.Write a React Component from Scratch

class MyComponent extends React.Component {
            constructor(props){
                super(props);
            }
            render(){
                return(
                    <div>
                        <h1>My First Component!</h1>
                    </div>
                );
            };
        }
        ReactDOM.render(<MyComponent />,  document.getElementById("well"));

12. Pass props to a Stateless Functional Component
<App>
    <welcome user='eto' />
</App>
Here App component renders a child component called welcome(a stateless functional component) and we can pass Welcome a user property like above.
Welcome component:
const Welcome = (props) => <h1>Hello, {props.user}!</h1>

Example:There are Calendar and CurrentDate components in the code editor. When rendering CurrentDate from the Calendar component, pass in a property of date assigned to the current date from JavaScript's Date object. Then access this prop in the CurrentDate component, showing its value within the p tags. Note that for prop values to be evaluated as JavaScript, they must be enclosed in curly brackets, for instance date={Date()}.

const CurrentDate = (props) => {
    return (
        <div>
            <p>The current date is: {props.date}</p>
        </div>
    );
};
class Calendar extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h3>What date is it?</h3>
                <CurrentDate date={Date()} /> passing value to date property of CurrentDate
            </div>
        );
    }
};
Output is:
What date is it?
The current date is: Sat Oct 22 2022 14:35:28 GMT+0530 (India Standard Time)


13. Pass an array as props
<ParentComponent>
    <ChildComponent color={['red','green','yellow']} />
</ParentComponent>

const ChildComponent = (props) => <p>{props.color.join(', ')}</p> //separated with comma and space
Here in ParentComponent we passed an array of colors in color props
and in ChildCOmponent we rendered it in a paragraph by converting the array into string separated with comma and space.

Output will be: red, green, yellow

Example:There are List and ToDo components in the code editor. When rendering each List from the ToDo component, pass in a tasks property assigned to an array of to-do tasks, for example ["walk dog", "workout"]. Then access this tasks array in the List component, showing its value within the p element. Use join(", ") to display the props.tasksarray in the p element as a comma separated list. Today's list should have at least 2 tasks and tomorrow's should have at least 3 tasks.

const List = (props) => {
    return <p>{props.tasks.join(', ')}</p>
};

class ToDo extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h1>To Do Lists</h1>
                <h2>Today</h2>
                <List tasks={['reading', 'coding', 'workout']} />
                <h2>Tomorrow<h2>
                <List tasks={['cooking', 'joggin', 'playing']} /> 
            </div>
        );
    }
};
Output is:
To Do Lists
Today
reading, coding, workout

Tomorrow
cooking, joggin, playing

14. Use default Props
MyComponent.defaultProps = {prop: 'value'};
Example:
const ShoppingCart = (props) => {
    return (
        <div>
            <h1>Shopping Cart Component</h1>
        </div>
    )
}
here we can use default prop if it is not specified, but if we use null as a dafult prop's value, it will remain null
ShoppingCart.defaultProps = {items: 'beans'};


15. Override default props
way to override default props is to explicitly set the prop values for the component
Example:The ShoppingCart component now renders a child component Items. This Items component has a default prop quantity set to the integer 0. Override the default prop by passing in a value of 10 for quantity.

const Items = (props) => {
    return <h1>Current Quantity of item in cart: {props.quantity}</h1>
};
Items.dafaultProps = {quantity: 0}  //default prop value set to 0
class ShoppingCart extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Items quanity={10} />  //overrding default prop value to 10
        )
    }
}

16. use PropTypes to define the Props you expect
and it gives useful warning if PropTypes is not what we expected

MyComponent.propTypes = {PropertyName.PropTypes.func.isRequired};

here PropertyName is name of the prop
func is function which is our expected proptype
isRequired, tells the proptype is required, if it is not it will produce warning message

As of React v15.5.0 PropTypes is imported independently from React,like this:
import PropTypes from 'prop-types';


17. Access Props Using this.props
when you need to access props in a class component from a parent class component
we use this keyword

like this.props.data

Example:Render an instance of the Welcome component in the parent component App. Here, give Welcome a prop of name and assign it a value of a string. Within the child, Welcome, access the name prop within the strong tags

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <welcome name='eto' />
            </div>
        );
    }
};
class Welcome extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <p>Hello, <strong>{this.props.name}</strong>!</p>
            </div>
        );
    }
};
Output:
Hello, eto!


18. Example of 2 class components
The code editor has a CampSite component that renders a Camper component as a child. Define the Camper component and assign it default props of { name: 'CamperBot' }. Inside the Camper component, render any code that you want, but make sure to have one p element that includes only the name value that is passed in as a prop. Finally, define propTypes on the Camper component to require name to be provided as a prop and verify that it is of type string.

class CampSite extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <Camper />
            </div>
        );
    }
};
class Camper extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
            </div>
        );
    }
};
Camper.defaultProps = {name : 'CamperBot'};//assigns the default valye to name prop of camper
Camper.propTypes = {name: PropTypes.string.isRequired};//check the returned type is string or not



