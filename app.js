//chapter 21-25 (question 1)
// var fName = prompt("Enter your first name: ");
// var lName = prompt("Enter your last name: ");
// var fullName = fName + " " + lName;
// document.write ("Hello "+ fullName);

// chapter 21-25 (question 2)
// var mobile = prompt("Enter your favourite mobile model");
// var x = mobile.length;
// document.write("My favorite phone is "+ mobile + "<br>");
// document.write("Length of string "+ x);

// chapter 21-25 (question 3)
// var country = "Pakistani";
// var x = country.indexOf("n");
// document.write("String: " + country + "<br>");
// document.write("Index of 'n': "+ x);

// chapter 21-25 (question 4)
// var str = "Hello World";
// var x = str.lastIndexOf('l')
// document.write("String: " + str + "<br>");
// document.write("Last Index of l: " + x);

// chapter 21-25 (question 5)
// var str = "Pakistani";
// var x = str.charAt(3);
// document.write("String: " + str + "<br>");
// document.write("Character at Index 3: " + x);

// chapter 21-25 (question 6)
// var fName = prompt("Enter your first name: ");
// var lName = prompt("Enter your last name: ");
// var s = " ";
// var fullName = fName.concat(s, lName);
// document.write ("Hello "+ fullName);

// chapter 21-25 (question 7)
// var city = "Hyderabad";
// var city1 = city.replace("Hyder","Islam")
// document.write("City: " + city + "<br>");
// document.write("After replacement: "+ city1);

// chapter 21-25 (question 8)
// var message = "Ali and Sami are best friends. They play cricket and football together";
// var message1 = message.split("and").join("&");
// document.write("String: " + message + "<br>");
// document.write("After replacement: " + message1);

// chapter 21-25 (question 9)
// var x = "472";
// document.write("Value: " + x + "<br>");
// document.write("Type: "+ typeof(x) + "<br>");
// var y = Number(x);
// document.write("Value: "+ y +"<br>");
// document.write("Type: "+ typeof(y));

// chapter 21-25 (question 10)
// var str = prompt("Enter string: ");
// document.write("User Input: "+ str +"<br>");
// document.write("Upper case: "+ str.toUpperCase());

// chapter 21-25 (question 11)
// var str = prompt("Enter your string: ");
// var x =  (str.charAt(0).toUpperCase()+str.slice(1));
// document.write("User Input: "+ str +"<br>");
// document.write("Title case: "+ x);

// chapter 21-25 (question 12)
// var num = 35.36;
// var x = num.toString().replace('.','');
// document.write("Number: " + num + "<br>");
// document.write("Result: " + x + "<br>"); 
// document.write(typeof(x));

// chapter 21-25 (question 13)
// var uname = prompt("Enter username: ");
// for(i=0; i<= uname.length; i++){
//    if(uname.charCodeAt(i)==33||uname.charCodeAt(i)==44||uname.charCodeAt(i)==46||uname.charCodeAt(i)==64)
// {
    // alert("Please enter a valid username");
// }
// }

// chapter 21-25 (question 14)
// var a = ["cake", ";applepie", "cookie", "chips", "patties"]
// var b = prompt("Welcome to ABC Bakery, What do you want to order sir/ma'am?");
// var c = b.toLowerCase();
// if(a.includes(c)){
    // alert(c + " is available at index "+ a.indexOf(c) + " in our bakery.")
// }
// else{
    // alert(c + " is not available in our bakery.")
// }

// chapter 21-25 (question 15)
// var pswd = prompt("Enter password: ");
// document.write("Entered Password: "+ pswd +"<br>")
// var lowerCaseLetters = /[a-z]/g;
// var upperCaseLetters = /[A-Z]/g;
// var numbers = /[0-9]/g;
// if(pswd.length<6){
    // document.write("Password length should not be less than 6. <br> Please enter a valid password.        ")
// }
// if(pswd.match(numbers)&&(pswd.match(upperCaseLetters)||pswd.match(lowerCaseLetters))){
    // if(pswd[0]>=0||pswd[0]<=9){
    // document.write("Password should not begin with a number. <br> Please enter a valid password.");
// }
// }
// else{
    // document.write("Password must contain letters and number. <br> Please enter a valid password.");
// }

// chapter 21-25 (question 16)
// var university = "University of Karachi";
// var x = university.split("");
//  for(i=0; i<x.length; i++){
    // document.write(x[i] + "<br>");
// }

// chapter 21-25 (question 17)
// var str = prompt("Enter a string: ");
// var x = str.length;
// var char = str.charAt(x-1);
// document.write("User Input: "+ str +"<br>")
// document.write("Last character of input: " + char +"<br>")

// chapter 21-25 (question 18)
// var str="The quick brown fox jumps over the lazy dog. ";
// var str1 = str.toLowerCase();
// var x = str1.match(/the/g);
// document.write("Text: " + str +"<br>")
// document.write("There are " + x.length +" occurence(s) of word 'the' ");

// chapter 26-30 (question 1)
// var num = +prompt("Enter a number");
// if(Math.sign(num)===1){
//     var round=Math.round(num);
//     var floor=Math.floor(num);
//     var ceil=Math.ceil(num);
//     document.write("Number: "+num+"<br>" );
//     document.write("Round off value: "+ round+"<br>" )
//     document.write("Floor value: "+ floor+"<br>" )
//     document.write("Ceil value: "+ ceil+"<br>" )
// }
// else{
//     alert("Enter a positive integer. ")
// }

// chapter 26-30 (question 2)
// var num = +prompt("Enter a number");
// if(Math.sign(num)===-1 &&){
//     var round=Math.round(num);
//     var floor=Math.floor(num);
//     var ceil=Math.ceil(num);    
//     document.write("Number: "+num+"<br>" );
//     document.write("Round off value: "+ round+"<br>" )
//     document.write("Floor value: "+ floor+"<br>" )
//     document.write("Ceil value: "+ ceil+"<br>" )
// }
// else{
//     alert("Please enter a negative integer. ")
// }

// chapter 26-30  (question 3)
// var num = +prompt("Enter a number: ");
// var num1 = Math.abs(num);
// document.write("The absolute value of "+ num+" is " + num1);

// chapter 26-30 (question 4)
// var val = Math.floor(Math.random() * 6) + 1;
// document.write("Random dice value is : "+ val);

// chapter 26-30 (question 5)
// var val = Math.floor(Math.random() * 2) + 1;
// if(val == 2){
// document.write(val + " <br> Random coin value is : Head");
// }
// else{
    // document.write(val + "<br>Random coin value is : Tail");
    // }
    
// chapter 26-30 (question 6)
// var num = Math.floor(Math.random() * 100) + 1;
// document.write("Random number between 1 and 100 : "+ num);

// chapter 26-30 (question 7)
// var x = /[+-]?\d+(\.\d+)?/g;
// var str = prompt("Enter your weight in kilograms: ");
// var a = str.match(x).map(function(v) { return parseFloat(v); });
// document.write("The weigh of user is "+ a +" kilograms");

// chapter 26-30 (question 8)
// var num = Math.floor(Math.random() * 10) + 1;
// var num1 = +prompt("Enter a number between 1 to 10")
// if(num == num1){
    // document.write("Congratulations, You won.")
// }
// else{
    // document.write("Try Again!")
// }

// chapter 31 to 34 (question 1)
// var date = new Date();
// document.write(date);

// chapter 31 to 34 (question 2)
// var months = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
// var date = new Date();
// var month = date.getMonth()
// document.write("Current Month is: "+ months[month]);

// chapter 31 to 34 (question 3)
// var date = new Date();
// var day = date.toString().slice(0,3);
// alert("Today is " + day);

// chapter 31 to 34 (question 4)
// var days =["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
// var date = new Date();
// var day = date.getDay();
// var a = days[day];
// if(a == "Saturday" || a =="Sunday"){
//     alert("It's Fun Day");
// }

// chapter 31 to 34 (question 5)
// var date = new Date();
// var day = date.getDay();
// if(day < 16){
//     alert("First fifteen days of the month.");
// }
// else{
//     alert("Last Days of the month.");
// }

// chapter 31 to 34 (question 6)
// var date=new Date();
// var  a = date.getTime();
// var min = a /(1000*60);
// document.write("Elapsed miliseconds since January 1,1970: "+ a );
// document.write("Elapsed miliseconds since January 1,1970: "+ min);

// chapter 31 to 34 (question 7)
// var date=new Date();
// var a =date.getHours()
// if(a >= 12){
// alert("It's PM");
// }
// else{
//     alert("It's AM");
// }

// chapter 31 to 34 (question 8)
// var laterDate=new Date(new Date().getFullYear(), 11, 31);
// document.write("Later Date: "+ laterDate);

// chapter 31 to 34 (question 9)
// var date =new Date();
// var a = date.getTime()
// var b = new Date('25 Apr,2020');
// var c = b.getTime();
// var d = a-c;
// var f = d/(1000*60*60*24);
// var days=Math.floor(f);
// document.write(days +" days have passed since 1st Ramzan, 2020");

// chapter 31 to 34 (question 10)
// var date = new Date('Dec 5 2015');
// var a = date.getTime()
// var b = new Date('1 Jan,2015');
// var c = b.getTime();
// var d = a-c;
// var f = (d/1000);
// document.write("On refernce date "+ date);
// document.write(f + " seconds had passed since begining of 2015.");

// chapter 31 to 34 (question 11) 
// var date=new Date();
// var year=date.getFullYear();
// var month=date.getMonth();
// var day=date.getDay();  
// var hour =date.getHours();
// var min = date.getMinutes();
// var sec = date.getSeconds();
// var x =new Date(date.setHours(hour +1));
// document.write("Current date: "+ date );
// document.write(" 1 hour ago, it was "+ x);

// chapter 31 to 34 (question 12)
// var date=new Date();
// var year=date.getFullYear();
// var month=date.getMonth();
// var day=date.getDay();  
// var hour =date.getHours();
// var min = date.getMinutes();
// var sec = date.getSeconds();
// var x = new Date(date.setFullYear(year-100));
// alert("Current date: "+ date + " Hundred years back, it was "+ x );

// chapter 31 to 34 (question 13)
// var age = prompt("Enter your age: ");
// var date = new Date();
// var year= date.getFullYear();
// var x = year-age;
// document.write("Your age is: "+ age + "<br>");
// document.write("Your birth year is: " + x );

// chapter 31 to 34 (question 14)
// var name = prompt("Enter your name:");
// var days =["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
// var date=new Date();
// var day=date.getDay();
// var x =days[day];
// var unit = +prompt("Enter units:");
// var charges = +prompt("Enter charges");
// var late = +prompt("Enter Late charges");
// var net=unit*charges;
// var gross=net+late;
// net=Math.round(net).toFixed(2);
// gross=Math.round(gross).toFixed(2);
// document.write("K-Electric Bill </h1>"+"<br>")
// document.write("Customer Name : "+"<b>"+name+"</b>"+"<br>");
// document.write("Month : "+"<b>"+x +"</b>"+"<br>")
// document.write("Number of units : "+"<b>"+unit+"</b>"+"<br>");
// document.write("Charges per units : "+"<b>"+charges+"</b>"+"<br><br>");
// document.write("Net Amount Payable (within Due Date) : "+"<b>"+net+"</b>"+"<br>");
// document.write("Late Payment Surcharges : "+"<b>"+late+"</b>"+"<br>");
// document.write("Gross Amount Payable (after Due Date) : "+"<b>"+gross+"</b>"+"<br>");

//chapter 35-38 (question 1)
// function currentDate(){
//     var date= new Date();
//     document.write(date);
// }
// currentDate();

//chapter 35-38 (question 2)
// function name(){
//     var fName = prompt("Enter your firstname: ");
//     var lName = prompt("Enter your lastname: ");
//     var fullName = fName + " " + lName;
//     document.write("Hello " + fullName);
// }
// name();

//chapter 35-38 (question 3)
// function sum(){
//     var num1 = +prompt("Enter first number: ");
//     var num2 = +prompt("Enter second number: ");
//     var a = num1 + num2;
//     document.write("Sum is:  " + a);
// }
// sum();

//chapter 35-38 (question 4)
// function calculator(num1,operator,num2){
//     var num1 = +prompt("Enter first number: ");
//     var num2 = +prompt("Enter second number: ");
//     var operator = +prompt("Enter operator: ");
//     if(operator === '+'){
//         return num1+num2;
//     }
//     else if(operator === '-'){
//         return num1-num2;
//     }
//     else if(operator==='*'){
//         return num1*num2;
//     }
//     else if(operator==='/'){
//         return num1/num2;
//     }
// }
// var x = calculator();
// document.write("The result is:  " + x);

//chapter 35-38 (question 5)
// function square(num){
//     x = num*num;
// document.write("Square of " +num + " is: "  + x);
// }
// square(9);

//chapter 35-38 (question 6)
// function factorial(num){
//     var x = num
//     for(i=1; i<num; i++){
//         x = x*i;
//     }
//    document.write("Factorial of " + num + " is: "  + x);
// }
//factorial(5);

//chapter 35-38 (question 7)
// function numbers(){
//     var num1 = +prompt("Enter first number:");
//     var num2 = +prompt("Enter second number:");
//     var a =0;
//     for(i=1; i<=num2 && i>=num1; i++){
//         a++;
//         document.write(a + "<br>");
//     }
// }
// numbers();

//chapter 35-38 (question 8)
// function calculateHypotenuse(){
//     var num1= +prompt("Enter perpendicular: ");
//     var num2=+prompt("Enter base: ");
//     var p=calculateSquare(num1);
//     var b=calculateSquare(num2);
//     var h;
//     h=p+b;
//     var x = calculateSquare(h);
//     alert("Hypotenuse : "+ x );
//     function calculateSquare(a){
//     return a*a;
//     }
// }
// calculateHypotenuse();


// chapter 35-38 (question 9)
// function area(width,height){
//     var a = width*height;
//     document.write("Area of the rectangle is : " +a+ "<br>")
// }
// var height = 2;
// var width = 7;
// var a = area(4,9); //argument as value
// var a = area(width,height); //argument as varaible

//chapter 35-38----task 10
// function palindrome(str){    
//     var x ='';
//     for(i=str.length-1; i>=0; i--)
//     { 
//        x +=str[i]
//     }
//   if(x === str){
//     alert('The word is a palindrome')
//     }
//     else{
//     alert('The word is not a palindrome')
//     }
// }
// var word = prompt("Enter a word");
// palindrome(word);

//chapter 35-38 (question 11)
// function capital(str){
// var x = str.split(' ');
// var arr =[];
// for(i=0; i<x.length; i++){
//   arr.push(x[i].charAt(0).toUpperCase()+x[i].slice(1));
 // }
// return arr.join(" ");
// }
// var x = capital('the quick brown fox');
// document.write("EXAMPLE STRING : "+"the quick brown fox"+"<br>")
// document.write("EXPECTED STRING : "+ x +"<br>")

//chapter 35-38 (question 12)
// function longest(str)
// {
//   var arr = str.match(/\w[a-z]{0,}/gi);
//   var arr1 = arr[0];
//   for(i = 1 ; i < arr.length ; i++)
//   {
//     if(arr1.length < arr[i].length)
//     {
//     arr1 = arr[i];
//     } 
//   }
//   return arr1;
// }
// var x= longest('Web Development Tutorial')
// document.write("EXAMPLE STRING : "+"Web Development"+"<br>")
// document.write("EXPECTED OUTPUT : "+ x+"<br>")


//chapter 35-38 (QUESTION 13)
// function name(a,b){
// var num = 0;
    // for(i=0;i<a.length;i++){
        // if(a.charAt(i)===b){
            // num+=1;
        // }
    // }
    // document.write("EXAMPLE  : "+ a +"<br>");
//  document.write("LETTER : "+ b +"<br>");
//  document.write("Number Of Occurences : "+ num+"<br>");
// }
// name('anusha','n');

//chapter 35-38  (question 14)
// function calcCircumference(r){
    // var x = Math.PI;
    // var y = 2 * x *r;
//  document.write("The Circumference of the circle is : "+ y +"<br>")
//  }
// function calcArea(r){
    // var x = Math.PI;
    // var a = x*r*r;
//  document.write("The Area of the circle is : "+
// a +"<br>")
// }
// calcArea(6)
// calcCircumference(6)

    

