
// Current Date (Question 1 )

var today = new Date();  
var day = today.getDay();  
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];  
// document.write("Today is : " + daylist[day] + " . ");   

//Current Time  (Question 1 )

var hour = today.getHours();  
var minute = today.getMinutes();  
var second = today.getSeconds();  
var prepand = (hour >= 12)? " PM ":" AM ";  
hour = (hour > 12)? hour - 12: hour;  
if (hour===0 && prepand===' PM ')   
{   
if (minute===0 && second===0)  
{   
hour=12;  
prepand=' Noon';  
}   
else  
{   
hour=12;  
prepand=' PM';  
}   
}   
if (hour===0 && prepand===' AM ')   
{   
if (minute===0 && second===0)  
{   
hour=12;  
prepand=' Midnight';  
}   
else  
{   
hour=12;  
prepand=' AM';  
// document.writeln('<div id="innertext">' +"Current Time : "+hour + prepand + " : " + minute + " : " + second + '</div>');  
}   
}   

// If a string starts with Java (Question 3 )

function start_spec_str(str)
{
  if (str.length < 4)
  {
    return false;
  }
  front = str.substring(0, 4);
  if (front == 'Java') 
  {
    return true;
  }
   else 
   {
    return false;
    //document.writeln('<div id="innertext">' + start_spec_str  ("Java") + '</div>');
    //document.writeln('<div id="innertext">' + start_spec_str  ("Worry") + '</div>');
    //document.writeln('<div id="innertext">' + start_spec_str  ("Java") +'</div>' );
  }
}

// The largest of 3 Integers 

function biggest_of_three(x, y, z) 
 {
  max_val = 0;
  if (x > y)
  {
    max_val = x;
  } else
  {
    max_val = y;
  }
  if (z > max_val) 
  {
    max_val = z;
  }
  return max_val;
  //document.writeln('<div id="innertext">' + biggest_of_three(2,40,20) +'</div>');
  //document.writeln('<div id="innertext">' + biggest_of_three(7,30,83) +'</div>');
  //document.writeln('<div id="innertext">' + biggest_of_three(3500,5000,4000) +'</div>');
}


// Capitilize the first letter of every word in a given string 

function capital_letter(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
    //document.write('<div id="innertext">' + capital_letter("the first letter of each word in my string should be a capital letter")+'</div>');
}

// Covert a given number to minutes and hours 
function convert_time (num)
 { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return hours + ":" + minutes;     
  //document.writeln('<div id="innertext">' + convert_time(60) +'</div>');
  //document.writeln('<div id="innertext">' + convert_time(71)+'</div>');
  //document.writeln('<div id="innertext">' + convert_time(180)+'</div>');    
}

