
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
                // alert(`Calling ${Name} ${Number}`)
                alert(`📞 Calling ${Name} (${Number})`);

                append(parentDiv, Name, Number)
            }

            else {
                alert(`❌📞 Sorry, you don’t have enough balance to make the call.`);

            }
        });
    });
}



function append(parentDiv, namee, number) {

    let parent = document.getElementById(parentDiv);
    let serviceName = namee;
    let serviceNumber = number;
    let dynamicP = document.createElement('div');
    dynamicP.classList.add('call-record')
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    dynamicP.innerHTML = `  
    <div>
      <h1>${serviceName}</h1>
       <p>${serviceNumber}</p>
     </div>
               <div>
                <p>${time} </P>
               </div>`;

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

let toggle = null;
function hideandseek(id1, id2) {

    let eventbutton = document.getElementById(id1);

    eventbutton.addEventListener('click', function () {
        let element = document.getElementById(id2);


        if (toggle && toggle == element) {
            element.classList.add('block');

        }


        if (toggle && toggle != element) {
            toggle.classList.add('hidden')
        }
        element.classList.remove('hidden');

        toggle = element;

    })
}