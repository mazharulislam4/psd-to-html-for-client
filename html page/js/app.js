const swiper = new Swiper('.sw_image_slider .swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });


//   selection  login , sign up and register button

const login_btn = document.getElementById('login_btn')
const sign_btn = document.getElementById('sign_btn')
const reset_btn_btn = document.getElementById('reset_btn')
const login_page = document.getElementById('login_page')
const create_page = document.getElementById('create_page')
const reset_pass_page = document.getElementById('reset_pass_page')



create_page.style.display = "flex";
login_page.style.display = "none"; 
reset_pass_page.style.display = "none";


login_btn.addEventListener('click' , function(e){
  create_page.style.display = "none";
  login_page.style.display = "flex"; 
  reset_pass_page.style.display = "none";
})

sign_btn.addEventListener('click' , function(e){
    create_page.style.display = "flex";
    login_page.style.display = "none"; 
    reset_pass_page.style.display = "none";
  })




reset_btn.addEventListener('click' , function(e){
    reset_pass_page.style.display = "flex";
    create_page.style.display = "none";
    login_page.style.display = "none"; 
  })