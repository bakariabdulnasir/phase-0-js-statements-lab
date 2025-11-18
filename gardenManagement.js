const temperature = 90;
const timeOfDay = "morning";
let soilMoisture= 30;


if(temperature>80){
    console.log("Watering on")
}else{
    console.log("Watering off")
}

//if else statement 1

if (timeOfDay =='Morning '|| timeOfDay=='Night'){
    console.log("lights on")
}else{
    console.log("Lights off")
}

//if else statement 2
 
while (soilMoisture < 40) {
  console.log(soilMoisture);
  soilMoisture += 5;  // increment by 5
}

// When it reaches 40, log 40
console.log(soilMoisture);