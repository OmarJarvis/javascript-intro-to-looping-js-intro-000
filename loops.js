function forLoop(heyy) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {


      heyy.push(`I am 1 strange loop.`);
    } else {
      heyy.push(`I am ${i} strange loops.`);
    }
  }


  return heyy;
}

function whileLoop(n) {
  while (countdown > 0) {
    console.log( --n);
  }
  return 'done';
}

