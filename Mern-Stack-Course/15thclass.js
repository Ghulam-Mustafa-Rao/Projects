
    function add(a=5)
    {
        console.log(a);
    }

//Imediate Function , will be called automatically on script loaded
    (function(a,b){
        console.log(a+b);
    })(1,2)

    //Higer oerder functions , 
    //here map is higher order function
    //and secondaryFun is used as a callback Function
    let ar = [1,2,3,4,5,6]

    let secondaryFun = (number) =>{ 
        return number*2;
    }

    let mp = ar.map((number)=>{
        return secondaryFun(number)
    })

    console.log(mp);

   // Nested Functions
   function Main()
   {
        let char=''

        function A()
        {
            char = 'A';
            console.log("Function a is called");
        }

        function B()
        {
            char = 'B';
            console.log("Function b is called");
        }

        function C()
        {
            char = 'B';
            console.log("Function c is called");
        }

        function PrintValue()
        {
            console.log(`Value = ${char}`);
        }
        return {A,B,C,PrintValue}
   }


   let x = Main();

   x.A();
   x.B();
   x.PrintValue()
