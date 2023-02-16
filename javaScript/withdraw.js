document.getElementById('btn-withdraw').addEventListener("click", function () {

    const withdrawField = document.getElementById("withdraw-field")
    const newWitdrawFeildString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWitdrawFeildString)


    const withdrawTotalElement = document.getElementById('withdraw-total')
    const previousWithdrawTotalSring = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalSring)

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount
    withdrawTotalElement.innerText = newWithdrawTotal

    const balanceElement = document.getElementById("balance-total")
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalnaceTotal = parseFloat(previousBalanceTotalString)
    const currentBalance = previousBalnaceTotal - newWithdrawAmount
    balanceElement.innerText = currentBalance
    withdrawField.value = ''
})