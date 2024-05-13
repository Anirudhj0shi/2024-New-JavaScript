// console.log("setTimeout")
// setTimeout(()=>{
//     console.log("inside set Timeout")
// },2000)

setInterval(() => {
    const date = new Date();

    const hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    const minis = date.getMilliseconds();
    
    console.log(`${hour} - ${minute} - ${seconds} - ${minis}` )

},1000);
