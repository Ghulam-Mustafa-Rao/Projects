// let x=5
// console.log(x)
// function fun()
// {
//     console.log(x)
// }

// fun()

// let a=0
// a+=x
// console.log(a)


// console.log(`${a}`+ "asdasdasd")

// let s;

function f()
{
    if(true)
    {
        var x=5;
        let y =10;
        const z =9;
       console.log(z);
    }

    console.log(x);
}

f();

const dict = {
    name:"Rao",
    dict2:{
        ad1:"ad1",
        ad2:"ad2"
    },
    1:2,
    3:2

}

console.log(dict.name)
console.log(dict["name"])
console.log(dict.dict2.ad1)

//Destructuring

const {
    name,
    dict2:{
        ad1,ad2
    }
} = dict;

// const {
//     ad1,ad2
// } = dict2


// console.log(name);
// console.log(ad1);
// console.log(ad2);

// const dict3 ={
//     name:"Rao",
//     age:5,
//     hobbies:["cricket","football"],
//     getDetails:function()
//     {
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.hobbies);
//     }
    
// }

// dict3.getDetails();


// Arrays

let arr = [1,4,2,3,7,6,5,8];

// console.log(arr[3]);

// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index])
    
// }


// arr.sort();
// console.log("Sorted Array:")
// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index])
    
// }

// console.log("For Each:")
// arr.forEach(element => {
//     console.log(element);
// });

// Map 
var dummy = arr.map((value,index,arr)=>{
        return value%2==0;
})

console.log(dummy);

let numArr = [
    10,20,30
]

let keyArray = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30},
];

var dummy1 = keyArray.map((value,index)=>
     //({[value.key]:[value.value]}))
{
    return {[value.key]:[value.value+1]}
    
   //console.log(value.key)
   //console.log(value.value)

   // return value%2==0;
   })
   
   
    console.log(dummy1);

    dummy1 = numArr.map((val,i)=>
    {
        return {key:i+1,value:val}
    })
    console.log(dummy1);

    console.log("Key Array")
    console.log(keyArray);

    keyArray.forEach((value,index,keyArray)=>
        //({[value.key]:[value.value+1]}))
   {
    //keyArray[index] = value +1;
    keyArray[index]={[value.key]:[value.value+1]}
      // return value.value+1
       
      //console.log(value.key)
      //console.log(value.value)
   
      // return value%2==0;
      })

      console.log(keyArray);
      console.log(dummy1);
    // console.log(JSON.stringify(dummy1));
    // console.log(JSON.stringify(keyArray));

    // Flat 

    console.log("Flat ...........");

let flatarray = [1,2,3,[4,5,[6,7]]] 
let dum =flatarray.flat();
console.log(dum);
dum =dum.flat();
console.log(dum);
console.log(flatarray);
console.log("Flat for 2 nested arrays")
dum =flatarray.flat(2);
console.log(dum);

// Flat Map
console.log("Flat Map...........");
let dum1 = ["Helle","How are you"]
dummy = dum1.flatMap((value)=>
{
    return value.split(" ")
})


console.log(dummy)

//Array.from

let fromArray = "Hello"
dummy = Array.from(fromArray)
console.log(dummy)

// Array.of 

console.log("Array.of........");

    let ofArray = Array.of(1,2,3,4,5)
    console.log(ofArray);
// Include
console.log("Include........");
let includeArray = [1,2,3,4,5]
let includeValue = includeArray.includes(3) 
console.log(includeValue);

// indexOf
console.log("Search........");
let searchArray = [1,2,3,4,5]
let searchValue = searchArray.indexOf(3)
console.log(searchValue);

// Reduec 
console.log("Reduce........");
let sumArray = [1,2,3,4,5]
let sumValue = sumArray.reduce((a,b)=>a+b,0)
console.log(sumValue);

// some 
console.log("Some........");
keyArray = [
    {name: 1, age: 10},
    {name: 2, age: 20},
    {name: 3, age: 30},
];

dummy = keyArray.some(person =>{
    return person.age > 20
})

console.log(dummy)

// join 

dummy =  sumArray.join("--")
console.log(dummy)

// Every 
console.log("Every........");
dummy = keyArray.every(person =>{
    return person.age > 20
    })
    console.log(dummy)

    // String methods 
    console.log("String methods........");
    let str = "    Hello, World!,adasdsa";
    let str1 = "2";
    console.log(str.length);
    console.log(str.toUpperCase());
    console.log(str.toLowerCase());
    console.log(str.trim());
    console.log(str.trimEnd());
    console.log(str.trimStart());
    console.log(str.split(","));
    console.log(str.replace("l", "JavaScript"));
    console.log(str.replaceAll("l", "JavaScript"));
    console.log(str.includes("World"));
    console.log(str.charAt(5));
    console.log(str.at(5));
    console.log(str.slice(4,10));
    console.log(str.substring(4,10));
    console.log(str.concat(str1));

    // Spread
    console.log("Spread........");
    let arr1 = [1,2,3,4,5]
    let arr2 = [...arr1,6,7,8,9]
    console.log(arr2);
    arr2 = [6,7,8,9,...arr1]
    console.log(arr2);
    arr2 = [6,7,8,9,...arr1,10,11,12]
    console.log(arr2);
    
    // Resst 
    console.log("Rest........");
    arr = [1,2,3,4,5,6,7,8 ]
    dummy = (...number)=>{
        return number.reduce((total,number)=>
         total+number
        ,0)
    }
    console.log(dummy())
        console.log(arr);

        function sum(...a)
        {
            total=0
          for(let x of a)
          {
            total+=x
          }
         console.log(total)
        }
        
        sum(...arr)
//console.log(sum(arr1))


// for in 
console.log("for in........");
let obj = {name:"John",age:30,city:"New York"};
for (let key in obj) {
    console.log(key + ": " + obj[key]);
    }
    
