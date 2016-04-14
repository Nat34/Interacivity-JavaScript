var main = function () {
	"use strict";

	$(".comment-input button").on("click", function (event) {
		var $new_comment;

		if ($(".comment-input input").val() !== "") {
		 	$new_comment = $("<p>").text($(".comment-input input").val());
		
		$(".comments").append($new_comment);
		
	}
};

$(document).ready(main);

/* 
Interactivity - Handling click events

* action: attaching an **event listener** to the DOM element (.comment-input button) referenced in the call to the function
* Jquery: target elements in the DOM using CSS selectors
* JavaScript: manipulate elements in the DOM
* **When the user clicks the +, print "Hello, World!" to the console**
* When the user [event for which we are listening on], then [function] occurs. event then function
* the user does something and the page reacts: inter**activity**

New things:
event listener
$ function
appends
.on
.append
.text
refactor
val function

Removed:
console.log("Hello, World!");
$(".comments").append("<p>this is a new comment</p>");
*/

/* Interactivity - Dynamically manipulating the DOM 

* create a variable
* variable declartion and assignment
* variable name: *$new_comment* can be anything; but if the variable will hold a Jquery object use the `$` as the first character
* 
*/

/* 

# Review: What is happening?
* variable declaration and assignment
* variable name $new_comment
* <p> paragraph element as JQuery object

# Review: What is happening?
* New paragraph element created then text content of the <p> is being changed to "this is a new comment")

# Next: Get the content out! 
* Store content of the input box in the new variable using a JQuery function that returns the content of an input box
* val function, short for value
* Review: what are we doing? We're going to make the content of the input box the text value of our new paragraph element.

*/

/*Squashing the bug

bug: JQuery program adds an empty p element to the DOM
squash: insert a check to see if the content of the input box is empty before doing anything with it.
* `if` statement: `if ($(".comment-input input").val() !== "") {`
if: confirms the content of the input box does *not* equal the empty string
* NOTICE: variable declaration moved above the if statement. keep variables declared at the top of your function definitions.



