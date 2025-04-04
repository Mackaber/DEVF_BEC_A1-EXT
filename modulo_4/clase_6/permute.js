// Permute

function permute (str, path = '', result = [])  {
    if(str.length === 0) {
        result.push(path);
    } else {
        for(let i=0; i< str.length; i++) {
            const remaining = str.slice(0,i) + str.slice(i + 1)
            console.log(remaining);
            permute(remaining, path + str[i], result);
        }
    }
    return result;
}

const result = permute('abcde').length;
console.log(result);