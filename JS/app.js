

document.getElementById('btn-1').addEventListener('click', function(){

    getPlayerById('btn-1','player-name1') ;
})
document.getElementById('btn-2').addEventListener('click', function(){

    getPlayerById('btn-2','player-name2') ;   
})
document.getElementById('btn-3').addEventListener('click', function(){

    getPlayerById('btn-3','player-name3') ;   
})
document.getElementById('btn-4').addEventListener('click', function(){

    getPlayerById('btn-4','player-name4') ;   
})
document.getElementById('btn-5').addEventListener('click', function(){

    getPlayerById('btn-5','player-name5') ;   
})
document.getElementById('btn-6').addEventListener('click', function(){

    getPlayerById('btn-6','player-name6') ;   
})
document.getElementById('btn-7').addEventListener('click', function(){

    getPlayerById('btn-7','player-name7') ;   
})
document.getElementById('btn-8').addEventListener('click', function(){

    getPlayerById('btn-8','player-name8') ;   
})
document.getElementById('btn-9').addEventListener('click', function(){

    getPlayerById('btn-9','player-name9') ;   
})
document.getElementById('btn-10').addEventListener('click', function(){

    getPlayerById('btn-10','player-name10') ;   
})
document.getElementById('btn-11').addEventListener('click', function(){

    getPlayerById('btn-11','player-name11') ;   
})
document.getElementById('btn-12').addEventListener('click', function(){

    getPlayerById('btn-12','player-name12') ;   
})

document.getElementById('calculate-btn').addEventListener('click', function(){
    const perPlayerBudgetAmount = getInputValueById('per-player-budget');    

    let ol= document.getElementById('player-list');    
    const listLength = ol.childNodes.length;
    console.log(listLength);

    if(isNaN(perPlayerBudgetAmount) === false && perPlayerBudgetAmount>0 && listLength > 1){

        const totalPlayerExpenses = perPlayerBudgetAmount * (listLength -1);    
        const playerExpenseElement =document.getElementById('player-expenses');    
        playerExpenseElement.innerText = totalPlayerExpenses;
    }
    else{
        alert('Please Add player on your player list or Enter valid input');
    }

})

document.getElementById('calculate-total-btn').addEventListener('click', function(){
    const managerCoast =getInputValueById('manager-coast');
    const coachCoast = getInputValueById('coach-coast');

    const playerExpensesString = document.getElementById('player-expenses').innerText;
    const playerExpenses = parseInt(playerExpensesString);

    if(isNaN(managerCoast) === false && isNaN(coachCoast) === false && managerCoast>0 && coachCoast>0 && playerExpenses>0){
        const totalExpenses = managerCoast + coachCoast + playerExpenses;

        const totalExpensesElement = document.getElementById('total-expense');
        totalExpensesElement.innerText = totalExpenses;
    }
    else{
        alert('Invalid input');
    }
})