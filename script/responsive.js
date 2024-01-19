    const languages=document.querySelectorAll("language")
    const techno=document.querySelector("#technologies")
    var container=document.createElement("div")
    container.classList.add("horizontal-list")
    languages.forEach(function(element){
      let icon=document.createElement("img")
      const lang=element.getAttribute("type")
      icon.src="../logo/"+lang+".svg"
      icon.alt=lang+" programming language icon"
      icon.title=lang
      icon.classList.add("prog_lang")
      element.remove()
      container.appendChild(icon)
    })
    techno.after(container)
