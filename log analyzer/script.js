const urlInput = document.getElementById('url-input');
const analyzeButton = document.getElementById('analyze-button');
const resultDiv = document.getElementById('result');

analyzeButton.addEventListener('click', () => {
    const url = urlInput.value;

    // Basic URL validation
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        resultDiv.textContent = 'Please enter a valid URL (http:// or https://).';
        return;
    }

    // Phishing keyword check
    const phishingKeywords = ['urgent', 'limited time', 'confirm', 'verify', 'free', 'exclusive'];
    const isPhishing = phishingKeywords.some(keyword => url.toLowerCase().includes(keyword));

    // URL length check (longer URLs are often suspicious)
    const isLongUrl = url.length > 100;

    // Check for common malicious TLDs (top-level domains)
    const maliciousTLDs = ['.tk', '.ml', '.cf', '.ga'];
    const isMaliciousTLD = maliciousTLDs.some(tld => url.endsWith(tld));

    // Display results
    const result = document.createElement('p');
    if (isPhishing || isLongUrl || isMaliciousTLD) {
        result.textContent = 'Warning: This URL may be suspicious. Exercise caution.';
        result.classList.add('unsafe');
    } else {
        result.textContent = 'This URL appears to be safe.';
        result.classList.add('safe');
    }
    resultDiv.appendChild(result);
});