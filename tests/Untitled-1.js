
function isEven (number: number){
    if ( number % 2==0)
        console.log("Even");
    else{
        console.log("odd")
    }
}


let myage = 27
function checkAge (age: number){
    if ( age >= 18)
        console.log("Eres mayor")
    else{
        console.log("Eres menor")    
    }

}
checkAge(myage);