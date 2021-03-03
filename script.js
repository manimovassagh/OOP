
const buttons=document.getElementById('one')
const button2=document.getElementById('two')
const button3=document.getElementById('three')
const screen =document.getElementById('screen')
const numberStorage=[]
const buttonsAll=document.querySelectorAll(".btn")

const ListenToMe=document.addEventListener('click',(e)=>{
    screen.innerHTML=e.target.value
   return (e.target.value
    ) 
})



// const listener=buttons.addEventListener('click',(e)=>{
// screen.innerHTML=e.target.value
// }); 
// const listenerTwo=button2.addEventListener('click',(e)=>{
//     screen.innerHTML=e.target.value
// }); 

// const listener3=button3.addEventListener('click',(e)=>{
//     screen.innerHTML=e.target.value
// }); 

