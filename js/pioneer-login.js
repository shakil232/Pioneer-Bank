//  login eventHandler
let loginButton = document.getElementById('login').addEventListener('click', function(){
   let loginArea = document.getElementById('login-area');
   loginArea.style.display = 'none';
   let transactionArea = document.getElementById('transaction-area');
   transactionArea.style.display = 'block'
})
// Deposit eventHandler
let depositButton = document.getElementById('depositButton').addEventListener('click', function(){
   let depositAmount =document.getElementById('depositAmount').value
   let depositNumber = parseFloat(depositAmount)

   let curentDeposit = document.getElementById('curentAmount').innerText;
   let curentNumber = parseFloat(curentDeposit);
   let totalDepusit = depositNumber + curentNumber;
   
   document.getElementById('curentAmount').innerText = totalDepusit;
   document.getElementById('depositAmount').value = '';


})
