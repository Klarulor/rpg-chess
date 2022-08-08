const symbols = "qwertyuiopasdfghjklzxcvbnm1234567890"
export function generateString(count: 4): string{
    let string = "";
    for(let i = 0; i < count; i++){
        string += symbols[Math.floor(Math.random() * (symbols.length-1))];
    }
    return string;
}