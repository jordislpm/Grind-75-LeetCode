function isValid(s: string): boolean {

    let open = ["(", "[", "{"];
    let close = [")", "]", "}"];
    const arr = s.split("")
    for (let i = 0; i < arr.length; i++) {
        if (open.indexOf(arr[i]) === close.indexOf(arr[i + 1]) && close.indexOf(arr[i + 1]) !== -1) {
            arr.splice(i, 2);
            i = -1
        }
    }

    return arr.length === 0;
};



// Example 1:
// Input: s = "()"
// Output: true
//console.log(isValid("()"))


// Example 2:
// Input: s = "()[]{}"
// Output: true
//console.log(isValid("()[]{}"))


// Example 3:
// Input: s = "(]"
// Output: false
//console.log(isValid("(]"))


// Example 4:
// Input: s = "([])"
// Output: true
//console.log(isValid("([])"))