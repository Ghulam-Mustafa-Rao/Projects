console.log("First Value")

setTimeout(() => {
    console.log("Async")
}, 0);

setTimeout(() => {
    console.log("Async 2")
}, 1000);

console.log("Second Value")

Promise.resolve("some")
.then((string) => 
    {
        return new Promise((resolve,reject) =>
            {
              setTimeout(() => {
                string +="Thing"
                return resolve(string);
              }, 1);  
            });   
    })
.then((string) =>
    {
        console.log(string);
    });

var add = (a,b) =>
        {
            return new Promise((resolve,reject) =>
            {
                var sum = a + b;
            
                if(sum)
                {
                    return resolve(sum);
                }
                else
                {
                    return reject(Error("Could not add both values"));
                }
            })
        };


var sub = (a,b) =>
        {
            return new Promise((resolve,reject) =>
            {
                var sub = a - b;
            
                if(sub)
                {
                    return resolve(sub);
                }
                else
                {
                    return reject(Error("Could not subtract both values"));
                }
            })
        };
        
add('a','b')
.then((added) =>
{
    return sub(added,3);
})
.then(subtrat =>
{
    return add(subtrat,5);
})
.then(added =>
{
    return added * 2;
})
.then(answer => 
{
    console.log("Answer : "+`${answer}`);
})
.catch(err =>
{
    console.log("Error : " + `${err}`);
})

var simplePromise = () =>
{   
    return new Promise((resolve,reject) =>
    {
        setTimeout(() => {
            const isSuccess = true;

            if(isSuccess)
            {
                return resolve("Resolved");
            }
            else
            {
                return reject("Reject");
            }
        }, 2000); 
    })
}

var HandlePromise = async  () =>
    {
        try {
            var message = await simplePromise();
            console.log(message);
        } catch (error) {
            console.log(error);
        }
    };


HandlePromise();


//Example

var fetchUserData = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId) {
                resolve({ id: userId, name: 'John Doe', age: 30 , isAdult : false });
            } else {
                reject(Error("User ID is required"));
            }
        }, 1000); 
    });
};

var processUserData = (userData) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userData && userData.age) {
                userData.isAdult = userData.age >= 18;
                resolve(userData);
            } else {
                reject(Error("Invalid user data"));
            }
        }, 1000); 
    });
};


var saveUserData = (userData) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userData && userData.name) {    
                resolve(`User ${userData.name} saved successfully!`);
            } else {
                reject(Error("User data is incomplete"));
            }
        }, 1000); 
    });
};

fetchUserData(123)
    .then((userData) => {
        return processUserData(userData);
    })
    .then((processedData) => {
        return saveUserData(processedData);
    })
    .then((message) => {
        console.log(message);
        
    })
    .catch((err) => {
        console.log("Error: " + err.message);
    });
