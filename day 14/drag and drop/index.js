const items = document.querySelectorAll(".box");
const containers = document.querySelectorAll(".containers");

items.forEach(item =>{
  item.addEventListener("dragstart", function(){
    item.classList.add("dragging");
    // console.log("start");
  })
  item.addEventListener("dragend", function(){
    item.classList.remove("dragging")
    // console.log("end");
  })

})

containers.forEach(box => {
    box.addEventListener("dragover", function(e){
        e.preventDefault()
        let selected = document.querySelector(".dragging");
        box.appendChild(selected);
    })
})

