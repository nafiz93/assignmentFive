
alertsystem('call-btn', '.service-name', '.service-number', 'call-balance', '.card', 'history')
plusminus('heart-icon', 'heart-total', true, true)
plusminus('copy-btn', 'copy-balance', true, true)
plusminus('call-btn', 'call-balance', false, false)
// append('.call-btn', '.card', 'history', '.service-name', '.service-number')

document.getElementById("clear").addEventListener("click", () => {
    document.getElementById("history").innerHTML = "";
});


document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        let card = btn.closest('.card');

        //let name = card.querySelector('.service-name');
        let number = card.querySelector('.service-number');
        navigator.clipboard.writeText(number.innerText);
        alert("Copied: " + number.innerText);
    });
});
