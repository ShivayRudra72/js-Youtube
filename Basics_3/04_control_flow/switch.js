//BASICS SYNTAX OF SWITCH CASE ----->
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

//notes
//1. key maii wo likhna hai jo humko baar baar -- "use krna haii"
//2.copy the above statement just type -- > shift + alt + down arrow

//by this appproach we definetly find the month : "as per our choice"
const month = 1;
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("febrauary");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    default:
        console.log("default case match");
        break;
}

//WHEN THE "STRING" IS ENCOUNTER USE THIS : APPROACH
// answer is  ---> "march"
const months = "march";
switch (months) {
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("febrauary");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;
    case "may":
        console.log("may");
        break;
    default:
        console.log("default case match");
        break;
}


