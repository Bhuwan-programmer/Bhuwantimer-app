var buttons=document.getElementById("btns");

var button=document.getElementById("btn");
button.onclick=function(e){
    e.preventDefault();
    var number=document.getElementById("num");
    var second = document.getElementById("second");
  
    var bhuwan =setInterval(hacker,1000)
    function hacker()
    {
       
      
      
      
               if(second.innerHTML==number.value)
              
               {
                   second.innerHTML="Finished ";
                  
               }
               second.innerHTML++;   
               if(second.innerHTML=="NaN")
               {
                   second.innerHTML="Over !!!";
                
               }
               if(number.value=="")
               {
                   second.innerHTML="";
                
               }
              
        
            
       }
    }
    
    

        
      
    
        


