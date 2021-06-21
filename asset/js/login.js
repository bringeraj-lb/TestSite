
//  function validateform1(){
     
//      var id=document.loginform.id.value;
//      var password=document.loginform.password.value;
//      console.log(id,password);

// if(document.getElementById("id").value == 's1' && document.getElementById("pw").value == '1234' ){
//         alert("Login Successful");
//         window.location.replace("http://www.google.com/");
//     }
//  }
 function validateform() { 
     let id=document.loginform.id.value;
     let password=document.loginform.password.value;
     console.log(id,password);

     if(id==" " || password==" ")
     {
         alert("Input field cannot be empty");  
     }
     else
     {
        //  if(id=="s1" && password=="1234")
        //  { 
        //      console.log("i am in 250");
        //      window.location.replace("");
        //  }
         
        //  else
        //  {
        //      alert("Invalid credentials");
        //  }

    
         switch(id)
         {
             case "royal250": if(password=="Lb14Xyd!"){
                 alert("valid student");
                window.location.replace("http://www.w3schools.com");
             }
             
             case "t-royal30": if(password=="Lbvse@15"){
                  alert("valid teacher");
                 window.location.replace("http://www.w3schools.com");
             }
             return;
             case "t-royal1": if(password=="Lbafs32!"){
                  alert("valid school");
                //  window.location.replace("http://www.w3schools.com");
                window.location.href="teacher.html";
             }
             return;
             default : alert("Invalid credentials");
             
         }
     }
}