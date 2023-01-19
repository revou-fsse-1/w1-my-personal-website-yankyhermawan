var element_width = document.getElementById("education").clientWidth;
var window_width = window.innerWidth;
var margin_left = (window_width - element_width) / 2 + "px";
document.getElementById("personal_info").style.marginLeft = margin_left;
document.getElementById("about_me").style.marginLeft = margin_left;
document.getElementById("container").style.marginLeft = margin_left;

function bgcolor() {
	var color = document.getElementById("background_color").value;
	document.body.style.backgroundColor = color;
	invertColor(color);
}

function invertColor(hex) {
	if (hex.indexOf("#") === 0) {
		hex = hex.slice(1);
	}
	// convert 3-digit hex to 6-digits.
	if (hex.length === 3) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}
	if (hex.length !== 6) {
		throw new Error("Invalid HEX color.");
	}
	var r = parseInt(hex.slice(0, 2), 16),
		g = parseInt(hex.slice(2, 4), 16),
		b = parseInt(hex.slice(4, 6), 16);
	// invert color components
	r = (255 - r).toString(16);
	g = (255 - g).toString(16);
	b = (255 - b).toString(16);
	// pad each with zeros and return
	text_color = "#" + padZero(r) + padZero(g) + padZero(b);
	var all = document.getElementsByTagName("*");
	for (var i = 0, max = all.length; i < max; i++) {
		all[i].style.color = text_color;
	}
}
function padZero(str, len) {
	len = len || 2;
	var zeros = new Array(len).join("0");
	return (zeros + str).slice(-len);
}

window.onload = setTimeout(function () {
	document.body.style.opacity = "1";
	document.body.style.backgroundColor = "#98bbc8";
}, 1000);

function removeBox() {
	var thing = document.getElementById("box");

	thing.classList.toggle("m-fadeOut");
}
