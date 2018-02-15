var userArray  = [],
    decrypted = [],
    container = document.querySelector('.container');

function scrambler() {
    userArray  = [];
    for (var i = 0; i < userSrtring.value.length; i++) {
        var scrambler = userSrtring.value.charCodeAt(i);
        userArray.push(scrambler);
    };
}

function decrypted1() {
    decrypted = [];
    for (var i = 0; i < userArray.length; i++) {
        var unicode = String.fromCharCode(userArray[i]);
        decrypted.push(unicode);
    }
}

function createElement(tag) {
    return document.createElement(tag);
}

function addClass(element,name) {
    element.className = name;
}

function insertElement(parent, el ) {
    parent.appendChild(el);
}

function addContent(el,content) {
    el.innerHTML = content;
}

encryptor.addEventListener('click', function() {
    if (userSrtring.value.length) {
        scrambler();

        var answer = createElement('div');

        addClass(answer, 'alert');

        insertElement(container, answer);

        addContent(answer,'Encrypted text : ' + userArray.join(''));
    }else {
        alert('Введите хотя бы один символ');
    }
});

decryptor.addEventListener('click', function() {
    if (userSrtring.value.length) {
        decrypted1()

        var answer = createElement('div');

        addClass(answer, 'alert');

        insertElement(container, answer);

        addContent(answer,'Decrypted text: ' + decrypted.join(''));
    }else {
        alert('Введите слово шифровки');
    }
});
