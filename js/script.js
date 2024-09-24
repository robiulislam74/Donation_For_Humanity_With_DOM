const historyBtnElement = document.querySelector('#history_page_btn')
const donationBtnElement = document.querySelector('#donation_page_btn')

document.querySelector('#donation_page_btn').addEventListener('click',function(){
    pageChangingFunction('#donation_page')
    buttonActiveColorChange('#donation_page_btn')
})

document.querySelector('#history_page_btn').addEventListener('click',function(){
    pageChangingFunction('#history_page')
    buttonActiveColorChange('#history_page_btn')
})

//  Donation Calculater Here
document.querySelector('#donate_btn').addEventListener('click',function(){
    const idPass = donationCalculating('#donation_balance','#donate_input','#donate_name')
})
document.querySelector('#donate_btn2').addEventListener('click',function(){
    const idPass = donationCalculating('#donation_balance2','#donate_input2','#donate_name2')
})
document.querySelector('#donate_btn3').addEventListener('click',function(){
    const idPass = donationCalculating('#donation_balance3','#donate_input3','#donate_name3')
})

// page btn bg Added Here
window.addEventListener("scroll", function(event) {
    const navBg = document.querySelector('#nav_bg')
  const scrollAddCls = document.querySelector('#header_page_bg')
  scrollAddCls.classList.add('bg-slate-200/80','backdrop-blur')
  navBg.classList.remove('bg-slate-200')
});
// Blog Button functionality added here
document.querySelector('#blog_btn').addEventListener('click',function(){
    window.location = './blog.html'
})











