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
    let arr = [0, 1]
    function increment(arr){
        arr[0]++
        arr[1]++
        console.log(arr);
    }
    
    increment(arr);
    console.log(arr);