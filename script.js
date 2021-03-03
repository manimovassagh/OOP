
const buttons=document.getElementById('one')
const button2=document.getElementById('two')
const button3=document.getElementById('three')
const screen =document.getElementById('screen')
console.log(screen);

const buttonsAll=document.querySelectorAll(".btn")
console.log(buttonsAll.values);

const listener=buttons.addEventListener('click',(e)=>{
screen.innerHTML=e.target.value
}); 
const listenerTwo=button2.addEventListener('click',(e)=>{
    screen.innerHTML=e.target.value
}); 

const listener3=button3.addEventListener('click',(e)=>{
    screen.innerHTML=e.target.value
}); 

