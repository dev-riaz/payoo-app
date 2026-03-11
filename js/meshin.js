function getValueFormInput(id) {
    const Input = document.getElementById(id);
    const value = Input.value;
    return value;
}
function getBalance() {
    const correctBalance = document.getElementById('balance');
    const balance = correctBalance.innerText;
    console.log('corent balance', Number(balance));
    return Number(balance);

}
function setBalance(value) {
    const correctBalance = document.getElementById('balance');
    correctBalance.innerText = value;
}

function showOnly(id) {
    const addMoney = document.getElementById('add-money');
    const cashout = document.getElementById('cash-out');
    const history = document.getElementById('history');
    const transferMoney = document.getElementById('transfer-money');
    // console.log(`add mony ${addMoney},cashout ${cashout}`);
    // sobaike hide kore dew
    addMoney.classList.add('hidden')
    cashout.classList.add('hidden');
    history.classList.add('hidden')
    transferMoney.classList.add('hidden')

    // id oala element ta k show koro
    const selected=document.getElementById(id);
    selected.classList.remove('hidden');

}