var today = new Date();

var hourNow = today.getHours();

var greeting;

if(hourNow < 12){
    greeting = 'Good Morning!!';
} 
else if(hourNow >= 12) {
    greeting = "Good Afternoon!!";
} 
else if(hourNow >= 18) {
    greeting = "Good Evening!!";
} 
else {
    greeting = "Dont know what time of the day!!"
}

document.write(greeting);