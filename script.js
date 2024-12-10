document.getElementById('text-input').addEventListener('input', countCharacters);
document.getElementById('clear-button').addEventListener('click', clearText);

function countCharacters() {
    const text = document.getElementById('text-input').value;
    
 
    const totalCount = text.length;
    

    const punctuationRegex = /[，。！？、：；「」『』（）［］【】《》〈〉""'']/g;
    const punctuationCount = (text.match(punctuationRegex) || []).length;
    
 
    const charCount = totalCount - punctuationCount;
    

    document.getElementById('total-count').textContent = totalCount;
    document.getElementById('punctuation-count').textContent = punctuationCount;
    document.getElementById('char-count').textContent = charCount;
}

function clearText() {
    document.getElementById('text-input').value = '';

    document.getElementById('total-count').textContent = '0';
    document.getElementById('punctuation-count').textContent = '0';
    document.getElementById('char-count').textContent = '0';
} 
