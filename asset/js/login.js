

 function validateform() { 
     let id=document.getElementById("id").value;
     let password=document.getElementById("pw").value;
     console.log(id,password);

     
        
         switch(id)
         {
             case "royal250": if(password=="Lb14Xyd!"){
                 
                window.location = "https://student.learnbasics.fun/";
             }
             
             case "t-royal30": if(password=="Lbvse@15"){
                  
                 window.location = "https://staff.learnbasics.fun/";
             }
             return;
             case "t-royal1": if(password=="Lbafs32!"){
                  
                
                window.location = "https://school.learnbasics.fun/";
             }
             return;
             default : var element = document.getElementById("invalid");
                         element.classList.remove("d-none");
                        
             
         
     }
}