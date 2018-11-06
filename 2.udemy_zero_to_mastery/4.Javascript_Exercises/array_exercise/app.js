//practice using various methods on an array

var array = ["Banana", "Apples", "Oranges", "Blueberries"];

array.shift();

array.push("Kiwi");

array.splice(0,1);

array.reverse();


//access "Oranges" in the following array

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

array2[1][1][0];