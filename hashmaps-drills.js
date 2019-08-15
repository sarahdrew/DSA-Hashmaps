const HashMap = require('./HashMap');

function main() {
    const lotr = new HashMap();
    lotr.set('Hobbit', 'Bilbo');
    lotr.set('Hobbit', 'Frodo');
    lotr.set('Wizard', 'Gandolf');
    lotr.set('Human', 'Aragon');
    lotr.set('Elf', 'Legolas');
    lotr.set('Maiar', 'The Necromancer');
    lotr.set('Maiar', 'Sauron');
    lotr.set('RingBearer', 'Gollum');
    lotr.set('LadyOfLight', 'Galadriel');
    lotr.set('HalfElven', 'Arwen');
    lotr.set('Ent', 'Treebeard');
    console.log(lotr);

}

main();

//1. a. Yes have hased all items, but some have been overwritten.
//b. Values: Sauron and Frodo.  Replaced previously written values at those keys
//c. Capacity of hash table: 24, Capacity was tripled when the size was overrun.

//WhattDoesThisDo
//Output of code: 20 and 10 because the same key is being used and overwritten. 


//Remove Duplicates
function removeDuplicates(string) {
    //new hashmap
    const hash = new HashMap();
    let result = '';
    //loop through whole string
    for (let i = 0; i < string.length; i++) {
        try {
            hash.get(string[i]);
        }
        catch (e) {
            hash.set(string[i], string[i]);
            result += string[i];
        }
    }
    console.log(`result: `, result);
}

removeDuplicates('google all that you think can think of');

//Any permutation a palindrome
//check whether any permuttation of a sttring is a palindrome. should give true or false


//traverse over the string and determine the value of count on the fly 
//update the number of occurences of the character in the map and check if value becomes even or odd

function palindrome(string) {
    const hash = new HashMap();
    for (let i = 0; i < string.length; i++) {
        try {
            let check = hash.get(string[i]);
            hash.set(string[i], ++check);
        }
        catch (e) {
            hash.set(string[i], 1);
        }
    }

    let odd = null;
    for (let i = 0; i < string.length; i++) {
        const charCount = hash.get(string[i]);
        if (charCount % 2 === 1) {

            if (odd === null || odd === string[i]) {
                odd = string[i];
            }
            else {
                return false;
            }
        }


    }
    return true;
};

//anagram grouping
//write an algorithm to group a list of words into anagrams
//':)

function anagramGrouping(array) {
    //set result to empty array
    let result = [];
    const subArray = new Map();

    array.forEach(word => {
        //split, sort, THEN join
        const alphabetized = word.split('').sort().join('');
        //set current to get alphabetized
        let curr = subArray.get(alphabetized);
        if (curr === undefined) {
            subArray.set(alphabetized, [word]);
        }


        else {
            const array = [...curr, word];
            subArray.set(alphabetized, array);
        }
    }
    );
    for (let value of subArray.values()) {
        //push value
        result.push(value);
    }


    return result;
}


//seperate chaining
//in new file