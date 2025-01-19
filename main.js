
// Example functions for button clicks (replace with actual functions)
// function checkAge() {
//     alert("Check Age clicked");
// }

// function ageCategory() {
//     alert("Age Category clicked");
// }

// function getGrade() {
//     alert("Check Grade clicked");
// }

// function ternaryCheck() {
//     alert("Ternary Check clicked");
// }

// function dayCheck() {
//     alert("Check Day clicked");
// }

// function loop1to5() {
//     alert("For Loop clicked");
// }

// function while1to5() {
//     alert("While Loop clicked");
// }

// function doWhile1to5() {
//     alert("Do While Loop clicked");
// }

// function breakLoop() {
//     alert("Break Example clicked");
// }

// function continueLoop() {
//     alert("Continue Example clicked");
// }


// Function to toggle the menu visibility on mobile screens
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


// burger
function checkAge() {
    let age = prompt("Enter your age:");
    if (age >= 15) {
        document.getElementById("output6").innerHTML = "You Are An Adult.";
    } else {
        document.getElementById("output6").innerHTML = "You Are A Minor.";
    }
}

function ageCategory() {
    let age = prompt("Enter your age:");
    if (age >= 15) {
        document.getElementById("output6").innerHTML = "You Are An Adult.";
    } else {
        document.getElementById("output6").innerHTML = "You Are A Minor.";
    }
}

function getGrade() {
    let grade = prompt("Enter your grade (0-100):");
    if (grade >= 90) {
        document.getElementById("output6").innerHTML = "Grade: A";
    } else if (grade >= 80) {
        document.getElementById("output6").innerHTML = "Grade: B";
    } else {
        document.getElementById("output6").innerHTML = "Grade: C";
    }
}

function ternaryCheck() {
    let age = prompt("Enter your age:");
    document.getElementById("output6").innerHTML = age >= 15 ? "True" : "False";
}

function dayCheck() {
    let day = prompt("Enter a day of the week (e.g., 'monday'):");
    switch (day.toLowerCase()) {
        case "saturday":
            document.getElementById("output6").innerHTML = "It's the start of the week.";
            break;
        case "wednesday":
            document.getElementById("output6").innerHTML = "It's almost the weekend.";
            break;
        default:
            document.getElementById("output6").innerHTML = "It's a regular day.";
    }
}

function loop1to5() {
    let result = '';
    for (let i = 1; i <= 5; i++) {
        result += i + '\n';
    }
    document.getElementById("output7").innerHTML = result;
}

function while1to5() {
    let result = '';
    let i = 1;
    while (i <= 12) {
        result += i + '\n';
        i++;
    }
    document.getElementById("output7").innerHTML = result;
}

function doWhile1to5() {
    let result = '';
    let i = 1;
    do {
        result += i + '\n';
        i++;
    } while (i <= 3);
    document.getElementById("output7").innerHTML = result;
}

function breakLoop() {
    let result = '';
    for (let i = 1; i <= 6; i++) {
        if (i === 3) {
            break;
        }
        result += i + '\n';
    }
    document.getElementById("output7").innerHTML = result;
}

function continueLoop() {
    let result = '';
    for (let i = 1; i <= 8; i++) {
        if (i === 3) {
            continue;
        }
        result += i + '\n';
    }
    document.getElementById("output7").innerHTML = result;
}

function nestedLoops() {
    let result = '';
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            result += `(${i}, ${j})\n`;
        }
    }
    document.getElementById("output7").innerHTML = result;
}

function multiplicationTable() {
    let result = '';
    const size = 10;
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            const product = i * j;
            result += `${i} * ${j} = ${product}\n`;
        }
    }
    document.getElementById("output7").innerHTML = result;
}

function positiveCheck() {
    let number = prompt("Enter a number:");
    let result = (number > 0) ? "You Entered A Positive Integer: " + number : "This is not a positive number.";
    document.getElementById("output8").innerHTML = result + "<br>This Statement Is Always Executed.";
}

function ifElseCheck() {
    let number = prompt("Enter a number:");
    let result = (number > 0) ? "You Entered A Positive Integer: " + number : "You Entered A Negative Number: " + number;
    document.getElementById("output8").innerHTML = result + "<br>This Statement Is Always Executed.";
}

function oddOrEven() {
    let num = prompt("Enter a number:");
    let result = (num % 2 === 0) ? "It Is An Even Number." : "It Is An Odd Number.";
    document.getElementById("output8").innerHTML = result;
}

function printNumbers() {
    let result = '';
    for (let i = 1; i <= 5; ++i) {
        result += i + '<br>';
    }
    document.getElementById("output8").innerHTML = result;
}

function displayText() {
    let result = '';
    for (let i = 1; i <= 5; ++i) {
        result += "Hello World!<br>";
    }
    document.getElementById("output8").innerHTML = result;
}

function sumNaturalNumbers() {
    let Nub = 5; 
    let Sub = 0;
    for (let count = 1; count <= Nub; ++count) {
        Sub += count;
    }
    document.getElementById("output8").innerHTML = "Sum = " + Sub;
}

function whilePrint() {
    let i = 1;
    let result = '';
    while (i <= 5) {
        result += i + '<br>';
        i++;
    }
    document.getElementById("output8").innerHTML = result;
}

function sumPositiveNumbers() {
    let sum = 0;
    let numbers = [10, 20, 30, -1]; 
    for (let num of numbers) {
        if (num >= 0) {
            sum += num;
        }
    }
    document.getElementById("output8").innerHTML = "The Sum Is: " + sum;
}

function doWhileSum() {
    let s = 0;
    let u = 0;
    let numbers = [10, 15, -1];
    let result = '';
    do {
        u = numbers.shift();
        if (u > 0) {
            s += u;
        }
    } while (u >= 0);
    result = "The sum is: " + s;
    document.getElementById("output8").innerHTML = result;
}
 /* calculator */

 /*  Chapter 1*/
function hello(){
    alert("Hello , World")
}
 /*  Chapter 1*/

/*  Chapter 2*/

p_reader1.onclick = function() {
    let isEqual = 3 == 3;
    let isEqual1 = 78 === 9;
    const output = document.getElementById('btn1');
    output.innerHTML = isEqual;
    output.classList.toggle('show');
    const output2 = document.getElementById('btn2');
    output2.innerHTML = isEqual1;
    output2.classList.toggle('show');
};

p_reader2.onclick = function() {
    let isTrue = true && false; 
    let isTrue1 = true || false; 
    const output = document.getElementById('btn3');
    output.innerHTML = isTrue;
    output.classList.toggle('show');
    const output2 = document.getElementById('btn4');
    output2.innerHTML = isTrue1;
    output2.classList.toggle('show');
};

p_reader3.onclick = function() {
    let num = 5 + 10;
    let isTrue1 = true || false; 
    const output = document.getElementById('btn5');
    output.innerHTML = num;
    output.classList.toggle('show');
    const output2 = document.getElementById('btn6');
    output2.innerHTML = isTrue1;
    output2.classList.toggle('show');
};

p_reader4.onclick = function() {
    let x = 5;
    let y =  x++; 
    const output = document.getElementById('btn7');
    output.innerHTML = x;
    output.classList.toggle('show');
    const output2 = document.getElementById('btn8');
    output2.innerHTML = y;
    output2.classList.toggle('show');
};

p_reader5.onclick = function() {
    let f = 8;
    let k = f--; // k will be 8, and x will be 7 
    const output = document.getElementById('btn9');
    output.innerHTML = f;
    output.classList.toggle('show');
    const output2 = document.getElementById('btn10');
    output2.innerHTML = k;
    output2.classList.toggle('show');
};

p_reader6.onclick = function() {
    let age = 25;
    let message = "I am " + age + " years old.";
    
    const output = document.getElementById('btn11');
    output.innerHTML = message;
    output.classList.toggle('show');

    let age1 = 25;
    let message1 = "I am " + age1 + " years old.";
    const output2 = document.getElementById('btn12');
    output2.innerHTML = message1;
    output2.classList.toggle('show');
};

/*  Chapter 2*/

/*  Chapter 3*/




// ch4_reader5.onclick = function(){
//     setTimeout(function() {
//         let = ("this is callback excuted after 2 second.")
//         const output = document.getElementById('btn005');
//         output.innerHTML = backvariable;
//         output.classList.toggle('show');
//     },2000)
// }

function Anonymos2(){
    setTimeout(() => {
        alert("this is callback excuted after 3 second.")
    },3000)
}
/*  Chapter 4*/

/*  Assingment 1*/

function run2() {
            let output = "";  // Use a variable to collect the output content

            // Arithmetic operators
            let num1 = 40, num2 = 10; 

            // //prompt user to do choice
            // let choice = prompt("Please choose which operations you want: 1/2/3/4/5 ");

            output += "Arithmetic operations <br><br>";

            // Addition
            output += "The Addition of num1 + num2 is = " + (num1 + num2) + "<br>";

            // Subtraction
            output += "The Subtraction of num1 - num2 is = " + (num1 - num2) + "<br>";

            // Multiplication
            output += "The Multiplication of num1 * num2 is = " + (num1 * num2) + "<br>";

            // Division
            output += "The Division of num1 / num2 is = " + (num1 / num2) + "<br>";

            // Modulus or Remainder
            output += "The Modulus of num1 % num2 is = " + (num1 % num2) + "<br>";

            // Exponentiation
            output += "The Exponent of num1 ** num2 is = " + (num1 ** num2) + "<br>";

            // Increment and Decrement
            output += "The Increment of num1 is = " + (++num1) + "<br>";
            output += "The Decrement of num2 is = " + (--num2) + "<br>";

            // Post-Increment
            output += "The value of num1 before increment is " + (num1++) + " and after increment is " + num1 + "<br>";

            // Post-Decrement
            output += "The value of num2 before decrement is " + (num2--) + " and after decrement is " + num2 + "<br><br>";

            // Assignment operators
            output += "Assignment operations <br><br>";
            let n1 = 40, n2 = 10;

            // Add and assign
            n1 += n2;
            output += "After n1 += n2, n1 is " + n1 + "<br>";

            // Subtract and assign
            n1 -= n2;
            output += "After n1 -= n2, n1 is " + n1 + "<br>";

            // Multiply and assign
            n1 *= n2;
            output += "After n1 *= n2, n1 is " + n1 + "<br>";

            // Divide and assign
            n1 /= n2;
            output += "After n1 /= n2, n1 is " + n1 + "<br>";

            // Modulus and assign
            n1 %= n2;
            output += "After n1 %= n2, n1 is " + n1 + "<br>";

            // Exponent and assign
            n1 **= n2;
            output += "After n1 **= n2, n1 is " + n1 + "<br><br>";

            // Comparison operators
            output += "Comparison operations <br><br>";
            let a = 40, b = 10;

            // Equality
            output += "The Equality of a == b is: " + (a == b) + "<br>";

            // Strict Equality
            output += "The Strict Equality of a === b is: " + (a === b) + "<br>";

            // Inequality
            output += "The Inequality of a != b is: " + (a != b) + "<br>";

            // Strict Inequality
            output += "The Strict Inequality of a !== b is: " + (a !== b) + "<br>";

            // Greater Than
            output += "The Greater Than of a > b is: " + (a > b) + "<br>";

            // Less Than
            output += "The Less Than of a < b is: " + (a < b) + "<br>";

            // Greater Than or Equal To
            output += "The Greater Than or Equal To of a >= b is: " + (a >= b) + "<br>";

            // Less Than or Equal To
            output += "The Less Than or Equal To of a <= b is: " + (a <= b) + "<br><br>";

            // Logical operators
            output += "Logical operations <br><br>";
            let x = 40, y = 10;

            // AND (&&)
            output += "The Logical AND of x > 20 and y < 20 is " + (x > 20 && y < 20) + "<br>";

            // OR (||)
            output += "The Logical OR of x > 50 or y < 20 is " + (x > 50 || y < 20) + "<br>";

            // NOT (!)
            output += "The Logical NOT of x == 40 is " + !(x == 40) + "<br>";

            // Double Negation (!!)
            output += "The Double Negation of x != 10 is " + !!(x != 10) + "<br><br>";

            // Typeof operations
            output += "Typeof operations <br><br>";
            let number_1 = 15, number_2 = 20;
            let str = "Hello";
            let bool = true;
            let obj = { name: "muscab" };

            output += "The type of number_1 is: " + typeof(number_1) + "<br>";
            output += "The type of number_2 is: " + typeof(number_2) + "<br>";
            output += "The type of str is: " + typeof(str) + "<br>";
            output += "The type of bool is: " + typeof(bool) + "<br>";
            output += "The type of obj is: " + typeof(obj) + "<br><br>";

            // Display the output inside the paragraph element with id 'display'
            document.getElementById("display").innerHTML = output;
        }

/*  Assingment 1*/

/*  Exam Lap : Q:1*/
function Quation1(){
    console.log("muscab\nAxmed\nmaxauud");

}
/*  Exam Lap : Q:1*/

/*  Exam Lap : Q:2*/
function Quation2(){

    // const currentHour = new Date().getHours();
    let choice = prompt("pls inter your choice 1/2/3/4")
    function at_5AM(){
        alert("At 5:00 AM: Went for a morning walk.");
    }

    function at_6AM(){
        alert("At 6:00 AM: going University.");
    }

    function at_7AM(){
        alert("At 7:00 AM: Attended in a class Room.");
    }

    function at_8AM(){
        alert("At 8:00 AM: Continued working on projects.");
    }
        
switch (choice) {
    case '1':
        at_5AM();
        break;
    case '2':
        at_6AM();
        break;
    case '3':
        at_7AM();
        break;
    case '4':
        at_8AM() ;  
        break;

    // Add more cases as needed
    default:
        alert("Doing various tasks.");
} 

}
/*  Exam Lap : Q:2*/

/*  Exam Lap : Q:3*/
function displayCalculator() {
    const calculatorHTML = `
    <center>
    <section class="Calculator">
      <div class="container90">
        <input type="text" class="input" readonly />
        <div class="button90">
          <button class="ac" data-value="AC">AC</button>
          <button class="del" data-value="DEL">DEL</button>
          <button class="operator" data-value="%">%</button>
          <button class="operator" data-value="/">/</button>
          <button data-value="7">7</button>
          <button data-value="8">8</button>
          <button data-value="9">9</button>
          <button class="operator" data-value="*">*</button>
          <button data-value="4">4</button>
          <button data-value="5">5</button>
          <button data-value="6">6</button>
          <button class="operator" data-value="-">-</button>
          <button data-value="1">1</button>
          <button data-value="2">2</button>
          <button data-value="3">3</button>
          <button class="operator" data-value="+">+</button>
          <button data-value="0">0</button>
          <button data-value="00">00</button>
          <button data-value=".">.</button>
          <button class="operator" data-value="=">=</button>
        </div>
      </div>
    </section>
    </center>
    `;
    const container = document.getElementById("calculator-container");
    container.innerHTML = calculatorHTML;

    const display = document.querySelector(".input");
    const buttons = document.querySelectorAll("button");
    const specialChars = ["%", "*", "/", "-", "+", "="];
    let output = "";

    const calculate = (btnValue) => {
      if (btnValue === "=" && output !== "") {
        try {
          output = eval(output.replace("%", "/100"));
        } catch {
          output = "Error";
        }
      } else if (btnValue === "AC") {
        output = "";
      } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
      } else {
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
      }

      display.value = output;
    };

    buttons.forEach((button) => {
      button.addEventListener("click", (e) => calculate(e.target.dataset.value));
    });
  }
/*  Exam Lap : Q:3*/



/*  Chapter 5*/

function Array_Literal(){
    const name = ["ismalin&nbsp;&nbsp;", "ali&nbsp;&nbsp;", "abdi"];

    document.getElementById('message1').innerHTML = name;
}


function Empty_Array(){
    const myArray = [];
    myArray[0] = "first &nbsp;&nbsp;";
    myArray[1] = "second &nbsp;&nbsp;";

    document.getElementById('message1').innerHTML = myArray;
}

function Array_from(){
    const arrayFormStr = Array.from("hello");
  
    document.getElementById('message1').innerHTML = arrayFormStr;
}

function Array_initializer(){
    const newArray = new Array(3);
  
    document.getElementById('message1').innerHTML = newArray;
}

function spread_oprator(){
    const sourceArray = ["1 &nbsp;&nbsp;", "2 &nbsp;&nbsp;", "3 &nbsp;&nbsp;"];
    const newArray = [...sourceArray];
  
    document.getElementById('message1').innerHTML = newArray;
}

function Array_Of(){
    const myArray = Array.of("c/lahi &nbsp;&nbsp;", "c/wali &nbsp;&nbsp;", "Adam");
  
    document.getElementById('message1').innerHTML = myArray;
}

function push_Method(){
    const fruits = ["Apple", "banna", "cherry"];
    fruits.push("Mango");
    
  
    document.getElementById('message1').innerHTML = fruits;
}

function unfinish_Method(){
    const fruits = ["carrot", "banna",];
    fruits.unfinish("Mango");
    
  
    document.getElementById('message1').innerHTML = fruits;
}

function update_Method(){
    const fruits = ["Apple", "banna", "cherry"];
    fruits[1] = "mango";
    
  
    document.getElementById('message1').innerHTML = fruits;
}

function pop_Method(){
    const fruits = ["Apple", "banna", "cherry"];
    fruits.pop();
    
  
    document.getElementById('message1').innerHTML = fruits;
}

function shift_Method(){
    const fruits = ["Apple", "banna", "cherry"];
    fruits.shift();
    
  
    document.getElementById('message1').innerHTML = fruits;
}

function Splice_Method(){
    const fruits = ["Apple", "banna", "cherry", "Tomato"];
    fruits.splice(1,2);
    
  
    document.getElementById('message1').innerHTML = fruits;
}
/*  Chapter 5*/

/* chapter 6*/
p_reader.onclick = function(){
    let contentElement = document.getElementById("BTN1");
    contentElement.style.background = "blue";
    contentElement.style.color = "white";
    contentElement.style.fontFamily = "Arial, Helvetica, sans-serif";
    contentElement.style.borderRadius = "8px";
    contentElement.style.padding = "8px";
    contentElement.style.width = "46%";
    contentElement.style.fontSize = "1.3em";


    document.getElementById('BTN1').innerHTML = "this is pragraph within the container";
}

let contentel = document.getElementById("content");
contentel.style.background = "blue";
contentel.style.color = "white";
contentel.style.padding = "10px";
contentel.style.fontFamily = "serif";

//3
let boxElement = document.getElementsByClassName("box");
for (let i = 0; i < boxElement.length; i++){
    boxElement[i].style.border = "3px dashed black"
     boxElement[i].style.backgroundColor = "none"
}

let par = document.getElementsByClassName("p");
for (let i = 0; i < par.length; i++){
    par[i].style.fontStyle = "italic";
    par[i].style.margin = "20px";
}

// //4
// let firstparagraph = document.querySelector("P");
// let firstbox = document.querySelector(".boxes")

// //5
// let allparagraph = document.querySelector("P");
// let allboxes = document.querySelector(".boxs")

//6
let elemrnt = document.getElementById("mylink");
elemrnt.style.textDecoration = "none";

//7
let pra = document.getElementById("paragraph");
pra.innerText = "Setting p tag text using innertext property";
pra.textContent = "Setting p tag text using textcontent property";

//8
let link = document.getElementById("my_link");
link.setAttribute("class", "remove_txt_deco")

let set = document.getElementsByClassName("remove_txt_deco");
for (let i = 0; i < set.length; i++){
    set[i].style.textDecoration = "none";
}

//9
let create_element = document.createElement("p");
let parg = document.getElementById("pargr")
create_element.innerText = "This is creted element";
parg.appendChild(create_element);

//10
let olde_element = document.getElementById("pragraph");
let new_element = document.createElement("p");
new_element.innerText = "This is the new pragraph element";
document.body.replaceChild(new_element, olde_element)

//11
let parentElement = document.getElementById("pragraph2");
let existingSpan = document.getElementById("span2");
let newSpan = document.createElement("span");

newSpan.innerText = "New span element";
parentElement.insertBefore(newSpan, existingSpan);

/* chapter 6*/

/* chapter 7*/

const element = document.getElementById("myButton");
element.addEventListener("click", myfun);
function myfun(){
    alert("Button Clicked!")
}


// inline event handler
function func(){
    alert("Button Clicked!")
}


// mouse event
let element2 = document.getElementById("myel");
element2.addEventListener("mouseover",function(){
    element2.style.backgroundColor = "green";
});
element2.addEventListener("mouseout",function(){
    element2.style.backgroundColor = "blue";
});


//keyboard event
const textinput = document.getElementById("text");
const outputdiv = document.getElementById("output");
textinput.addEventListener("keydown", function (event){
    outputdiv.innerText = `Keydown: ${event.key}`;
});
textinput.addEventListener("keypress", function (event){
    outputdiv.innerText += `\nKeypress: ${event.key}`;
});
textinput.addEventListener("keyup", function (event){
    outputdiv.innerText += `\nKeyup: ${event.key}`;
});


//Focus events
const textinput2 = document.getElementById("text2");
const outputdiv2 = document.getElementById("output2");
textinput2.addEventListener("focus", function (){
    updateOutput("focused");
});
textinput2.addEventListener("blur", function (){
    updateOutput("blurred");
});
function updateOutput(className){
    outputdiv2.className = className;
}


//form focus
const textinp = document.getElementById("textinp");
const outdiv = document.getElementById("foutput");
const form = document.getElementById("myform");
textinp.addEventListener("input", function () {
    if (textinp.value != "") {
        updateOutput2("input changed!", "valid");
    } else {
        updateOutput2("input changed with empty!", "invalid");
    }
});
form.addEventListener("submit", function (event) {
    event.preventDefault();
    updateOutput2("form submitted!", "valid");
});
function updateOutput2(message2, classname2) {
    outdiv.innerText = message2;
    outdiv.className = classname2;
}


//Event Delegation Using A Single Event Listener On The Parent Element
const parentList = document.getElementById("parentList");
parentList.addEventListener("click", function(event){
    if(event.target.tagName === "LI"){
        alert("Clicked on: "+event.target.innerText);
}
});

/* chapter 7*/

// ustad jamila

function Ustad_Jamila(){
    const sourceArray = ["ENGINER JAMILA : she is the best teacher in Our University that i Ever saw 👩‍🏫"];
    const newArray = [...sourceArray];
  
    document.getElementById('message').innerHTML = newArray;
}
// ustad jamila


// projects 
async function fetchFlag() {
    const countryName = document.getElementById('countryName').value.trim();
    const flagContainer = document.getElementById('flagContainer');
    const errorContainer = document.getElementById('error');
  
    flagContainer.innerHTML = '';
    errorContainer.textContent = '';
  
    if (!countryName) {
      errorContainer.textContent = 'Please enter a country name.';
      return;
    }
  
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
      if (!response.ok) throw new Error('Country not found.');
  
      const data = await response.json();
      const country = data[0];
      const flagURL = country.flags.svg;
  
      flagContainer.innerHTML = `
        <h2>${country.name.common}</h2>
        <img src="${flagURL}" alt="Flag of ${country.name.common}" />
      `;
    } catch (error) {
      errorContainer.textContent = error.message;
    }
  }
  
// project two
document.getElementById('show-flag').addEventListener('click', function() {
    const region = document.getElementById('region-input').value.trim().toLowerCase();
    const flags = document.querySelectorAll('.flag-image');
    const alertBox = document.getElementById('custom-alert');
    const flagContainer = document.getElementById('flag');

    // Hide all flags
    flags.forEach(flag => flag.style.display = 'none');

    // Match region to flag ID and display the corresponding flag
    const flagMap = {
        'somalia': 'somalia-flag',
        'hirshabele': 'hirshabele-flag',
        'konfurgalbed': 'konfurgalbed-flag',
        'puntland': 'puntland-flag',
        'somaliland': 'somaliland-flag',
        'jubaland': 'jubaland-flag',
        'galmudug': 'galmudug-flag'
    };

    const flagId = flagMap[region];
    if (flagId) {
        alertBox.style.display = 'none';
        flagContainer.style.display = 'flex'; // Show flag container
        document.getElementById(flagId).style.display = 'block';
    } else {
        flagContainer.style.display = 'none'; // Hide flag container
        alertBox.innerText = 'Please enter a region name.';
        alertBox.style.display = 'block';

        // Hide alert after 3 seconds
        setTimeout(() => {
            alertBox.style.display = 'none';
        }, 4000);
    }
});