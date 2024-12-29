const textArea = document.querySelector('textarea');
const count =  document.getElementById('local-count');

function addAndRemoveClass(classAdd, classRemove) {
    textArea.classList.add(classAdd);
    textArea.classList.remove(classRemove);
}

document.addEventListener('input', (e) => {
    if(e.target === textArea) {
        if(textArea.value.length >= 250) {
            addAndRemoveClass('modified-focus', 'focus');
            count.classList.add('modified-text');
        } else {
            addAndRemoveClass('focus', 'modified-focus');
            count.classList.remove('modified-text');
        }
        count.innerHTML = textArea.value.length + "/250"
        console.log(textArea.value.length);
    }
})

document.addEventListener('DOMContentLoaded', () => {
    if(textArea.value.length >= 250) {
        addAndRemoveClass('modified-focus', 'focus');
        count.classList.add('modified-text');
    } else {
        addAndRemoveClass('focus', 'modified-focus');
        count.classList.remove('modified-text');
    }
    count.innerHTML = textArea.value.length + "/250"
})