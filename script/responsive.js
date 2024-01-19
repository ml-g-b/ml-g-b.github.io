    const languages=document.querySelectorAll("language")
    const techno=document.querySelector("#technologies")
    languages.forEach(function(element){
      var icon=document.createElement("img")
      const lang=element.getAttribute("type")
      icon.src="../logo/"+lang+".svg"
      icon.alt=lang+" programming language icon"
      icon.title=lang
      element.remove()
      techno.after(icon)
    })
