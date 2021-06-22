

 function validateform() { 
     let id=document.getElementById("id").value;
     let password=document.getElementById("pw").value;
     console.log(id,password);

     if(id==" " || password==" ")
     {
         alert("Input field cannot be empty");  
     }
     else
     {
        
         switch(id)
         {
             case "royal250": if(password=="Lb14Xyd!"){
                 
                window.location.replace("./student.html");
             }
             
             case "t-royal30": if(password=="Lbvse@15"){
                  
                 window.location.replace("./teacher.html");
             }
             return;
             case "t-royal1": if(password=="Lbafs32!"){
                  
                
                window.location.replace("./school.html");
             }
             return;
             default : alert("Invalid credentials");
             
         }
     }
}