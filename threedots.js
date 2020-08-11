const ages = [12,14,16,18];
const ages2 = [13,15,17];
const allAges = ages.concat(ages2);
const allAges2 = [...ages,...ages2];
const takaPoisa = [120,450,30,70,140,65,520];
const max = Math.max(...takaPoisa);
console.log(max);

//Both provide same result
console.log(allAges);
console.log(allAges2);