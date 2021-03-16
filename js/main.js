window.onload = function() {

    let root = document.getElementById('root');

    let test = new divElement('testID', 'testClass');
    test.setText('afterbegin', "hello, world!");

    root.appendChild(test.element);
}
