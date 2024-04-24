const car ={
    BrandName:"BMW",
    Headlight:2,
    Wheels:4,
    Enginetype: 'petrol',
}

const car2 ={...car,BrandName:"audi"}

const car3 ={...car,BrandName:"Rangerover",Gear:'auto',Segment:'sedan'}


console.log(car)
console.log(car2)
console.log(car3)
