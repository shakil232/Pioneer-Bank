//  login eventHandler
let loginButton = document.getElementById('login').addEventListener('click', function(){
   let loginArea = document.getElementById('login-area');
   loginArea.style.display = 'none';
   let transactionArea = document.getElementById('transaction-area');
   transactionArea.style.display = 'block'
})
// Deposit eventHandler
let depositButton = document.getElementById('depositButton').addEventListener('click', function(){
   // let depositAmount =document.getElementById('depositAmount').value
   // let depositNumber = parseFloat(depositAmount)
   let depositNumber = inputNumber('depositAmount')

   updateSpanText('currentBlance', depositNumber);
   updateSpanText('curentAmount', depositNumber);

  document.getElementById('depositAmount').value = '';
})

// WithdrawButton eventHandler
let WithdrawButton = document.getElementById('withdrawButton').addEventListener('click', function(){
   withdrawNumber =  inputNumber('withdrawAmount');
   updateSpanText('correntWithdraw',withdrawNumber)
   updateSpanText('currentBlance', -1* withdrawNumber);

   document.getElementById('withdrawAmount').value = '';
})

function inputNumber (id){
   const Amount = document.getElementById(id).value;
   const AmountNumber = parseFloat(Amount);
   return AmountNumber;
}

// updateSpanText
function updateSpanText(id,depositNumber){
   let current = document.getElementById(id).innerText;
   let currentNumber = parseFloat(current);
   let totalAmount = depositNumber + currentNumber;   
   document.getElementById(id).innerText = totalAmount;


}

  
