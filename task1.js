// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
//     console.log('right', right);


//     while (left <= right) {
//         let mid = Math.floor(left + (right - left) / 2);
// console.log("mid",mid)
//         if (arr[mid] === target) {
//             console.log('mid res', mid);
//             return mid;
            
//         } else if (arr[mid] < target) {
//             left = mid + 1;
//             console.log("left",left)
//         } else {
//             right = mid - 1;
//             console.log("left",left)
//         }
//     }


//     return -1;
// }


// // Example
// const arr=[];
// //const arr=[7,3,1,15,9,11,17,19,5,13]
// arr.sort((a,b)=>a-b);

// //after sorted list is const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// let array=+document.getElementById('arr').value;
// arr.push(array);
// console.log('array', array);
// console.log('arr', arr);
// let target=+document.getElementById('target').value;
// console.log('target', target);
// //const result = binarySearch(arr, target);
// //console.log(result,"res"); // Output: 5 (index of target in the array)
// // document.getElementById('arr').innerHTML=arr;
// document.getElementById('index').innerHTML=mid;



// function binarySearch() {
//     const arr = document.getElementById('arr').value.trim().split(',').map(Number);
//     //console.log('arrInput', arrInput);
//     const target = +document.getElementById('target').value;
//     console.log('target', target);
//     // const arr = arrInput.sort((a, b) => a - b);1,5,4,8,9,65,47,20,24
//     //document.getElementById('sort').innerHTML=`Sorted List Array:${arr}`;
//     console.log('arr', arr);
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor(left + (right - left) / 2);
//         if (arr[mid] === target) {
//             document.getElementById('index').textContent = `Index: ${mid}`;
//             console.log('mid',mid)
//             return;
//         } else if (arr[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }

//     document.getElementById('index').textContent = 'Target not found';
// }


