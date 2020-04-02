function setRemFontSize(baseSize, baseWidth) {
	var baseSize = baseSize || 13,
		baseWidth = baseWidth || 320,
		clientWidth = document.documentElement.clientWidth;
	document.getElementsByTagName('html')[0].style.fontSize = clientWidth * baseSize / baseWidth + 'px'
}
setRemFontSize();

window.addEventListener("resize", function() {
	setRemFontSize();
});