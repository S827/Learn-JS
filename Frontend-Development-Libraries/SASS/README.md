Syntactically Awesome stylesheets: Sass

1. store data with css variables
we can store variables for later use in css.
here variable declared with $ followed by variable name

2. Nest CSS with Sass
css can be nested for more efficiency
example: 
nav {
    background-color: blue;
}

nav > ul {
    list-style: none;
}

nav > ul > li {
    display: inline-block;
}

we can nest above:
nav {
    background-color: blue;
    ul {
        list-style: none;
        li {
            display: inline-block;
        }
    }
}

3. Create reusable with mixins
div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}

mixin for above:
@mixin box-shadow($x, $y, $blur, $c){ 
  -webkit-box-shadow: $x $y $blur $c;
  -moz-box-shadow: $x $y $blur $c;
  -ms-box-shadow: $x $y $blur $c;
  box-shadow: $x $y $blur $c;
}

now use it anywhere in the css sheet.
div{
    @include box-shadow(0px, 0px, 4px, #fff);
}


4. use @if, @else if and @else to add logic in styles

<style type='text/scss'>
  @mixin border-stroke($val){
    @if $val == light {
      border: 1px solid black;
    }
    @else if $val == medium {
      border: 3px solid black;
    }
    @else if $val == heavy {
      border: 6px solid black;
    }
    @else {
      border: none;
    }
  }


  #box {
    width: 150px;
    height: 150px;
    background-color: red;
    @include border-stroke(heavy);
  }
</style>


5. Use of @for to create a Sass loop
start through end: end included / start to end: end not included
syntax: @for $var from 1 through/to 12 {}

Example: we have 10 p elements with class name text-1, text-2 so on...
and want to add diff font sizes to each p element

@for $i from 1 through 10 {
    .text-#{$i} { font-size: 5px * $i; }
}
and if we dont want to manipulate 10th p element of class text-10,we will exclude the last one
@for $i from 1 to 10 {
    .text-#{$i} { font-size: 5px * $i; }
}


6. use @each to map over items in a list

@each $color in red, green, blue {
    .#{$color}-text { color: $color; }
}
above will set the respective colors to the element of classes red-text, green-text and blue-text.

or 
$colors : (color1: blue, color2: red, color-3:green);

@each $key, $color in $colors {
    .#{$color}-text {color: $color; }
}

both of the above will be converted into css:
.blue-text {
  color: blue;
}

.red-text {
  color: red;
}

.green-text {
  color: green;
}


7. Apply a styles untile the condition is met with @while
syntax:
$x: 1;
@while $x < 13{
  .text-#{$x} { font-size: 15px * $x; }
  $x: $x + 1;
}


8. Sass partials
parials are separated files that hold segments of CSS code. these are imported and used in other sass files. name starts with _, which tells sass it is a segment of code and not to convert it into css file.
sass files ends with .scss extension, to import use @import directive
example: you need to import mixins from partial named "_mixins.scss" and they are needed in main.css file,
@import 'mixins' : this is how to import the partial in main.css file.


9. extend 1 set of css styles into another
suppose we have below style and we want the same style in .diff element.
.same {
  width: 50px;
  border: 30px solid border;
}

.diff {
  @extend .same;
  background-color: black;
}
now .diff will have all the css properties of .same element which is width and border, and the new properties added background-color.


