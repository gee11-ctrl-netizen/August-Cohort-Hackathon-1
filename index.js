

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

let sideMenu = document.getElementById("side_menu");
function open_menu() {
    sideMenu.style.right = "0";
}

function close_menu() {
    sideMenu.style.right = "-200px";
}




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


