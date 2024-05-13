const date = new Date();
console.log(date.getMonth())

const month = date.getMonth();
const day = date.getDay();
const year = date.getFullYear();
const hour = date.getHours();
const minute = date.getMinutes();
const seconds = date.getSeconds();
const minis = date.getMilliseconds();
console.log("date")
console.log(`${date} - ${month+1} - ${year}`)//month ka starting 0 s hota h
console.log("time")
console.log(`${hour} - ${minute} - ${seconds} - ${minis}` )

// this will show the current date and time zone u are currently in 
