export function generateLinkWithName(name) {
    const nameToLowerCase = name.toLowerCase();
    const words = nameToLowerCase.split(" ");
    let result = ""
    for(var i=0;i<words.length-1;i++) {
        result += words[i] + '-';
    }
    result += words[words.length-1];
    return result;   
} 