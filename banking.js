// deposite button event
document.getElementById('deposite-button').addEventListener('click', function(){
    // get the amount deposite
    const depositeInput = document.getElementById('deposite-input')
    const depositeAmount = depositeInput.value

    const depTotal = document.getElementById('deposite-total')

    depTotal.innerText =  depositeAmount

    // clear the deposite input value

    depositeInput.value = 0
    
})