// page btn bg Added Here
window.addEventListener("scroll", function(event) {
    const navBg = document.querySelector('#nav_bg')
  const scrollAddCls = document.querySelector('#header_page_bg')
  scrollAddCls.classList.add('bg-slate-200/80','backdrop-blur')
  navBg.classList.remove('bg-slate-200')
});
// Blog Button functionality added here
document.querySelector('#home_btn').addEventListener('click',function(e){
    e.preventDefault()
    window.location = './index.html'
})


// Faq
const faqAnswer = document.querySelector('#faq_answer')
const faqAnswer2 = document.querySelector('#faq_answer2')
const faqAnswer3 = document.querySelector('#faq_answer3')
const faqAnswer4 = document.querySelector('#faq_answer4')

function answerShowingFunction(id){
    faqAnswer.classList.add('hidden')
    faqAnswer2.classList.add('hidden')
    faqAnswer3.classList.add('hidden')
    faqAnswer4.classList.add('hidden')

    document.querySelector(id).classList.remove('hidden')
}

document.querySelector('#faq_show').addEventListener('click',function(e){
    answerShowingFunction('#faq_answer')
})
document.querySelector('#faq_show2').addEventListener('click',function(){
    answerShowingFunction('#faq_answer2')
})
document.querySelector('#faq_show3').addEventListener('click',function(){
    answerShowingFunction('#faq_answer3')
})
document.querySelector('#faq_show4').addEventListener('click',function(){
    answerShowingFunction('#faq_answer4')
})
