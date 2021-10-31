// Module Pattern - The Javascript module pattern enables the implementation of the closure principle 
//        providing the control of privacy in your methods so that third party applications or 
//        modules cannot access data in variables or overwrite it.

// Closers - A closure is the combination of a function and the lexical environment within which that function was declared.

// Basic structure - module pattern uses IIFE (immediately invoked function expression)
/* syntax of IIFE -

(function() { /* do something here * })();
*//* or------>

(function() {
    // declare private vars and functions

    return {
        // declare public var and functions
    }
})();
*/

const UIctrl = (function() {
    let text = 'Hello World';

    const changeText = function() {
        const element = document.querySelector('h1');
        element.textContent = text;
    }

    return {
        callChangeText: function() {
            changeText();
            console.log(text);
        }
    };
})();

UIctrl.callChangeText();

// Revealing module pattern - the difference is in return section
const itemCtrl = (function() {
    let data = [];

    function add(item) {
        data.push(item);
        console.log('item added........');
    }

    function get(id) {
        return data.find((item) => item.id === id);
    }

    return {
        addValue: add,
        getValue: get
    };
})();

itemCtrl.addValue({id: 1, name: 'ranjan'});
itemCtrl.getValue(1);