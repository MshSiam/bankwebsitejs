// // // deposite button event // // //

document.getElementById('deposite-button').addEventListener('click', function(){
    // get the amount deposite
    const depositeInput = document.getElementById('deposite-input')
    const newDepositeAmountText = depositeInput.value 
    const newDepositeAmount = parseFloat(newDepositeAmountText)

    const depTotal = document.getElementById('deposite-total')
    const previousDepositeAmountText = depTotal.innerText
    const previousDepositeAmount = parseFloat(previousDepositeAmountText)



    const newDepTotal = previousDepositeAmount + newDepositeAmount 

    depTotal.innerText =  newDepTotal


    

    // update total balance

    const balanceTotal = document.getElementById('balance-total')
    // console.log('jj')

    const balanceTotalText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(balanceTotalText)
    console.log(balanceTotalText)

    const newBalanceTotal = previousBalanceTotal + newDepositeAmount
    // console.log(newBalanceTotal)

    balanceTotal.innerText = newBalanceTotal



    // clear the deposite input value

    depositeInput.value = ''

})


// // // Withdraw button event /// // // //

document.getElementById('withdraw-button').addEventListener('click', function(){
    

    const widrawInpute = document.getElementById('withdraw-input')
    const withdrawAmountText = widrawInpute.value
    
    const newWithdrawAmount = parseFloat(withdrawAmountText) 


    // set withdraw total 

    const withdrawTotal = document.getElementById('withdraw-total')
    const previousWithDrawTotalText = withdrawTotal.innerText

    const previousWithDrawTotal = parseFloat(previousWithDrawTotalText)

    const newWithdrawTotal = previousWithDrawTotal + newWithdrawAmount

    withdrawTotal.innerText = newWithdrawTotal


    // clear withdrw input
    
    widrawInpute.value = ''



    // update balance total

    const balanceTotal = document.getElementById('balance-total')

    const previousBalanceTotalText = balanceTotal.innerText

    const previousBalanceTotal = parseFloat(previousBalanceTotalText)

    const newBalanceTotal = previousBalanceTotal - newWithdrawTotal

    balanceTotal.innerText = newBalanceTotal

})