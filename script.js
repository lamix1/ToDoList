function addTask() {
    const newTask = document.getElementsByClassName('new-task')[0].value
    if (newTask === '') { return }
    const $ul = document.getElementsByTagName('ul')[0]
    const $li = document.createElement('li')
    const $div = document.createElement('div')
    $div.className += 'checkbox'
    const $label = document.createElement('label')
    const $input = document.createElement('input')
    $input.className += 'task-item'
    $input.setAttribute('type', 'checkbox')
    $input.setAttribute('name', 'tarefa')
    $input.addEventListener('click', toggleRemoved)
    $label.appendChild($input)
    $label.appendChild(document.createTextNode(newTask))
    $div.appendChild($label)
    $li.appendChild($div)
    $ul.appendChild($li)
    document.getElementsByClassName('new-task')[0].value = '' 
}

function toggleRemoved(e) {
    const $li = e.currentTarget.closest('li')
    $li.classList.toggle('removed')
}

document.getElementsByClassName('add-task')[0].addEventListener9('click', addTask)

const tasks = document.getElementsByClassName('task-item')
Array.from(tasks).forEach(task => task.addEventListener('click', toggleRemoved))