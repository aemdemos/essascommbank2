
export default function decorate(block) {
  // Add a container div to wrap the entire content
  const container = document.createElement('div');
  container.classList.add('hero-container');

  // Add a div for the text content
  const textContainer = document.createElement('div');
  textContainer.classList.add('hero-text-container');

  // Move the relevant elements to the text container
  while (block.firstChild) {
    textContainer.appendChild(block.firstChild);
  }

  // Append the text container and original image to the container
  container.appendChild(textContainer);

  // Add a new image div for the background image
  const imageDiv = document.createElement('div');
  imageDiv.classList.add('hero-image');
  container.appendChild(imageDiv);

  // Append the container to the block
  block.appendChild(container);
}
