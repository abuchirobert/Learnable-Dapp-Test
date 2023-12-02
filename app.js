document.addEventListener('DOMContentLoaded', async function() {
  // Check if Web3 is injected by the browser (MetaMask)
  if (typeof window.ethereum !== 'undefined') {
    // Web3 instance
    window.web3 = new Web3(window.ethereum);

    try {
      // Request account access if needed
      await window.ethereum.enable();

      // Get the current account addresses
      const accounts = await window.web3.eth.getAccounts();

      // Display the wallet address on the page
      const walletAddressElement = document.getElementById('walletAddress');
      walletAddressElement.textContent = `Wallet Address: ${accounts[0]}`;
    } catch (error) {
      console.error('Error accessing wallet:', error);
    }
  } else {
    // If the browser doesn't have Web3 or MetaMask installed
    console.error('Please install MetaMask to use this dApp');
  }
});
