const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let index = ingredients.length;

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < index) {
  console.log(ingredients[i]);
  i ++;
}
// Write a for loop that prints out the contents of ingredients:
for (let j = 0 ; j < index ; j++) {
  console.log(ingredients[j]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let z = index-1 ; z >= 0 ; z--) {
  console.log(ingredients[z]);
}