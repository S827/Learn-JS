0.
container-fluid:
to make the page mobile responsive nest all the html elements inside div with this class.

1.
class="img-responsive" : Make images mobile responsive
How?
Add the above class name in img element and try altering the window of the tab.

2.
class="test-center" : to center the element.

3. 
btn & btn-default:
btn: to create nice looking buttons, takes space as the content of button text.
btn-default: some more style on button, with nice whitesmoke like color.

4. 
btn-block:
to take full width space for button, and the content around it will be pushed down

5.
btn-primary:
adds nice looking blue color to the button, need to replace it with btn-default.

6.
btn-info:
this class is used to call attention to optional actions that user can take, add light blue color.

7.
btn-danger:
this class's color is used to notify users that button performs destructive action,
such as deleting the photo, or reset the progress.

8.
row and col-xs-*:
here xs means extra small screen and * denotes how much width need to take for an element.
example: suppose we have 3 buttons all taking full width and placed below each other.
Now we want to display buttons in 1 row and for extra small devices, then we put all the buttons inside div element with class 'row' and each button inside another div element with class name 'col-xs-4'.

9.
text-primary:
this class is used to add primary color to text.


10.
text-danger: 
like btn-danger, this adds red like color to the text of span element.

11.
Add font awesome icons to the page's element
add this code to the top of html page: 
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">

12.
now a days i tag is used to place icons.
to add a like icon: "fas fa-thumbs-up"
to add a info icon: "fas fa-info-circle"
to add a trash icon: "fas fa-trash"
to add a submit icon of paper plane: "fa fa-paper-plane"

13.
form-control:
adding above class to input elements like textarea, text input, and select will take whole width of the page.

14:
class="well":
it is used to create visual sense of depth for your columns.

15:
class="target":
it is used for jQuery slectors, easier to select html elements.
