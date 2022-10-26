const nav = document.querySelector('.sidebar')
fetch('/NavigationBar/navigationbar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML = data
})
