let image_element = document.getElementById('puppyImage');
let like_button_elememt = document.getElementById('likeButton');
let is_like_image = false;


function onClickLikeButton() {
    if (is_like_image === false) {
        image_element.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        like_button_elememt.style.backgroundColor = "#0967d2";
        like_button_elememt.style.color = "white";
        is_like_image = true;
    } else {
        image_element.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        like_button_elememt.style.backgroundColor = "#cbd2d9";
        like_button_elememt.style.color = "#9aa5b1";
        is_like_image = false;
    }

}