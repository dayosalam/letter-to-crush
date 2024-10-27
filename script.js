const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const tenorGifEmbed = document.querySelector(".tenor-gif-embed-container");
const contentContainer = document.querySelector(".content-container"); // New parent div


// Initially hide the Yes button
yesBtn.style.display = "none";

// Change text and replace the initial gif with the Tenor GIF when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "Congrats you get a lifetime of Sara😘";

  // Get the position and size of the original gif
  const gifRect = gif.getBoundingClientRect();

  // Set the Tenor embed position to match the original gif's position within the content container
  tenorGifEmbed.style.position = "absolute";
  tenorGifEmbed.style.top = gifRect.top - contentContainer.getBoundingClientRect().top + "px";
  tenorGifEmbed.style.left = gifRect.left - contentContainer.getBoundingClientRect().left + "px";
  tenorGifEmbed.style.width = gifRect.width + "px";
  tenorGifEmbed.style.height = gifRect.height + "px";

  gif.style.display = "none";  // Hide the initial gif
  tenorGifEmbed.style.display = "block";  // Show the hidden Tenor GIF
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {

  // Show the Yes button when hovering over the No button
  yesBtn.style.display = "block";

  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute"; // Ensure button has absolute positioning
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

// Move the No button randomly when it is clicked
noBtn.addEventListener("click", () => {

  // Show the Yes button when hovering over the No button
  yesBtn.style.display = "block";

  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute"; // Ensure button has absolute positioning
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

