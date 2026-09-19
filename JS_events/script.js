let button = document.getElementById("btn")

// ye MDN h yaha events ke bare me bahut kuch knowledge milega ..
// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events


// ye double click pr kaam krta h
button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
})


// ye right click pr kaam krta h
button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by Right click Please")
})


// ye keyword press pr work krta h 
document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
})


// jis tarah se addEventListener hota h event ko fired krne ke liye waise hi rmove ke liye bhi hota h,
// removeEventListener( ) isse remove ho jata h event