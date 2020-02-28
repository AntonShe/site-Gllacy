var modalButton = document.querySelector(".map-button");
var popup = document.querySelector(".modal-container");
var close = document.querySelector(".modal-close");
var popupson = document.querySelector(".modal-feedback");

function bgcolor(col){
    switch(col){
      	case 'slide1':
        	document.body.style.backgroundColor  = "#849d8f";
        break;
      	case 'slide2':
        	document.body.style.backgroundColor  = "#8996a6";
        	break;
      	case 'slide3' :
        	document.body.style.backgroundColor  = "#9d8b84";
        break;
     
    }
 };

modalButton.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
});

close.addEventListener("click", function(evt){
	evt.preventDefault;
	popup.classList.remove("modal-show");
});

popup.addEventListener("click", function(evt){
	evt.preventDefault;
	popup.classList.remove("modal-show");
});

popupson.addEventListener('click', function(evt) {
    evt.stopPropagation();
});









