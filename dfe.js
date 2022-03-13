
function animatedform()
{
    
    const arrows=document.querySelectorAll(".fa-arrow-down");
    arrows.forEach( arrow => {
        
        arrow.addEventListener("click",()=>{   
           
         const input=arrow.previousElementSibling;
         const parent=arrow.parentElement;
         const nextform=parent.nextElementSibling;
         
         if(ValidationUser(input) && input.type==="text" )
         {
            nextslide(parent,nextform);
         }
         else if(ValidationEmail(input) && input.type==="email")
         {
             nextslide(parent,nextform);
         }
         else if(input.type==="password")
         {
            nextslide(parent,nextform);
         }  
         else
         {
             parent.style.animation = "shake 0.5s ease" ;
         }
        
        });
        
    });
}
function ValidationEmail(email)
{
  const val= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (val.test(email.value))
   { return true;
     Colorer("rgb(9, 231, 58)"); }
  else 
   {
    Colorer("rgb(255,99,71)");
   } 

}

function ValidationUser(user)
{
    if (user.value.length<6)
    {
        console.log("not enouth caracters");
        Colorer("rgb(255,99,71)");
    }
    else 
    {
      Colorer("rgb(9, 231, 58)");
      return true;
    }
}

function nextslide(parent,nextform)
{
  parent.classList.add("inactive");
  nextform.classList.remove("inactive");
  nextform.classList.add("active");
}

function Colorer(coler)
{
    document.body.style.backgroundColor=coler;
}


animatedform();