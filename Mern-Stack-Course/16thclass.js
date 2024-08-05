let input = [1,2,2,3,4,3,2,4,5,6]
let output = []

// function removeDuplicates(input,output)
// {
//     input.map((value) => 
//     {
//         if(!output.includes(value))
//         {
//             output.push(value);
//         }

//     })
// }

function removeDuplicates(input,output)
{
    for (let index = 0; index < input.length; index++) 
        {
            let curentValue = input[index];
            
            let found = false;
            for (let k = 0; k < output.length; k++) 
                {
                    if(curentValue == output[k])
                        {
                            found =true;
                            break;
                        }
                }

                if(!found)
                    output.push(curentValue);
        
        }

    // input.map((value) => 
    // {
    //     if(!output.includes(value))
    //     {
    //         output.push(value);
    //     }

    // })
}

console.log("Remove Duplicates:")
console.log("Input : " + `${input}`);
removeDuplicates(input,output);
console.log("Ouput : " + `${output}`);

//Even and Odd

let evenNumbers = [];
let oddNumbers = [];

// function SeparateEvenAndOdd(input)
// {
//     input.map((value) => 
//     {
//         if(value%2==0)
//         {
//             evenNumbers.push(value);
//         }
//         else
//         {
//             oddNumbers.push(value);
//         }
//     })
// }

function SeparateEvenAndOdd(input)
{
    for (let index = 0; index < input.length; index++) 
        {
            if(input[index]%2==0)
                {
                    evenNumbers.push(input[index]);
                }
                else
                {
                    oddNumbers.push(input[index]);
                }
        }
   
}

console.log("Separate Even And Odd:")
console.log("Input : " + `${output}`);
SeparateEvenAndOdd(output,evenNumbers,oddNumbers);
console.log("evenNumbers : " + `${evenNumbers}`);
console.log("oddNumbers : " + `${oddNumbers}`);

//Find Greatest and Smallest value

let greatestNumber = 0;
let smallestNumber = 0;

// function FindGreatestAndSmallest(input)
// {
//     smallestNumber = input[0]
//     greatestNumber = input[0]

//     input.map((value) => 
//     {
//         if(value > greatestNumber)
//         {
//             greatestNumber = value;
//         }
//         if(value < smallestNumber)
//         {
//             smallestNumber = value;
//         }
//     })
// }

function FindGreatestAndSmallest(input)
{
    smallestNumber = input[0]
    greatestNumber = input[0]
    for (let index = 0; index < input.length; index++) 
        {
            if(input[index] > greatestNumber)
                {
                    greatestNumber = input[index];
                }
                if(input[index] < smallestNumber)
                {
                    smallestNumber = input[index];
                }
        }   
}



console.log("Find Greatest and Smallest Value:")
console.log("Input : " + `${output}`);
FindGreatestAndSmallest(output);
console.log("Greatest Number : " + `${greatestNumber}`);
console.log("Smallest Number : " + `${smallestNumber}`);

//Find Number of Duplicates And Count Them

let newInput = [1,2,2,3,3,3,4,4,5,6];
let newOutput = []

// function FindNumberofDuplicatesAndCountThem(input)
// {    
//     let value = 0;
//     for (let i = 0; i < input.length; i++) {
//         value = input[i];
//         let indexOfValue = newOutput.findIndex(item => item.value === value);

//         if (indexOfValue === -1) {
//             newOutput.push({ value: value, count: 1 });
//         } else {
//             newOutput[indexOfValue].count += 1;
//         }
//     }

// }

function FindNumberofDuplicatesAndCountThem(input)
{    
    let value = 0;
    for (let i = 0; i < input.length; i++) {
        value = input[i];

        let indexOfValue = -1;
        
        for (let index = 0; index < newOutput.length; index++)
            {
                if(value == newOutput[index])
                {
                    indexOfValue = index;  
                    break;  
                }                            
            }       

        if (indexOfValue === -1) 
            {
                newOutput.push({ value: value, count: 1 });
            } else 
            {
                newOutput[indexOfValue].count += 1;
            }
    }

}

console.log("Find Number of Duplicates And Count Them:")
console.log("Input : " + `${newInput}`);
FindNumberofDuplicatesAndCountThem(newInput);

var dummy1 = newOutput.map(item => {
    return { [item.value]: item.count };
});

console.log("Output : "+JSON.stringify(dummy1));

//Binding

const obj = {
    name : "Ghulam Mustafa Rao"
}

console.log("Bind : ");
function Bindfn()
{
    console.log(this.name);
}

let vari = Bindfn.bind(obj);
vari();

function Callfn(age,qualification)
{
    console.log(this.name + " , "+`${age}`+ " , "+`${qualification}`);
}
console.log("Call : ");
Callfn.call(obj,24,"BSCS");

console.log("Apply : ");
let ar = [24,"BSCS"]
Callfn.apply(obj,ar)
// vari = Callfn.bind(obj,24);
// vari();
