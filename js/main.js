let form      = document.querySelector("#libform");
let noun      = document.querySelector("#noun");
let adjective = document.querySelector("#adjective");
let person    = document.querySelector("#person");
let verb      = document.querySelector("#verb");
let place     = document.querySelector("#place");
let button    = document.querySelector("#lib-button");
let storyArea = document.querySelector("#story");
let buttonSh  = document.querySelector("#suffle");
let story     = "";
let count     = 0;

button.addEventListener("click",fieldVerification,event)


buttonSh.addEventListener("click",shuffle,event);

function isEmpty(field) {
    return  !!field.value  ? false : true ;
}


function fieldVerification(event) {

    event.preventDefault();

    if(!isEmpty(noun) && !isEmpty(adjective) && !isEmpty(person) && !isEmpty(verb) && !isEmpty(place)) {
        storyArea.innerText = generateString(); 
    }else{
        alert("kindly fill all requested field");
    }   

}

function generateString() {
    return story =  `${noun.value} ${adjective.value}  ${person.value} ${verb.value} ${place.value}`;
}


function shuffle(event) {
    event.preventDefault();
   
    if(count < 3  ) 
        storyArea.innerText  = story.split('').sort(function(){return 0.5-Math.random()}).join('');
    
    return count = count + 1 ;
}