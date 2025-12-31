# like-unlike-toggle
Here's a fun, hands-on project that shows you how to manage UI states with JavaScript—no fuss, just a simple “Like” button for an image. When you tap the button, both the picture and the button itself update right away.

What’s inside:

Like Toggle: There’s a boolean that keeps track of whether you’ve “liked” the image or not.

Image Swapping: Click the button, and the puppy image swaps instantly.

Button Style: The button flips between blue (liked) and grey (unliked) so you always know what state you’re in.

Responsive Layout: The whole thing sits neatly in the center of the screen, thanks to Bootstrap 4’s utility classes. Looks good on any device.

What it’s made with:

HTML5 & CSS3: Handles the layout and gives the button its custom look.

Bootstrap 4: Makes lining things up and spacing them out a breeze.

JavaScript (ES6): Runs the toggle logic and updates the DOM.

How it actually works:

Everything runs through one function—onClickLikeButton(). Here’s what happens:

First, it checks if you’ve already liked the image.

If you haven’t: The function swaps in the “liked” puppy, turns the button blue, and flips the state to true.

If you have: The function switches back to the regular image, resets the button color, and sets the state to false.

All of this happens instantly, so you get that satisfying “liked” feedback you expect from social media.
