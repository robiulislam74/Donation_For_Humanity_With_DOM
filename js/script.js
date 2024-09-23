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

document.querySelector('#donate_btn').addEventListener('click',function(){
    const idPass = donationCalculating('#donation_balance','#donate_input')
})
document.querySelector('#donate_btn2').addEventListener('click',function(){
    const idPass = donationCalculating('#donation_balance2','#donate_input2')
})
document.querySelector('#donate_btn3').addEventListener('click',function(){
    const idPass = donationCalculating('#donation_balance3','#donate_input3')
})








