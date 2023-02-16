document.getElementById("btn-deposit").addEventListener('click', function () {
    const dipositField = document.getElementById("deposit-field")
    const newDepositAmountString = dipositField.value
    const newDepositAmount = parseFloat(newDepositAmountString)


    const depositTotalElement = document.getElementById('deposit-total')
    const previousDepositTotalSring = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalSring)
    const newDepositTotal = previousDepositTotal + newDepositAmount
    depositTotalElement.innerText = newDepositTotal



    const balanceTotalElement = document.getElementById("balance-total")
    const previousBlanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBlanceTotalString)

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal

    dipositField.value = ''



})