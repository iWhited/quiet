
const forwarderOrigin = 'http://localhost:9010'

const initialize = () => {
  //Basic Actions Section
  const onboardButton = document.getElementById('connectButton');

  //Created check function to see if the MetaMask extension is installed
  const isMetaMaskInstalled = () => {
    //Have to check the ethereum binding on the window object to see if it's installed
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  };

  const onClickConnect = async () => {
    try {
      // Will open the MetaMask UI
      // You should disable this button while the request is pending!
      await ethereum.request({ method: 'eth_requestAccounts' });
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      const accountsDisplayed = start_and_end(accounts[0]);
      onboardButton.innerText = 'Connect'.innerHTML = accountsDisplayed || 'Not able to get accounts';
    } catch (error) {
      console.error(error);
    }
  };

  const MetaMaskClientCheck = () => {
    //Now we check to see if Metmask is installed
    if (!isMetaMaskInstalled()) {
      //If it isn't installed we ask the user to click to install it
      onboardButton.innerText = 'MetaMask not detected';
      //The button is now disabled
      onboardButton.disabled = true;
    } else {
      //If MetaMask is installed we ask the user to connect to their wallet
      onboardButton.innerText = 'Connect';
      //When the button is clicked we call this function to connect the users MetaMask Wallet
      onboardButton.onclick = onClickConnect;
      //The button is now avaiable
      onboardButton.disabled = false;
    }
  };
  MetaMaskClientCheck();

  //Add ellipsis in the middle of a string
  function start_and_end(str) {
      return str.substr(0, 4) + '...' + str.substr(str.length-4, str.length);
  }
};
window.addEventListener('DOMContentLoaded', initialize)