const generateBtn = document.getElementById('generate-btn');
const usernameInput = document.getElementById('username');
const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress-bar');
const resultMessage = document.getElementById('result-message');

generateBtn.addEventListener('click', () => {
  const username = usernameInput.value.trim();

  if (!username) {
    alert('Please enter your Roblox username!');
    return;
  }

  // Reset UI
  resultMessage.classList.add('hidden');
  progressBar.style.width = '0%';
  progressContainer.classList.remove('hidden');
  generateBtn.disabled = true;
  usernameInput.disabled = true;

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 10) + 5; // Increment progress randomly by 5-14%

    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      progressBar.style.width = '100%';

      setTimeout(() => {
        progressContainer.classList.add('hidden');
        resultMessage.textContent = `Sorry, ${username}, no free Robux here! This is just a satire site to warn you about scams. Stay safe! 🚫💎`;
        resultMessage.classList.remove('hidden');
        generateBtn.disabled = false;
        usernameInput.disabled = false;
      }, 800);
    } else {
      progressBar.style.width = `${progress}%`;
    }
  }, 300);
});
