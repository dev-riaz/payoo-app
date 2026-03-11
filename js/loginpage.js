document.getElementById('login-btn').addEventListener('click', function () {
    const inputNumber = document.getElementById('input-number');
    const inputValue = inputNumber.value;

    const inputPin = document.getElementById('input-pin');
    const inputPinValue = inputPin.value;

    if (inputValue === '01312121212' && inputPinValue === '1234') {
        alert('login Successful');
        window.location.assign("./home.html")
    } else {
        alert('login Failed');
        return;
    }

})