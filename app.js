const sections = document.querySelectorAll("section");

const nav = document.querySelectorAll(".nav-link");

window.onscroll = () => {
    let curr;

    sections.forEach((section) => {
        const topSection = section.offsetTop;

        if (scrollY >= topSection - 60) {
            curr = section.getAttribute("id");

        }
    });

    nav.forEach((link) => {
        link.classList.remove("active");

        if (link.classList.contains(curr)) {
            link.classList.add("active");
            
        }

    });

};

function copyCode(id) {
    const copiedCode = document.getElementById(id+"-example");

    navigator.clipboard.writeText(copiedCode.innerText);

    const toolTipText = document.getElementById(id+"-tooltip");
    toolTipText.innerHTML = "Copied!";



}

function mouseOut(id) {
    const toolTipText = document.getElementById(id);
    toolTipText.innerHTML = "Copy to clipboard";
}