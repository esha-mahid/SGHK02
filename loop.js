let a =parseInt(prompt("Enter your total number out of 100"));

if (a<=-1 || a>=101){
    console.log("Pls enter corect number within 100")
}
else if(a>=90 && a<=100){
    console.log("Your Grade is A")
}
else if(a<=89 && a>=80){
    console.log("Your grade is B")
}
else if(a<=79 && a>=70){
    console.log("Your grade is C")
}
else if(a<=69 && a>=60){
    console.log("Your grade is D")
}
else 
  console.log("Your grade is F")
