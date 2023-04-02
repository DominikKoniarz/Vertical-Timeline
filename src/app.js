const infoBlocks = document.querySelectorAll(".info");
const contentBlock = document.querySelector("#content");

function checkIfVisible(elems) {
	elems.forEach((elem) => {
		if (elem.getBoundingClientRect().bottom < window.innerHeight) {
			elem.parentNode.classList.add("in-view");
		}
	});
}

document.addEventListener("scroll", () => {
	checkIfVisible(infoBlocks);
});

document.addEventListener("DOMContentLoaded", () => {
	checkIfVisible(infoBlocks);
});
