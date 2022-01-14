//for changing time
const time = document.querySelector('.time-text');

//for the input of number
const inputSection = document.querySelector('#input-value');
const backspace = document.getElementById('del');
const call = document.querySelectorAll('.call-button');



  //keys
const keys = document.querySelectorAll('.key');
    //del key
    backspace.addEventListener('click',()=>keyPressed('del'));
    //call key
    call.forEach((button) =>{
      button.addEventListener('click',()=>keyPressed('call'));
    })

//add a event listne

keys.forEach((key)=>{
  key.addEventListener('click',()=>keyPressed(key.childNodes[1].textContent));
})
// keys[i].textContent()
let isCalling = false;
function keyPressed(key)
{
   
  
  console.log(inputSection.value)
   switch(key)
   {
     case 'call':
       isCalling = true;
       inputSection.value = 'calling...';
       const timeout = setTimeout(()=>{
         inputSection.value = 'No Answer'
         setTimeout(()=>{inputSection.value =''
         isCalling= false;

        },2000)
       },2000);
       break;
      case 'del':
        if(!isCalling)
        {
          let val = inputSection.value;
          inputSection.value = val.substring(0,val.length-1);
        }
        break;
      default:
        if(!isCalling)
        {
          inputSection.value +=key;

        }
        // let val = inputSection.value;
        break;
   }
}
