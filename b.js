let arr=[1,2,3,4,5];
//console.log(typeof arr);
arr['index']=10;
// console.log(arr['index']);
// console.log(arr.index);
// console.log(arr);
arr[10]=19;
// console.log(arr);



/* indexof,push, pop, unshift, shift, splice */
let arr1 = new Array(2,6,9,12,16,22,29);
// indexof 
let id1=arr1.indexOf(0);// Return index of 0 in array.If not have element = 0 return -1
//console.log(id1);
let id2=arr1.indexOf(12,2); //Return index of 6 in array from index 2.If not have element=6 from index 2 return -1
// console.log(id2);
// pop
let e=arr1.pop();// Remove last element and return it
// console.log(e);
// push
let length=arr1.push(29);// Add last element and return new lenght of arrray
// console.log(length);
//shift
let b= arr1.shift();// Remove fist element and return it
//console.log(b);
let lengthShift= arr1.unshift(2);
// console.log(length);
//splice
let c= arr1.splice(2,1,9);// Remove element from index '2',remove '1' element, insert new element '9' at this index and return the deleted element
//console.log(c,arr1);

/* find, findIndex, map, forEach, filter, fill, sort,reverse */
let array= [1,18,13,23,17,11,21,39,31];
// find
let find=array.find(function(element) 
{
    return element>13;
}); // find the satisfying condition element is found inside an array, then it will immediately return
//console.log(find);
// find ES6
let find1=array.find((element,index)=>(element>13 && index>3));
//console.log(find1);

// findIndex

let findIndex = array.findIndex(function(ele){
    return ele%2==0
});// find the satisfying condition element is found inside an array, then it will immediately return index of element
//console.log(find);
//console.log(findIndex);
 let findIx2= array.findIndex((element,index)=> (element%2!=0 && index>4));
//console.log(findIx2);


function isPrime(element,index,array){
    var start=2;
    for(start=2;start<=Math.sqrt(element);start++)
    {
        if(element%start==0) return false;
    }
    return element>1;
    
}
// console.log(array.findIndex(isPrime));

//map
//forEach
//filter
//fill
//sort
// reverse








