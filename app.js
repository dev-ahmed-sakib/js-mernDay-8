// --- regular expresstion --- //
const matching = "perfect_sakiib@yahoo.com";

const pattern = /^[a-z0-9._]{1,20}@[a-z]{2,10}\.[a-z]{2,8}$/;

console.log(pattern.test(matching))


// phone number matching // 
// const matching = "01785746146";

// const pattern = /^(0|\+880|880)[0-9]{10}$/;

// console.log(pattern.test(matching))






















// const age = 15;

// try{
//     if(age >= 19){
//         console.log("Your age is  okay")
//     }else{
//         throw new Error("age is undefined")
//     }
// }catch(error){
//     console.log(error.message)
// }



// try{
//     agecal()
// }catch(error){
//     console.log(error.message)
// }







// const devss = [
//         {   
//             id : 1,
//             name : "sakib",
//             age : 19,
//             skill : "mern",
//             monthlyEarning : "$2000",
//             location : "chattogram",
            
//         },
//         {
//             id : 2,
//             name : "onik",
//             age : 20,
//             skill : "Ios",
//             monthlyEarning : "$3000",
//             location : "chattogram",
            
//         },
//         {
//             id : 3,
//             name : "Khairul",
//             age : 19,
//             skill : "wordPress",
//             monthlyEarning : "$1500",
//             location : "Dhaka",
            
//         },
//         {
//             id : 4,
//             name : "hridoy",
//             age : 22,
//             skill : "java",
//             monthlyEarning : "$2000",
//             location : "chattogram",
            
//         },
//         {
//             id : 5,
//             name : "sabbir",
//             age : 21,
//             skill : "website",
//             monthlyEarning : "$1500",
//             location : "Dhaka",
            
//         },
//         {
//             id : 7,
//             name : "mamun",
//             age : 20,
//             skill : "mern",
//             monthlyEarning : "$2500",
//             location : "Dhaka",
            
//         },
//         {
//             id : 8,
//             name : "shawon",
//             age : 19,
//             skill : "webDesign",
//             monthlyEarning : "$1000",
//             location : "chattogram",
            
//         }
// ]


// //--- Cookies memories ---//

// const jsonUserData = JSON.stringify(devss)

// document.cookie = `userData=${jsonUserData}; expires=Wed, 08 May 2024 06:38:00 GMT`;

// set.cookie = `userData=${jsonUserData}; expires=Wed, 08 May 2024 06:38:00 GMT`;












// --- sessionstorage data removed --- //
// const userDataGet = sessionStorage.removeItem("userData");
















// --- sessionstorage data "get" using JSON
// const userDataGet = sessionStorage.getItem("userData2");
// const jsonUser = JSON.parse(userDataGet)


// console.log(jsonUser)








// --- sessionStorage data set --- //
// const jsonUser = JSON.stringify(devss)

// sessionStorage.setItem("userData", jsonUser)

// // console.log(jsonUser)






















// const userDataGet = localStorage.removeItem("NuserD");
// const data = JSON.parse(userDataGet);

// console.log(data)























// const userDataGet = localStorage.removeItem("userData")
// const data = JSON.parse(userDataGet);
// console.log(data)