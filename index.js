let task = document.getElementById("work");
let ullist = document.getElementById("listItem");

function addwork() {
  if (task.value.length > 0) {
    let list = document.createElement("li");
    let listDesc = document.createElement("span");
    let done = document.createElement("button");
    let del = document.createElement("button");

    //create classes
    listDesc.classList.add("listDesc");
    listDesc.innerText = task.value;
    done.classList.add("done");
    done.innerText = "DONE";
    del.classList.add("del");
    del.innerText = "DEL";

    //add list one by one
    list.appendChild(listDesc);
    list.appendChild(done);
    list.appendChild(del);
    ullist.appendChild(list);

    //done button function
    done.addEventListener("click", function () {
      listDesc.style.color = "yellow";
      listDesc.style.textDecorationLine = "line-through";
    });

    //del button fuction
    del.addEventListener("click", function () {
      ullist.removeChild(list);
    });

    task.value = "";
  }
}
