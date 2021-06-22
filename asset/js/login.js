

 function validateform() { 
     let id=document.getElementById("id").value;
     let password=document.getElementById("pw").value;
     console.log(id,password);

     
        
         switch(id)
         {
             case "royal250": if(password=="Lb14Xyd!"){
                 
                window.location.replace("./Demopages/student.html");
             }
             
             case "t-royal30": if(password=="Lbvse@15"){
                  
                 window.location.replace("./Demopages/teacher.html");
             }
             return;
             case "t-royal1": if(password=="Lbafs32!"){
                  
                
                window.location.replace("./Demopages/school.html");
             }
             return;
             default : var element = document.getElementById("invalid");
                         element.classList.remove("d-none");
                        
             
         
     }
}