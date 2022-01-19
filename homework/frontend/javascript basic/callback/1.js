
for (var i = 0; i < 10; i++) {
  if(i%2 !== 0){
    continue
    
  }
  console.log(i);
  
}


// courses = [
//   {
//     name: 'Javascript',
//     coin: 500,
//     isFinish: true
//   },
//   {
//     name: 'Php',
//     coin: 400,
//     isFinish: true
//   },
//   {
//     name: 'ReactJs',
//     coin: 600,
//     isFinish: false
//   },
// ]



// // // every2
// // Array.prototype.every2 = function(callback){
// //   output = true;
// //   for( var key in courses){
// //     if(this.hasOwnProperty(key)){
// //      result = callback(this[key], key, this)
// //      if(!result){
// //        output = false;
// //        break
// //      }
// //     }
// //   }
// //   return output
// // }

// // result = courses.every2(function(course, index, array){
// //         console.log(course, index, array);
  
// //         return course.coin > 400
        
// //   })
// //   console.log(result);
  

// // every
// // result = courses.every(function(course, index, array){
// //       console.log(course, index, array);

// //       return course.coin > 400
      
// // })
// // console.log(result);



// // some2

// // Array.prototype.some2 = function(callback){
// //   output = false
// //   for(var key in courses){
// //     if(this.hasOwnProperty(key)){
// //       if(callback(this[key], key, this)){
// //       output = true;
// //      break
// //       }
// //     }      
// //   }
// //   return output
// // }

// // result = courses.some2(function(course, index, array){
// //   console.log(course, index, array);
  
// //   return course.isFinish 
// // })
// // console.log(result);




// // some
// // var result = courses.some(function(course, index){
// //       return course.isFinish == true
// // })
// // console.log(result);


// // // Filter2
// // Array.prototype.filter2 = function(callback){
// //   output = [];
// //   for(var key in courses){
// //     if(this.hasOwnProperty(key)){
// //     var result = callback(this[key])
// //     console.log(result);
// //     if(result ){
// //       output.push(this[key])
// //     }
// //     }
// //   }
// //   return output
// // }

// // filterCourses = courses.filter2(function(course){
// //   return course.coin > 400
// // })
// // console.log(filterCourses);


// // // forEach2
// // Array.prototype.forEach2 = function(callback){
// //   for(var key in courses){
// //      if(this.hasOwnProperty(key)){
// //        callback(this[key], key, this)
// //      }
    
// //   }
// // }

// // courses.forEach2(function(course, index, array){
// //   console.log(course, index, array);
  
// // })


// // MAP2
// // Array.prototype.map2 = function(callback){
// //   output = [];
// //   for (let i = 0; i < courses.length; i++) {
// //       result = callback(this[i])
// //       console.log(result);
// //       output.push(result)
// //   }
// //   return output
// // }

// Array.prototype.map2 = function(callback){
//   output = [];
//   for(var key in courses){
//     if(this.hasOwnProperty(key)){
//      result = callback(this[key], key, this)
//      console.log(result);
//      output.push(result)
//     }
    
//   }
//   return output
// }

// var htmls = courses.map2(function(course, index, array){
//   console.log(course, index, array);
// return `<h2>${course}</h2>`
  
// })
// console.log(htmls);

// // MAP
// // // var htmls = courses.map(function(course){
// // //   return `<h2> ${course} </h2>`
// // // })
// // // console.log(htmls.join(''));

