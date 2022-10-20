document ready function
$(document).ready(function({

}))

% the above function will run as soon as browser has loaded the page
% without it, code can be renedered before loading HTML which would cause bugs.

% All jQuery functions starts with $.

To make the button bounce,
add code to document ready function: $("button").addClass("animated bounce");
make sure to add the stylesheet for animation
<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.compat.css"
  />

select button and add animated shake class
$("button").addClass("animated shake");

select button and add animated bounce class for bounce effect
$("button").addClass("animated bounce");

select class and add animated bounce effect
$(".class-Name").addClass("animated bounce");

select id and add animated fadeOut effect
$("#id").addClass("animated fadeOut");
  
Remove class from an element with jQuery:
$("button").removeClass("btn-primary");
$("#id").removeClass("btn-default");

Change the CSS of an element using jQuery:
$("#target1").css("color", "red");
this will change the text color of target1 element into red.

Disable an element using jQuery with .prop():
$("#id").prop("disabled", true);

Change text inside and element using jQuery:
we have 2 methods: .html and .text
$("#id").html("<em>Hello there</em>");
it will change the text of id element with emphasized "Hello there" text.

Remove an element usinf jQuery: with .remove() method
$("#id").remove();

Use appendTo to move element using jQuery:
suppose you want to move your #id element from #left-side to #right-side
$("#id").appendTo("#right-side");
it will move the #id element from #left-side to #right-side.

Clone an element using jQuery: with clone() method
suppose we want to copy an element from one section to other section
$("#id").clone().appendTo("#target-id");

Target the parent of an element uisng jQuery:
suppose you want to set the background color on parent of an element.
$("element").parent().css("background-color", "color-value");

Target the children of an element using jQuery:
suppose you want to set the text color of button which is inside a div element of id "#id"
$("#id").children().css("color", "color-value");


Target a specific child of an element using jQuery:  target:nth-child(n)
Suppose we have 60 elements with class "class" in 2 diff elements(3 each).
Now we want to target 52nd child and add a class of animated bounce or set a color
$(".class:nth-child(52)").addClass("animated bounce");

Target odd or even elements using jQuery with :odd or :even
Suppose you want to add a aniamted shake class to odd elements and animated bounce to even elements:
$(".class-name:odd").addClass("animated bounce");
$(".class-name:even").addClass("animated shake");

Use jQuery to change the entire page: body
$("body").addClass("animated hinge");
