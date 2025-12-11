let form = document.querySelector('form');
form.addEventListener('submit', add);

function add(e) {
    e.preventDefault()
    let input = document.querySelector('input');
    if (input.value === "") {
        alert('Zehmet olmasa melumat daxil edin');
        return;
    }
    let cerateLi = document.createElement('li');
    cerateLi.textContent = input.value;
    cerateLi.classList.add('list-group-item');
    let listGroup = document.querySelector('.list-group');
    listGroup.appendChild(cerateLi);
    input.value = "";
}

let firstImage = document.querySelector('.first-box');
let smallImages = document.querySelectorAll('.second-box');

smallImages.forEach(item => {
    item.addEventListener('mouseover', function() {
        firstImage.src = this.src;
    });
});