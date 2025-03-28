function checkForSpam(message) {
    const prohibitedWords = ['sale', 'spam'];
    const movedSymbols = message.toLowerCase().replace(/[\[!?,\]]+/g, '');
    const trimmedSentence = movedSymbols.split(' ');

    return trimmedSentence.some((word) => prohibitedWords.includes(word));
}


console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
