/*
 *  README!!!
 *  For the problems below, use only string methods / conditionals, etc
 *  it may be tempting to use concepts like looping but do not attempt! 
 */
 
 
/* 1
    @func makeEven
    @param {string} str
    @returns {string}
    @desc - if the input string is odd number of characters, 
            add a "#" to make it even number of characters
            otherwise return string
    @example - makeEven('taq');  // 'taq#'
    @example - makeEven('john'); // 'john'
*/

// const makeEven = (str) => {(str.length % 2 === 0) ? str.padStart(1,'#') : str}
// console.log(makeEven('hell'));

// const makeEven = function(str) {

// const str = 'hi'
// console.log(('hi').length)
// console.log(str.length)

const makeEven = function(str) {
    let myStr = str + '';
    if ((myStr.length % 2) === 1) {
        return myStr.concat('#');
    } else {
        return myStr;
    }
}

console.log(makeEven('hello'));
console.log(makeEven('hell'));


/* 2
    @func getLastChar
    @param {string} str
    @returns {string}
    @desc - return the last character in string
    @example - getLastChar('taq'); // 'q'
*/

const getLastChar = (str) => {return str[str.length - 1]}

console.log(getLastChar('hiya'));

/* 3
    @func get3rdChar
    @param {string} str
    @returns {string}
    @desc - return the third character in string
    @example - get3rdChar('taq'); // 'q'
    @example - get3rdChar('mo'); // 'not enough characters!'
*/

// const get3rdChar = (str) => {(str.length >= 3) ? str[2] : 'not enough characters!'}

const get3rdChar = function(str) {
    if (str.length >= 3) {
        return str[2];
    } else {
        return 'not enough characters!';
    }
}

console.log(get3rdChar('hiya'));
console.log(get3rdChar('extremely'));

/* 4
    @func get3rdCharFromEnd
    @param {string} str
    @returns {string}
    @desc - return the third character _FROM THE END_ in string
    @example - get3rdCharFromEnd('taq'); // 't'
    @example - get3rdCharFromEnd('mo'); // 'not enough characters!'
    @example - get3rdCharFromEnd('taq karim'); // 'r'
*/

const get3rdCharFromEnd = function(str) {
    if (str.length >=3) {
        return str[str.length - 3];
    } else {
        return 'not enough characters!';
    }
}

console.log(get3rdCharFromEnd('infamous'));

/* 5
    @func startsWithVowel
    @param {string} str
    @returns {boolean}
    @desc - if string STARTS with vowel, return true
    @example - startsWithVowel('taq'); // false
    @example - startsWithVowel('Dfghjkl'); // false
    @example - startsWithVowel('andy'); // true
    @example - startsWithVowel('Andy'); // true
*/

const startsWithVowel = function(str) {
    let firstChar = str.charAt(0);
    let vowels = ['a', 'e', 'i', 'o', 'u']
    if (vowels.includes(firstChar)) {
    //if (firstChar === 'a' || firstChar === 'e' || firstChar === 'i' || firstChar === 'o' || firstChar === 'u') {
        return true;
    } else {
        return false;
    }
}

console.log(startsWithVowel('marshmallow'));
console.log(startsWithVowel('ice cream'));

/* 6
    @func endsWithVowel
    @param {string} str
    @returns {boolean}
    @desc - if string ENDS with vowel, return true
    @example - endsWithVowel('taq'); // false
    @example - endsWithVowel('Dfghjkl'); // false
    @example - endsWithVowel('andi'); // true
    @example - endsWithVowel('AndI'); // true
*/

const endsWithVowel = function(str) {
    let lastChar = str.charAt(str.length -1);
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(lastChar)) {
        return true;
    } else {
        return false;
    }
}

console.log(endsWithVowel('marshmallow'));
console.log(endsWithVowel('pizza'));

/* 7
    @func hasVowels
    @param {string} str
    @returns {boolean}
    @desc - if string has at least one vowel, return true
    @example - hasVowels('taq'); // true
    @example - hasVowels('TAQ'); // true
    @example - hasVowels('dfghjkl'); // false
    @example - hasVowels('taq karim'); // true
*/

const hasVowels = function(str) {
    let myStr = (str).toLowerCase();
    console.log(`Checking '${myStr}'...`);
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (i = 0; i < (myStr.length - 1); i++) {
        if (vowels.includes(myStr[i])) {
            return true,  `at '${str[i]}'... match! String '${str}' contains a vowel.`;
        } else {
            console.log(`at ${str[i]}... not yet`);
        }
    }
    return false;
}

console.log(hasVowels('marshmallow'));
console.log('#############');
console.log(hasVowels('pizza'));
console.log(hasVowels('strong'));
console.log(hasVowels('strOng'));

// console.log('wow'.split(' '))

/* 8
    @func hasUpperCase
    @param {string} str
    @returns {boolean}
    @desc - if string has at least one uppercase letter, return true
    @example - hasUpperCase('tAq'); // true
    @example - hasUpperCase('TAQ'); // true
    @example - hasUpperCase('tag'); // false
    @example - hasUpperCase('taq karim'); // false
*/

const hasUpperCase = function(str) {
    let strArray = Array.from(str);
    if (strArray.contains(strArray("meow"))){

    }
}

/* 9
    @func isPalindromic
    @param {string} str
    @returns {boolean}
    @desc - if string is a palindrome (ie: the same forward and backwards, like "racecar") return true
    @example - isPalindromic('racecar'); // true
    @example - isPalindromic('racecars'); // false
    @example - isPalindromic('bats see bees stab'); // false
    @example - hasUpperCase('taq karim'); // false
*/

const isPalindromic = function(str) {
    let strArray = str.split("");
    // console.log(strArray)
    backwardsArray = strArray.reverse();
    // console.log(backwardsArray)
    backwardsStr = backwardsArray.join("");
    // console.log(backwardsStr)

    if (str == backwardsStr) {
        return true;
    }
    return false;
}

console.log(isPalindromic('wowser'));
console.log(isPalindromic('racecar'));

/* 10
    @func getInitials
    @param {string} str
    @returns {string}
    @desc - given a name (ie: "taq karim"), return the initials (ie: "tk")
            assume there will always be at least one space between first name/last name
            assume only first and last names are provided
    @example - getInitials('taq karim'); // "tk"
    @example - getInitials('mo    mosayed'); // "mm"
    @example - getInitials('John       Smith'); // "js"
    @example - getInitials('sue RonaN'); // "sr"
*/

const getInitials = function(str) {
    let firstLast = str.split(" ");
    console.log(firstLast)
    let firstName1st = ((firstLast[0])[0])
    let lastName1st = ((firstLast[firstLast.length - 1])[0])
    return `${firstName1st}${lastName1st}`
}

console.log(getInitials('vincent galarza'))
console.log(getInitials('vincent    galarza'))
console.log(getInitials('vincent         galarza'))

/* 11
    @func isPerfectStr
    @param {string} str
    @returns {boolean}
    @desc - a "perfect" string (not real, I just made this up) is defined to be a string such that:
            1. has more than three characters
            2. the three middle characters are arranged such that first character is vowel,
                second character is consonant and last character is another vowel
            3. the three middle characters are palindromic
    @example - isPerfectStr('ab'); // false
    @example - isPerfectStr('aba'); // true
    @example - isPerfectStr('asdfaeKeccc'); // false
    @example - isPerfectStr('asdfaeKeccccc'); // true
*/

const isPerfectStr = function(str) {
    if((str.length > 3) && (str.length % 3 === 2)){
        console.log("has three middle characters");
    } else {
        return false
    }
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let vowelRegExp = /[a|e|i|o|u]/gi
    let consRegExp = /[^a|e|i|o|u]/gi
    // if (str.match(/[A|E|I|O|U]/gi)) {
    let strMiddle = ((str.length / 2) - 1)
    console.log(strMiddle)
    let strMiddleFirst = strMiddle - 1
    let strMiddleLast = strMiddle + 1
    let threeMid = [(str[strMiddleFirst]), (str[strMiddle]), (str[strMiddleLast])]
    console.log(threeMid)

    // if (threeMid[0].match(vowelRegExp) && threeMid[1].match (consRegExp) && threeMid[2].match(vowelRegExp)) {
    //     return true
    // } else {
    //     return "string does not have three middle characters";
    // }
}

console.log(isPerfectStr('iiiii'))

// if (str.match(consRegExp)) {
//     console.log('YES')
// }

// if ((str.length) > 3 && vowels.contains(str[(MIDDLE_THREE)])){}

// get middle three characters of a string
// match(/${(vowel)} | ${(consonant)} | ${(vowel)})

/* 12
    @func strMasher
    @param {string} str1
    @param {string} str2
    @returns {string}
    @desc - given two strings, str1 and str2, return a new string
            with str2 mashed into the middle of str1
    @example - strMasher('help', 'me'); // "hemelp"
    @example - capitalLast('hello', 'wrold'); // "helwroldlo"
*/

const strMasher = function(str1, str2) {
    const middleIndex = Math.ceil(str1.length / 2);

    const firstHalf = str1.slice(0, middleIndex);
    const secondHalf = str1.slice(middleIndex, str1.length);

    return firstHalf + str2 + secondHalf;
}

console.log(strMasher('help', 'me'), 'hemelp')
console.log(strMasher('hello', 'wrold'), 'helwroldlo')