var array = ['ReactJs','Javascript','Php','Html']

function logger(...rest){
   for (let i = 0; i < rest.length; i++) {
       console.log(rest[i]);
   }
}
logger(...array)