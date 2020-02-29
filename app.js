let i = 0;
let anotherI = 'Just Another Variable';
function hello(name) {
    let phrase = `Hello, ${name}!`;
    debugger; // <-- the debugger stops here
    say(phrase);
    }
function say(m){
    alert(m)
}