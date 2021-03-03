
const buttons=document.getElementById('one')
const button2=document.getElementById('two')
const screen =document.getElementById('screen')
console.log(screen);

const listener=buttons.addEventListener('click',(e)=>{
screen.innerHTML=e.target.value
}); 
const listenerTwo=button2.addEventListener('click',(e)=>{
    screen.innerHTML=e.target.value
}); 

