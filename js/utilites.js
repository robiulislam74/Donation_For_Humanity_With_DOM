// const donationBalance = parseFloat(document.querySelector('#donation_balance').innerText)
let myOwnAccountBalance = parseFloat(document.querySelector('#own_account_balance').innerText)
const historyContainer = document.querySelector('#history_page')
const modal = document.querySelector('#my_modal_5')

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


// Donation Calculater Here
function donationCalculating(donationBalanceId,donateAmountId,donateNames){
    let donationBalance = parseFloat(document.querySelector(donationBalanceId).innerText)
    // const donateAmount = parseFloat(document.querySelector(donateAmountId).value)
    const newDonateAmount = document.querySelector(donateAmountId).value
    const donateAmount = parseFloat(newDonateAmount)

    if(donateAmount > myOwnAccountBalance){
        alert("Warning! You have not enough money your balance.")
        document.querySelector(donateAmountId).value = ""
        return
    }
    else if(isNaN(newDonateAmount) || donateAmount <= 0){
        alert("Invalid Input! Please Try Again.")
        document.querySelector(donateAmountId).value = ""
        return
    }
    else if(newDonateAmount == ""){
        alert("Warning! Please provide a input.")
        document.querySelector(donateAmountId).value = ""
        return
    }
    else{
        modal.showModal()
        donationBalance = donationBalance + donateAmount
        document.querySelector(donationBalanceId).innerText = donationBalance

        myOwnAccountBalance = myOwnAccountBalance - donateAmount
        document.querySelector('#own_account_balance').innerText = myOwnAccountBalance
        // History Added
        const donateName = document.querySelector(donateNames).innerText
        const div = document.createElement('div')
        div.innerHTML += `
            <div class="border border-gray-200 p-8 rounded-xl space-y-4">
                <h3 class="font-bold text-lg lg:text-xl">${donateAmount} Taka is Donated for ${donateName}</h3>
                <p class="text-gray-500">Date : ${new Date()}</p>
            </div>
        `
        historyContainer.prepend(div)
        document.querySelector(donateAmountId).value = ""
    }
    
}