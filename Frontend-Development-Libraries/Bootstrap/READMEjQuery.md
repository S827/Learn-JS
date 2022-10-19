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

  

