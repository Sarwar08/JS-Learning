// logical operators = used to combine or manipulate boolean values 
//                     (true or false)

//        AND = &&  (Double ampersand) (all conditions to be true)
//        OR  = ||  (if one condition is true block will execute)
//        NOT = !   (toggle the boolean value)

const isSunny = true;

if(!isSunny){
    console.log("It is cloudy");
}else{
    console.log("it is sunny");
}

// if(isSunny){
//     console.log("It is sunny");
// }else{
//     console.log("it is cloudy");
// }

const temp = 20;

if (temp < 0 || temp > 30){
    console.log("weather is bad");
}else{
    console.log("weather is good");
}

// if(temp > 0){
//     console.log("weather is good");
// }else if(temp <= 30){
//     console.log("weather is good");
// }else{
//     console.log("weather is bad");
// }