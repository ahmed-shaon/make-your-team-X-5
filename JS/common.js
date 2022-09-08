function getPlayerById(playerBtnId, playerNameId){
    let ol= document.getElementById('player-list');    
    const listLength = ol.childNodes.length;
    if(listLength>5){
        alert('You can\'t add more than five players');
        return;
    }
    let value= document.getElementById(playerNameId).innerText;
    let newTag = document.createElement('li');
    newTag.classList.add('my-3');
    newTag.innerText = value;
    ol.appendChild(newTag);
    const btnDis = document.getElementById(playerBtnId);    
    console.log(listLength);
    if(listLength-1<=5){

        btnDis.disabled = true;
        btnDis.style.backgroundColor = 'grey';
    }
    else{
        btnDis.disabled =false;        
    }
}

function getInputValueById(inputFieldId){
    const element = document.getElementById(inputFieldId);
    const valueInString = element.value;
    const value= parseInt(valueInString);
    element.value = '';
    return value;
}