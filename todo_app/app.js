var ul = document.querySelector('#list'),
    removeAll = document.querySelector('#removeAll'),
    add = document.querySelector('#add')

    add.onclick = () => {
        addLi(ul);
    };

function addLi(targetUl) {
    var inputText = document.querySelector('#text').value,
        li = document.createElement('li'),
        textNode = document.createTextNode(inputText + ' '),
        removeButton = document.createElement('button');
    //document.querySelector('#text').value = '';

    if (inputText.split(' ').join('').length === 0) {
        alert('no input');
        return false;
    }

    removeButton.className = 'removeMe';
    removeButton.innerHTML =' DONE!';
    removeButton.setAttribute('onclick', 'removeMe(this);');

    li.appendChild(textNode);
    li.appendChild(removeButton);

    targetUl.appendChild(li);
}

function removeMe(item) {
    var parent = item.parentElement;
    parent.parentElement.removeChild(parent);
}

removeAll.onclick = function(){
    ul.innerHTML = '';
};