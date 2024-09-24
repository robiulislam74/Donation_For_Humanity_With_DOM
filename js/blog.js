// page btn bg Added Here
window.addEventListener("scroll", function(event) {
    const navBg = document.querySelector('#nav_bg')
  const scrollAddCls = document.querySelector('#header_page_bg')
  scrollAddCls.classList.add('bg-slate-200/80','backdrop-blur')
  navBg.classList.remove('bg-slate-200')
});
// Blog Button functionality added here
document.querySelector('#home_btn').addEventListener('click',function(){
    window.location = '/index.html'
})
