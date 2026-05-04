// agr navigate kr ke p tag me jate ho or waha 2 <p> tag h to ye code se 1st <p> tag wala select hoga
document.querySelector("p");
console.log(el.innerText);

// agr all <p> tag ko select krna h tab 
document.querySelector("p");

// agr ye <P> tag kiske ander h or outer me kon sa html uske liye
document.querySelector("p").outerHTML

// agr pta krna h ye <p> tag kis ke andr h mtlab kis tag ke andr h 
document.querySelector("p").tagName

// agr kisi class container ke andr ka kitne bhi class ho uske text ko dekhna h tab
document.querySelector(".container").textContent

// agr koi bhi html ke andr class me ja kr kuch change krna h jaise text ko hi tab
document.querySelector("box").innerHTML = "Hey i am box"

// agr kisi bhi line me koi attribute h ya nhi wo check krna ho tab - True or False ke term me batayega..
document.querySelector("p").hasAttribute("style")

// agr attribute h or kon sa attribute h wo pta krna h tab ye use kre..
document.querySelector("p").getAttribute("style")

// agr jo attribute ke andr properties laga h usko change krna h tab ye use krna h..
document.querySelector("p").setAttribute("style", "display: inline")

// agr koi bhi tag ka style ya koi sa bhi attribute remove krna h tab ye use hoga..
document.querySelector("p").removeAttribute("style")

// agr apne koi sa bhi website me ja kr console me ye likha to aap waha us website me ja kr content change kr skte h ..
document.designMode = "on"

// agr hme kuch remove krna h tab ye use krna h ..
document.querySelector("box").remove()

// agr hme class ka list dekhna h by the help of queryselector tab ye use krna h ..
document.querySelector(".container").classList

// agr hme kisi bhi class ke name ko janana h tab..
document.querySelector(".container").className

// agr hme koi ek main div wala class ke andr koi or class create krna h tab ye use krenge ..
document.querySelector(".container").classList.add("btn")

// agr hme ek main class ke andr se kuch perticular class ko remove krna h tab ye use krenge ..
document.querySelector(".container").classList.remove("btn")

// agr koi class active h hm chahte h wo inactive ho ya keh skte ki on h to off krdo off h to on kr do to wo iske help se hota h ..
document.querySelector(".container").classList.toggle("box")
