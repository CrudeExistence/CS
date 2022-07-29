//? Creating code from requested challenges

//! Sum Zero

const sumZero = (arr) => {
    for ( i=0; i<arr.length; i++) {
        for ( j=0; j<arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return true
            }
        }
    }
    return false
}

//* Time complexity: O(n^2)

// console.log(sumZero([1]))
// console.log(sumZero([1, 2]))
// console.log(sumZero([1, 2, 3]))
// console.log(sumZero([1, 2, 3, -2]))






const unique = (str) => {
    temp = ''
    tempStr = str.toLowerCase()
    for ( i=0; i<tempStr.length; i++) {
        if (temp.includes(tempStr[i])) {
            return false
        } else {
            temp += str[i]
        }
    }
    return true
}

//* Time complexity: O(n)

// console.log(unique("Monday"))
// console.log(unique("Moonday"))
// console.log(unique("Momday"))
// console.log(unique("Booyah"))





const isPangram = (str) => {
    alph1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    alph2 = []
    lowerStr = str.toLowerCase()
    for ( i=0; i<lowerStr.length; i++) {
        if (alph1.includes(lowerStr[i]) && !alph2.includes(lowerStr[i])) {
            alph2.push(lowerStr[i])
        } else {
            continue
        }
    }
    if (alph1.length === alph2.length) {
        return true
    } else {
        return false
    }
}

//* Time complexity: O(n)

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// console.log(isPangram("I like cats, but not mice"))






const findLongestWord = (lis) => {
    longest = 0
    for ( i=0; i<lis.length; i++) {
        if (lis[i].length > longest) {
            longest = lis[i].length
        } else {
            continue
        }
    }
    console.log(longest)
    return longest
}

//* Time complexity: O(n)

// findLongestWord(["hi", "hello"])





