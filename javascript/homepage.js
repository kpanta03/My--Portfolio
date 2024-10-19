// const header= document.querySelector("header")
// const headerHeight=document.querySelector('header').offsetHeight;
// window.addEventListener('scroll',function(){
// if (this.window.scrollY>headerHeight){
//     header.classList.toggle('sticky');
// } else{
//     header.classList.remove('sticky');
// }
// })



alert('This page is still in development')


var typed= new Typed(".Job",{strings:["Web Designer.","Web Developer.","UX/UI Designer.","Frontend Developer."],
    typeSpeed: 100,
    backSpeed: 70,
    loop:true,
    showCursor: false
})

function downloadCV(){
    const link = document.createElement('a');
    link.href = '..\../My CV.pdf';
    link.download = 'Kritika_CV.pdf';
    link.click();
}




// Javascript for hamburger
const bars = document.querySelector('.right .fa-bars');
const mobileNav = document.getElementById('mobile-nav');

bars.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});

// Optional: Close the mobile menu when a link is clicked
const mobileLinks = document.querySelectorAll('.mobile-nav a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });
});




