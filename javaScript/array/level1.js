//Find the list of numbers divisible by 3

const arr=[3,5,1,2,9,12]
const array = arr.filter((item)=>{
    return item%3==0
})
console.log(array)