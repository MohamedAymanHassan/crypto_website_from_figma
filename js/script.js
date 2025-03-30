let exchangeBtn = document.getElementById('exchange');
let spended = document.getElementById('spended');
let received = document.getElementById('received');
let isToggled = false;

exchangeBtn.addEventListener('click', function() {
    if (isToggled) {
        revertAction();
    } else {
        performAction();
    }
    isToggled = !isToggled;
});

function performAction() {
    spended.innerHTML = `
        <p id="p">I Will Receive</p>
        <input type="text" placeholder="I Will Receive">
    `;
    received.innerHTML = `
        <p id="p">I Will Spend</p>
        <input type="text" placeholder="I Will Spend">
    `;
}

function revertAction() {
    spended.innerHTML = `
        <p id="p">I Will Spend</p>
        <input type="text" placeholder="I Will Receive">
    `;
    received.innerHTML = `
        <p id="p">I Will Receive</p>
        <input type="text" placeholder="I Will Spend">
    `;
}


