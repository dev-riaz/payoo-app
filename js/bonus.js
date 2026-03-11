document.getElementById('bonus-coupon-btn').addEventListener('click', function () {
    const balance = getBalance();
    const newBalance = balance + 500;

    const bonusCoupon = getValueFormInput('bonus-coupon');
    if (bonusCoupon === 'abcd1234') {
        alert('Bonus Amount Added');
        setBalance(newBalance);

        const history = document.getElementById('transaction-container')
        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
         <div class="transaction-card p-5 bg-base-100">
          500 taka added success form Bonus Coupon at ${new Date()}
         </div>
        `;
        history.append(newHistory)

    } else {
        alert('invalid Bonus coupon');
        return;
    }

})
