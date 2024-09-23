// const donationBalance = parseFloat(document.querySelector('#donation_balance').innerText)
 let myOwnAccountBalance = parseFloat(document.querySelector('#own_account_balance').innerText)


function pageChangingFunction(id){
    document.querySelector('#history_page').classList.add('hidden')
    document.querySelector('#donation_page').classList.add('hidden')

    document.querySelector(id).classList.remove('hidden')
}

// button Active Change
function buttonActiveColorChange(id){
    document.querySelector('#history_page_btn').classList.remove('bg-primaryColor')
    document.querySelector('#donation_page_btn').classList.remove('bg-primaryColor')
    document.querySelector(id).classList.add('bg-primaryColor')
}

function donationCalculating(donationBalanceId,donateAmountId){
    let donationBalance = parseFloat(document.querySelector(donationBalanceId).innerText)
    const donateAmount = parseFloat(document.querySelector(donateAmountId).value)
    donationBalance = donationBalance + donateAmount
    document.querySelector(donationBalanceId).innerText = donationBalance

    myOwnAccountBalance = myOwnAccountBalance - donateAmount
    document.querySelector('#own_account_balance').innerText = myOwnAccountBalance
}