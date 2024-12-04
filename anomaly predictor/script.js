function changeColor() {
    const colors = ['#f00', '#0f0', '#00f', '#ff0', '#f0f'];
    let currentColorIndex = 0;
  
    setInterval(() => {
      document.body.style.background = `linear-gradient(to right, ${colors[currentColorIndex]}, ${colors[(currentColorIndex + 1) % colors.length]})`;
      currentColorIndex = (currentColorIndex + 1) % colors.length;
    }, 5000); // Adjust the interval time as needed
  }
  
  changeColor();
  
  document.getElementById('anomalyForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Input values
    const headerType = document.getElementById('headerType').value.trim().toUpperCase();
    const portNumber = parseInt(document.getElementById('portNumber').value, 10);
    const packetCount = parseInt(document.getElementById('packetCount').value, 10);
  
    // Result container
    const resultDiv = document.getElementById('result');
  
    // Basic validation
    if (headerType !== 'TCP' && headerType !== 'UDP') {
      resultDiv.textContent = 'Only TCP and UDP header types are supported.';
      return;
    }
  
    if (portNumber > 65535) {
      resultDiv.textContent = 'Invalid port number.';
      return;
    }
  
    // Anomaly detection (simplified example)
    // Replace with more sophisticated statistical or machine learning techniques
    const threshold = 1000; // Adjust threshold based on historical data
    if (packetCount > threshold) {
      resultDiv.textContent = 'Anomaly detected: High packet count.';
    } else {
      resultDiv.textContent = 'No anomaly detected.';
    }
  });