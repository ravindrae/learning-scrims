let count = 0
let countEl = document.getElementById('count-el')
let prevEntriesEl = document.getElementById('prev-entries')

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    prevEntriesEl.textContent += " " + count + ' -'
    count = 0
    countEl.textContent = count
}