let item = document.querySelector("#item");
// console.log(item)
let todoBox = document.getElementById("to-do-box")
// console.log(todoBox);




item.addEventListener("keyup",
    function (event) {
        if (event.key == "Enter") {
            addToDo(this.value)
            this.value = ""
        }
        
        

    })


function addToDo(item) {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${item}
                          <i class="fa-regular fa-circle-xmark"></i>`;

    // console.log(listItem)
    listItem.addEventListener("click",
        function(){
            listItem.classList.toggle("done");
    })

    listItem.querySelector("i").addEventListener("click",
            function(){
                listItem.remove();
            })
    todoBox.appendChild(listItem);
}












//local storage
localStorage.setItem("lastname", "Smith");
localStorage.getItem("lastname");

saveLists();
        function saveLists() {  

            let data = [];
        
            item.forEach(
                (item) => {
                    data.push(item)
                }
            )
            console.log(data)
            if (data.length === 0) {
                localStorage.removeItem("item");
            }
            else {
                localStorage.setItem("value", JSON.stringify(data))
            }
        }
