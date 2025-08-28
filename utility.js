
function alertsystem(buttonClass, serviceName, serviceNumber, balanceId, targetDiv, parentDiv) {
    document.querySelectorAll("." + buttonClass).forEach(button => {
        button.addEventListener("click", function () {
            let balance = document.getElementById(balanceId);
            let parsedBalance = parseFloat(balance.innerText);
            if (parsedBalance > 0) {
                let card = button.closest(targetDiv);

                let nameEl = card.querySelector(serviceName);
                let numberEl = card.querySelector(serviceNumber);


                let Name = nameEl.innerText;
                let Number = numberEl.innerText;
                alert(`Calling ${Name} ${Number}`)
                append(parentDiv, Name, Number)
            }

            else {
                alert(`sorry you dont have sufficient balance to make the call`)
            }
        });
    });
}



function append(parentDiv, namee, number) {

    let parent = document.getElementById(parentDiv);
    let serviceName = namee;
    let serviceNumber = number;
    let dynamicP = document.createElement('p');
    dynamicP.classList.add('call-record')
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    dynamicP.innerHTML = `${serviceName} -- ${serviceNumber} ${time}`;

    parent.appendChild(dynamicP);

}






function plusminus(buttonClass, balanceId, isAdd, isHeartOrCopy) {
    if (isAdd === true && isHeartOrCopy === true) {
        document.querySelectorAll("." + buttonClass).forEach(button => {
            button.addEventListener("click", function () {
                let balance = document.getElementById(balanceId);
                let parsedBalance = parseFloat(balance.innerText);
                parsedBalance = parsedBalance + 1;
                balance.textContent = parsedBalance;
            });
        });
    }
    if (isAdd === false && isHeartOrCopy == false) {
        document.querySelectorAll("." + buttonClass).forEach(button => {
            button.addEventListener("click", function () {
                let balance = document.getElementById(balanceId);
                let parsedBalance = parseFloat(balance.innerText);
                if (parsedBalance >= 20) {
                    parsedBalance = parsedBalance - 20;
                    balance.innerText = parsedBalance;
                }
                else {
                    balance.innerText = 0;
                }
            });
        });
    }
}

