// document.write("JS Practice");
// alert("Welcome")
// document.getElementById("temp").innerHTML="Shashi";
// function Business () {
//     document.getElementById("temp").innerHTML="I am a Businessman."
// }

// function expWithConsole() {
//     const MONTHS = 12;
//     const WEEKS = 52;
//     var UI = document.getElementById("userInput").value;
//     document.getElementById("Results").innerHTML = "You entered : " + UI + " and a year has " + MONTHS + " months";
//     document.getElementById("Results1").innerHTML = "You entered : " + UI + " and a year has " + WEEKS + " weeks";

//     let inp1 = document.getElementById("userInput1").value;
//     let inp2 = document.getElementById("userInput2").value;
//     document.getElementById("Results").innerHTML = parseInt(inp1) + parseInt(inp2);

//     let inp = document.getElementById("userInput").value;
//     if (inp <= 5 ) {
//         console.log("Input is less than or equal 5");
//     } else if (inp > 5 && inp <= 10) {
//         console.log("Input is gretaer than 5 and less than or equal to 10");
//     }
//     else {
//         console.log("Input is greater than 10");
//     }
// }
// function alphabetical_sort() {
//     const student_names = ["Shashi", "Stephen", "Sai Karthik", "Shreyas"];
//     student_names.sort();
//     document.getElementById("post_alhabetical_sort").innerHTML = student_names;
// }

// function numerical_sort() {
//     numbers = [12, 10, 9, 19, 14];
//     numbers.sort(function(a,b) {return(a - b)});
//     document.getElementById("post_numerical_sort").innerHTML = numbers;
// }
    // function ternery() {
    //     let AGE = parseInt(document.getElementById("user_age").value)
    //     let result = (AGE >= 18) ? "eligible to vote" : "not eleigible to vote";
    //     document.getElementById("age_result").innerHTML = result

    // }
    // class_to_subject_mapping = {
    //     'Engg' : ['Maths', 'Physics'],
    //     'Bcom' : ['Business', 'Finance'],
    //     'PUC' : ['Kannada', 'English']
    // }

    // function chapter(chapter){
    //     this.chapters = chapter;
    // };

    // function subject(name, std, chapters){
    //     this.name = name;
    //     this.standard = std;
    //     this.chapters = chapters;
    // };

    // function student(nm, reg, std){
    //     this.name = nm;
    //     this.register = reg;
    //     this.standard = std;
    //     this.subject = class_to_subject_mapping[this.standard];
    // };

    // const stdn1 = new student ('Sai', 19, 'Engg');
    // const stdn2 = new student ('Shreyas', 15, 'Engg');
    // const stdn3 = new student ('Shashi', 12, 'Engg');
    // const stdn4 = new student ('Dario', 28, 'Bcom');
    // const stdn5 = new student ('Suji', 10, 'Bcom');
    // const stdn6 = new student ('Lakshmi', 14, 'PUC');

    // console.log(stdn1);
    // console.log(stdn2);
    // console.log(stdn3);
    // console.log(stdn4);
    // console.log(stdn5);
    // console.log(stdn6);

    /*function sayHello() {
        console.log(name);
        console.log(age);
        var name = "Shashi";
        let age = 32
    }
    sayHello()*/

    // let num = 5
    // function decrement(num){
    //     num--
    //     console.log(num);
    // }
    
    // decrement(num);
    // console.log(num);

//     let arr = [0,1,2,3,4,5,6]
//     function increment(arr){
//         // arr[0]++
//         // arr[1]++
//         // console.log(arr);
//         for (j = 0; j < arr.length; j++){
//             for (i = 0; i < arr.length; i++){
//             if (i % 2 == 1){
//                 arr[i] = "a"
//                 console.log(arr);
//                 break // stop the execution of inner loop
//             }
//         }
//     }
// }
    
//     increment(arr);
//     console.log(arr);

// for (var i = 1; i < 6; i++){
//     if (i == 3){
//     //break;
//     continue; //skip all steps below me and continuefor next step
//     }
//     console.log(i);
// }

// console.log(`broken at ${i}`);
//-----------------------------------------------------------
//    SET-Colection of unique elements
// let emptySet = new Set();
// let names = new Set(['shashi','karthik','stephen','shreyas','shashi']);
// names.add('dario')

// console.log(names);
// console.log(names.size);

// names.delete('dario')
// console.log(names);
//-----------------------------------------------------------------------------------------
// function fact(num){
//     if(num == 0){
//         return 1 
//     }
//     return num = num * fact(num - 1)
// }

// let num = 5;
// let answer = fact(num);
// console.log(answer);
//----------------------------------------------------------------------------------------------
// function fact(num){
//     let answer = 1;
//     if (num == 0 || num == 1){
//         return answer
//     }

//     else if(num > 1){
//         for(var i = num; i >= 1; i--){
//             answer = answer * i;
//         }
//         return answer;
//     }
//     else{
//         return "Number should be positive number";
//     }
// }

// let num = -9;
// let answer = fact(num)
// console.log(`Factorial of ${num} : ${answer}`);
//----------------------------------------------------------------------------------------

class rectangle{

    calcArea(){
        return this.width * this.height;
    }

    calcPerimeter(){
        return 2 * (this.height + this.width);
    }

    printData(){
        console.log("Width = " + this.width);
        console.log("Height = " + this.height)

        let area = this.calcArea();
        let perimeter = this.calcPerimeter();
        console.log("Area is " + area + " and Primeter is " + perimeter);
    }
}

var Rectangle = new rectangle
Rectangle.width = 5;
Rectangle.height = 4;
Rectangle.printData();