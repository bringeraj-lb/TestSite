

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
             case "parent@royal": if(password=="alfa"){
                window.location = "https://student.learnbasics.fun/";
             } else {
                alert("Invalid credentials");
             }
             return;
             case "teacher@royal": if(password=="alfa"){
                 window.location = "https://staff.learnbasics.fun/";
             } else {
                alert("Invalid credentials");
             }
             return;
             case "school@royal": if(password=="alfa"){
                window.location = "https://school.learnbasics.fun/";
             } else {
                alert("Invalid credentials");
             }
             return;
             default : alert("Invalid credentials");
             
         }
     }
}