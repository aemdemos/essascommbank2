
export default function decorate(block) {
  const container = document.createElement('div');
  container.classList.add('callout-business-container');

  const textContainer = document.createElement('div');
  textContainer.classList.add('callout-business-text');

  const heading = block.querySelector('h2');
  heading.classList.add('callout-business-heading');
  textContainer.appendChild(heading);

  const linkContainer = document.createElement('div');
  linkContainer.classList.add('callout-business-link-container');

  const link = block.querySelector('a');
  link.classList.add('callout-business-link');
  linkContainer.appendChild(link);

  container.appendChild(textContainer);
  container.appendChild(linkContainer);

  block.innerHTML = '';
  block.appendChild(container);
}
