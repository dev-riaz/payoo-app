document.getElementById('addmoney-btn').addEventListener('click', function () {
    const bankAccount = getValueFormInput('add-money-bank');
    // console.log(bankAccount);

    if (bankAccount === 'Select back') {
        alert('please select bank');
        return;
    }

    const bankNumber = getValueFormInput('bank-number');
    if (bankNumber.length !== 11) {
        alert('invalid number');
        return;
    }

    const bankBalance = getValueFormInput('addmoney-amount');
    const newBalance = getBalance() + Number(bankBalance)
    // console.log(newBalance);
    const pin = getValueFormInput('addmoney-pin')
    if (pin === '1234') {
        alert(`Add money success From ${bankAccount} at ${new Date()}`)
        setBalance(newBalance);

        //1 history container k dhore nia asbo
        //2 new div create korbo
        //3 new div a inner html add korbo
        //4 history container a newdive k append korbo

        const history = document.getElementById('transaction-container')
        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
         <div class="transaction-card p-5 bg-base-100">
         Add money success From ${bankAccount} acc no ${bankNumber} at ${new Date()}
         </div>
        `;
        history.append(newHistory)
    } else {
        alert('invalid Pin number')
        return;
    }

});

