

var tablinks = document.getElementsByClassName("tab_links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")

}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};



// <!-- -----------------script to receive email communications using google sheets using a script from github [github script src url: https://github.com/jamiewilson/form-to-google-sheets ] -->


const scriptURL = 'https://script.google.com/macros/s/AKfycbzTr9GtocK_V_cg1awyxndI6JKB_Qs0yx8-LQm7qu91rfjePfMMNQ-c27TO49XvWp2TgA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully!"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 4000)

            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})




// ------------------scroll reveal----------------

ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200

});

ScrollReveal().reveal('.header_text, .about_me', { origin: "top" });

ScrollReveal().reveal('.home_image, .services-list, .work-list, .right-side', { origin: "bottom" });
ScrollReveal().reveal('.abt_description', { origin: "right" });
ScrollReveal().reveal('.about-gee, .header_text h1', { origin: "left" });


// ---------------sticky Headers-----------------

let header = document.querySelector("header")
header.classList.toggle("sticky", window.screenY > 100);



// -------------toggle icon navbar-----------

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");


menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
}

