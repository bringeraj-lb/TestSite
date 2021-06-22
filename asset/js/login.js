

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
                 
                window.location = "./student.html";
             }
             
             case "t-royal30": if(password=="Lbvse@15"){
                  
                 window.location = "./teacher.html";
             }
             return;
             case "t-royal1": if(password=="Lbafs32!"){
                  
                
                window.location = "./school.html";
             }
             return;
             default : alert("Invalid credentials");
             
         }
     }
}