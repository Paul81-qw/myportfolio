var togglebtn = document.querySelector(".togglebtn")
       var nav = document.querySelector(".navlinks")
       var links = document.querySelector(".navlinks li")

       togglebtn.addEventListener("Click", function(){
        this.classList.toggle("click")
        nav.classList.toggle("open")
       })

       var typed=new Typed(".input", {
        strings:["Full-stack Web Developer", "UX designer", "Web Developer"],
        typedSpeed:70,
        backSpeed: 55,
        loop:true,
       }) 