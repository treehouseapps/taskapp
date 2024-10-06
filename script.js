const submit = document.getElementById('submit')
const p = document.getElementById('p')
const input = document.getElementById('name')
const ul = document.getElementById('ul')
const listArray = []

const check = () => {
    if (listArray.length == 0) {
        ul.innerHTML = `
        <div class="empty">
        <div class="empty-body">
          No Data  Found
        </div>
      </div>`
    }
}
check()
submit.addEventListener('click', () => {
    if (input.value == "" || input.value == " ") {
        input.style.border = "1px solid rgba(233, 62, 10, 0.623)"
        p.innerText = "Input can not be Empty :)"
        p.style.color = "rgba(233, 62, 10, 0.623)"
    }
    else {
        if (listArray.includes(input.value)) {
            input.style.border = "1px solid rgba(233, 62, 10, 0.623)"
            p.innerText = "Task Existed :)"
            p.style.color = "rgba(233, 62, 10, 0.623)"
        }
        else {
            p.style.color = "white";
            input.style.border = "1px solid lightgray"
            listArray.push(input.value)
            action()
        }
    }
})

function remove(id) {
    listArray.splice(id, 1)
    action()
    check()
}
function edit(id) {
    if (listArray.includes(input.value)) {
        input.style.border = "1px solid rgba(233, 62, 10, 0.623)"
        p.innerText = "Task Existed :)"
        p.style.color = "rgba(233, 62, 10, 0.623)"
    }
    else {
        input.style.border = "1px solid lightgray"
        p.style.color = "white"
        listArray[id] = input.value
        action()
    }
}
function action() {
    ul.innerHTML = ""
    listArray.forEach(item => {
        const li = document.createElement('li')
        li.className = "main"
        li.innerHTML = `
    <div class="item"> <i class="bi icon bi-bookmark-check"></i> ${item}</div>
     <div class="btnlist">
     <button class="btn btn-primary bi bi-pencil-square" onclick="edit(${listArray.indexOf(item)})"></button>
     <button class="btn btn-primary bi bi-trash" onclick="remove(${listArray.indexOf(item)})"></button></div>
     `
        ul.appendChild(li)
    })
}


