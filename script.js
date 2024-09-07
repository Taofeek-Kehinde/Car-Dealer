var lastScrollTop = 0;

varBar = document.getElementById("header");

window.addEventListener("scroll", function(){
  var scrollTop = this.window.pageXOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
      header.style.top = "-100px";
  } else {
      header.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

const counts = document.querySelectorAll('.my-list-count')
const speed = 97

counts.forEach((counter) => {
function upDate(){
 const target = Number(counter.getAttribute('data-target'))
 const count = Number(counter.innerText)
 const inc = target / speed        
 if(count < target){
     counter.innerText = Math.floor(inc + count) 
     setTimeout(upDate, 80)
 }else{
     counter.innerText = target
 }
}
upDate()
});

