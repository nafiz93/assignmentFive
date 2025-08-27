
function alertsystem(buttonClass, serviceName, serviceNumber, balanceId) {
    document.querySelectorAll("." + buttonClass).forEach(button => {
        button.addEventListener("click", function () {
            let balance = document.getElementById(balanceId);
            let parsedBalance = parseFloat(balance.innerText);
            if (parsedBalance > 0) {
                let service = document.getElementById(serviceName);
                let number = document.getElementById(serviceNumber);
                alert(`Calling ${service.innerText} ${number.innerText}`)
            }

            else {
                alert(`sorry you dont have sufficient balance to make the call`)
            }
        });
    });
}


function append(parentId, serviceName, serviceNumber) {
    let service = document.getElementById(serviceName);
    let number = document.getElementById(serviceNumber);
    let parent = document.getElementById(parentId);
    let p = document.createElement('p');
    p.innerHTML = ` ${service.innerText} ${number.innerText}`;
    parent.appendChild(p);


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

