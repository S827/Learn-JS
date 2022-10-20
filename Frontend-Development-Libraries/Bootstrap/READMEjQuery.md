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



