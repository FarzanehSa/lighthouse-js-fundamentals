let lowNum = 100;
let upNum = 200;
for (let i = lowNum ; i <= upNum ; i++) {

  i % 3 === 0 ? (i % 4 === 0 ? console.log('LoopyLighthouse') : console.log('Loopy')) : (i % 4 === 0 ? console.log('Lighthouse') : console.log(i) );
  
}