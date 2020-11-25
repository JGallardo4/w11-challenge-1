/*
- Start with a simple array of strings (animals, fruits, etc...) that is atleast 5 elements long 
- Create a button with the label of the first array element and append it to a div 
- When that button is clicked, create a button from the next array element, and so on... 
- Once there is a button for every element in the array, the final button click should do nothing 
- Hint: Research self-referencing functions 
*/

let dog_names = [
    "betty",
    "casper",
    "rolo",
    "buster",
    "bear",
    "fido",
    "chomper",
    "lucky"
];

let dog_name_counter = 1;

// Create initial button
let button_container = document.getElementById("my-buttons");

let initial_button = document.createElement("button");
initial_button.innerText = dog_names[0];
initial_button.onclick = function() { showNext(dog_names); };
button_container.appendChild(initial_button);

function showNext(source_array) {
    if (dog_name_counter < source_array.length) {
        let next_button = document.createElement("button");
        next_button.innerText = source_array[dog_name_counter];
        next_button.onclick = function() { showNext(dog_names); };
        button_container.appendChild(next_button);
        dog_name_counter++;
    }
}