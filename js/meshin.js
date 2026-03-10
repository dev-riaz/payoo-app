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