// handel deposit button event 
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmmount = parseFloat(newDepositText);

    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmmount = parseFloat(previousDepositText)
    const newDepositTotal = previousDepositAmmount + newDepositAmmount;
    
    depositTotal.innerText = newDepositTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const banlanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(banlanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmmount;
    balanceTotal.innerText = newBalanceTotal;

    
    // clear deposit input field
    depositInput.value = '';
});

// handle withdrow event
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrowInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrowInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    // console.log(newWithdrawAmount);

    // set withdraw total
    const withdrawTotal = document.getElementById('withdrow-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText=balanceTotal.innerText
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    // clear withdrow input field
    withdrowInput.value = '';

    
});