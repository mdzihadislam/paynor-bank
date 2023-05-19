//  yow work this system---------------
//  document.getElementById("login").addEventListener("click",function(){
//     var submit=document.querySelector(".submit-area");
//     submit.style.display="none";
//     var again=document.querySelector("#transaction-area");
//     again.style.display="block"
//  })
//  const depositBtn=document.getElementById("addDeposit");
//  depositBtn.addEventListener("click",function(){
//   const depositAmount=document.getElementById("depositAmount").value;
//   const depositNumber=parseFloat(depositAmount);
  
//   const currentDeposit=document.getElementById("currentDeposit").innerText;
//   const currentDepositNumber=parseFloat(currentDeposit);
//   const totalDeposit=depositNumber + currentDepositNumber;
//   document.getElementById("currentDeposit").innerHTML=totalDeposit;
 
//   const currentBalance=document.getElementById("currentBalance").innerText;
//   const currentBalanceNumber=parseFloat(currentBalance)
//   const totalBalance=depositNumber + currentBalanceNumber;
//   document.getElementById("currentBalance").innerText=totalBalance;

//   document.getElementById("depositAmount").value="";
//  })
// //  
/*-----------new style _*/
//login button event handler
 document.getElementById("login").addEventListener("click",function(){
   var submit=document.querySelector(".submit-area");
   submit.style.display="none";
   var again=document.querySelector("#transaction-area");
   again.style.display="block"
})
//deposit button event handler
const depositBtn=document.getElementById("addDeposit");
depositBtn.addEventListener("click",function(){
 const depositAmount=document.getElementById("depositAmount").value;
 const depositNumber=parseFloat(depositAmount); 

updateSpanText("currentDeposit",depositNumber)
updateSpanText("currentBalance",depositNumber);

 document.getElementById("depositAmount").value="";
})
//withdraw button event handler
const withdrawBtn=document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click",function(){
 const withdrawNumber=getInputNumber("withdrawAmount")
 updateSpanText("currentWithdraw",withdrawNumber);
 updateSpanText("currentBalance", -1 * withdrawNumber);
 document.getElementById("withdrawAmount").value="";
})
function getInputNumber(id){
   const  amount=document.getElementById(id).value;
   const amountNumber=parseFloat(amount);
   return amountNumber
}
//withdraw button event handler
function updateSpanText(id,depositNumber){
   const current=document.getElementById(id).innerText;
   const currentNumber=parseFloat(current)
   const total=depositNumber + currentNumber;
   document.getElementById(id).innerText=total;
  
}