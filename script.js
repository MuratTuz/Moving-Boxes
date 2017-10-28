var x = 2;
var y = 2;

$(document).ready(function(){
    
    //initializing 
    $(".c2row2").addClass("selected");
 
});

$(document).keyup(function(event){
  
    // current-grid background image = none 
    $(".selected").removeClass("selected");
    
    //up key
    if (event.which===38) {
        y = (--y<1)? 3 : y;
    }
    
    //down key
    if (event.which===40) {
        y = (++y>3)? 1 : y;
    }
    
    //lef key
    if (event.which===37) {
        x = (--x<1)? 3 : x;
    }
    
    //right key
    if (event.which===39) {
        x = (++x>3)? 1 : x;
    }
    

 
    
    // new-grid background = picture
    $(".c"+y+"row"+x).addClass("selected");

    console.log(event.which + " x :" + x + " y :" + y);
});

