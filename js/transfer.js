document.getElementById('send-money-btn').addEventListener('click', function () {
    const accountNumber = getValueFormInput('account-number');
    if (accountNumber.length !== 11) {
        alert('invalid number');
        return;
    }

    const sendmoneyAmount = getValueFormInput('send-money-amount');

    // const correctBalance = getBalance();
    // const newBalance = correctBalance - Number(sendmoneyAmount);

    const sendMoney = getBalance();
    const newBalance = sendMoney - Number(sendmoneyAmount)
    console.log(newBalance);
    if (newBalance < 0) {
        alert('invalid amount');
        return;
    }

    const sendMoneyPin = getValueFormInput('send-money-pin');
    if (sendMoneyPin === '1234') {
        alert('Transfer Money Success')
        setBalance(newBalance);

        const history = document.getElementById('history')
        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
        <div class="p-5 bg-base-100 m-5">Transfer money${sendmoneyAmount} taka success to ${accountNumber} at ${new Date()} 
        </div>
        `;
        history.append(newHistory);
    } else {
        alert('invalid Pin');
        return;
    }
})