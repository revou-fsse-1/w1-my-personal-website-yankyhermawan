window.onscroll = function () {
	myFunction();
};

function myFunction() {
	var y = window.scrollY;
	if (y > 150) {
		document.getElementById("content2").className = "content show";
	} else {
		document.getElementById("content2").className = "content hide";
	}
	if (y > 350) {
		document.getElementById("content3").className = "content show";
	} else {
		document.getElementById("content3").className = "content hide";
	}
	if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
		document.getElementById("back_to_top").className = "content show";
	} else {
		document.getElementById("back_to_top").className = "content hide";
	}
}

function gotoBottom() {
	window.scrollTo({ top: document.body.offsetHeight, behavior: "smooth" });
}

function gotoTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}

window.onload = setTimeout(function () {
	document.body.style.opacity = "1";
}, 1000);
