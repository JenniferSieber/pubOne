// 6kyu, 7kyu, 8kyu
// KATA 1 7kyu
// https://www.codewars.com/kata/573156709a231dcec9000ee8
const tailAndHead = arr => {
  let sums = [];
  for (let i = 0; i < arr.length - 1; i++) {
    sums[i] = +(arr[i].toString()[arr[i].toString().length - 1]) + +(arr[i+1].toString()[0]);
  }
  return sums.reduce((ttl, cv) => ttl * cv);
}

console.log(tailAndHead([1,2,3,4,5]));
console.log(tailAndHead([35456,782,569,2454,875]));

// KATA 2 7kyu
// https://www.codewars.com/kata/5732b0351eb838d03300101d
const blackAndWhite = args => {
  if(!Array.isArray(args)) return `It's a fake array`;
  return (args.indexOf(5) != -1 && args.indexOf(13) != -1) ? `It's a black array` : `It's a white array`; 
}

 console.log(blackAndWhite(5,13));
 console.log(blackAndWhite([5,13]));
 console.log(blackAndWhite([5,12]));

// KATA 3 7kyu
// https://www.codewars.com/kata/5732d3c9791aafb0e4001236
const roundIt = n => {
  const [a,b] = n.toString().split('.');
  return a.length > b.length ? Math.floor(n) : a.length === b.length ? Math.round(n) : Math.ceil(n);
}

console.log(roundIt(3.45)); 
console.log(roundIt(34.5)); 
console.log(roundIt(34.56)); 

// KATA 4 7kyu
// https://www.codewars.com/kata/5733d6c2d780e20173000baa
const maxMin = (arr1, arr2) => {
  const diffs = arr1.map((n, i) => Math.abs(n - arr2[i]));
  return [Math.max(...diffs), Math.min(...diffs)];
}

console.log(maxMin([1,3,5],[9,8,7]) );
console.log(maxMin([1,10,100,1000],[0,0,0,0]));
console.log(maxMin([10,20,30,40],[111,11,1,-111]));

// KATA 5 8kyu #34
// https://www.codewars.com/kata/5733f948d780e27df6000e33
//vol is vol of cube
//cut cube into n block determine whether length of cube is integer. return true or false
const cutCube = (vol, n) => !(Math.cbrt(n) % 1) && !(Math.cbrt(vol/n) % 1);

console.log(cutCube(27,27) );
console.log(cutCube(512,8));
console.log(cutCube(256,8));
console.log(cutCube(50000,50));


////THE LIST OF TRAINING
// https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript

