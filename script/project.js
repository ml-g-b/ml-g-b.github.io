const BASELINK=window.location.href

class Project{
    constructor(name, type, text){
        this.name=name
        const l=[]
        type.split(" ").forEach(function(e){
            l.push(e)
        })
        this.type=l
        this.href=(BASELINK.slice(-1)=="/") ? BASELINK+name : BASELINK+"/"+name;
        this.text=text
    }

    getTypes(){
        return this.type
    }

    isOfType(type){
        return this.type.includes(type)
    }

    htmlBlock(){
        const div=document.createElement("div")
        const a=document.createElement("a")
        const span=document.createElement("span")
        a.href=this.href;
        a.innerHTML="here"
        a.style.color="var(--color-sgdf)"
        span.innerHTML=this.text+": "
        span.appendChild(a)
        div.classList.add("block")
        div.appendChild(span)
        return div
    }
    htmlTable(){
        const tr=document.createElement("tr")
        const td=document.createElement("td")
        td.appendChild(this.htmlBlock())
        tr.appendChild(td)
        return tr
    }
}

const projectList=document.querySelectorAll("project")
const listOfProj=[]
const table=document.querySelector(".project-tbody")
projectList.forEach(function(e){
  if(e.getAttribute("disabled")==""){
    ;
  }
  else{
    listOfProj.push(new Project(e.getAttribute("name"),e.getAttribute("type"), e.innerHTML))
  }
  e.remove()
})

function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
}

function toggleItem(itemId) {
    var item = document.getElementById(itemId);
    item.classList.toggle("selected");
}

function sortProject() {
    const items = document.querySelectorAll(".dropdown-content a.selected")
    const selectedItems = []
    items.forEach(function (i) {
        selectedItems.push(i.getAttribute("value"))
    })
    table.innerHTML = ""
    console.log(selectedItems)
    listOfProj.forEach(function (p) {
        var display = (items.length==0)
        selectedItems.forEach(function (si) {
            display |= p.isOfType(si)
        })
        if (display) {
            table.appendChild(p.htmlTable())
        }
        console.log(p)
    })
}