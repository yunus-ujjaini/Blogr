function openmenu(){
    var links=document.getElementById('links');
    if(links.classList.contains("hide")==true)
    {
        var menu=document.getElementById('menubtn');
        menu.src='images/icon-close.svg'
        links.classList.remove("hide");
    }
    else{
        var menu=document.getElementById('menubtn');
        menu.src='images/icon-hamburger.svg'
        links.classList.add("hide");

    }
    
    
    
}
function expandLink(number)
{
    
    let links=document.getElementsByClassName("link-head");
    let inside=document.getElementsByClassName("nav-link-content");
    if(links[number].classList.contains("link-head-open")==true){
        links[number].classList.remove("link-head-open");
        inside[number].classList.remove("nav-link-content-open");
    }
    else{
        links[number].classList.add("link-head-open");
        inside[number].classList.add("nav-link-content-open");
    }
    
    for(let i=0;i<links.length;i++)
    {
        if(i!=number)
        {
            if(links[i].classList.contains("link-head-open")==true)
            {
                links[i].classList.remove("link-head-open");
            }
            if(inside[i].classList.contains("nav-link-content-open")==true)
            {
                inside[i].classList.remove("nav-link-content-open");
            }
        }
        
    }
    


}

var percent=document.getElementById("percentInside");
// percentincr();
console.log(percent.innerText);
setInterval(()=>{
    if(parseInt(percent.innerText)<100){
        
            percent.innerText=parseInt(percent.innerText)+2;

    }
        
},70);



// var target = document.querySelector('#theTarget');

// document.addEventListener('scroll', () => {
//   if (window.scrollY >= target.getBoundingClientRect().top) {
//     console.log('I have been reached');
//   }
// })
