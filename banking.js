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

    depositeInput.value = 0

})


