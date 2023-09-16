/**

- isArrayLengthOdd(numbers):
- receives array `numbers`
- returns true if array has an odd number of elements
- returns false otherwise
- 
- e.g.
- isArrayLengthOdd([1, 2, 3]) -> true
- isArrayLengthOdd([1, 2, 3, 4]) -> flase
*/
function isArrayLengthOdd(numbers) {
    let n = numbers.length;
    if (n%2 == 0){
        return false;
    }
    else{
        return true;
    }
    }
console.log(isArrayLengthOdd([1, 2, 3]));
console.log(isArrayLengthOdd([1, 2, 3, 4]));
    
    /**
    
    - isArrayLengthEven(numbers):
    - receives array `numbers`
    - returns true if array has an even number of elements
    - returns false otherwise
    - 
    - e.g.
    - isArrayLengthEven([1, 2, 3]) -> false
    - isArrayLengthEven([1, 2, 3, 4]) -> true
    */
    function isArrayLengthEven(numbers) {
    let n = numbers.length;
    if (n%2 == 0){
        return true;
    }
    else{
        return false;
    }
    }
    console.log(isArrayLengthEven([1, 2, 3]));
    console.log(isArrayLengthEven([1, 2, 3, 4]));
    
    
    /**
    
    - addLailaToArray(instructors):
    - receives array `instructors`
    - returns a new array that's a copy of array `instructors` with additional string "Laila"
    - 
    - e.g.
    - addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
    */
    function addLailaToArray(instructors) {
    let copyI = instructors;
    copyI.push("Laila");
    return copyI;
    }
    
    console.log(addLailaToArray(["Mshary", "Hasan"]));

    /**
    
    - eliminateTeam(teams):
    - receives array `teams`
    - removes the last element from the array and return it
    - 
    - e.g.
    - eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
    */
    function eliminateTeam(teams) {
    teams.pop();
    return teams;
    }
    
    console.log(eliminateTeam(["Brazil", "Germany", "Italy"]));

    /**
    
    - secondHalfOfArrayIfItIsEven(fruits):
    - receives array `fruits`
    - returns a new array that's the second half of the original array if it has an even number of elements
    - returns an empty array if it has an odd number of elements
    - 
    - e.g.
    - secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
    - secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
    🌶️🌶️🌶️
    */
    function secondHalfOfArrayIfItIsEven(fruits) {
    let n = fruits.length;
    if(n%2 == 0){
        let half = n/2;
        let newFruits = fruits.slice(half, n);
        return newFruits;
    }else{
        let empty = [];
        return empty;
    }
    }
    console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]));
    console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]));
    /**
    
    - youGottaCalmDown(shout):
    - receives a string `shout`
    - returns the string `shout` with at most one exclamation mark (!) at the end.
    - 
    - e.g.
    - youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
    - youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
    - youGottaCalmDown("Hellooooo") -> "Hellooooo"
    - 
    - Hint:
    - Use number method .indexOf()
    - Use string method .slice()
    🌶️🌶️🌶️
    */
    function youGottaCalmDown(shout) {
    n = shout.length;
    test = shout.indexOf("!");
    return (shout.slice (0, test+1));
    }
    console.log(youGottaCalmDown("HI!!!!!!!!!!"));
    console.log(youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!"));
    console.log(youGottaCalmDown("Hellooooo"));

 