
// JavaScript Code (decorate.js)

export default function decorate(block) {
  // Adding a class to the block for styling
  block.classList.add('howto');

  // Finding all direct child divs
  const divs = block.querySelectorAll(':scope > div > div');

  // Adding class to each direct child div
  divs.forEach((div) => {
    div.classList.add('howto-card');
  });

  // Finding all h3 elements within the block
  const headings = block.querySelectorAll('h3');

  // Adding class to each h3 element
  headings.forEach((heading) => {
    heading.classList.add('howto-heading');
  });

  // Finding all p elements within the block
  const paragraphs = block.querySelectorAll('p');

  // Adding class to each p element
  paragraphs.forEach((paragraph) => {
    paragraph.classList.add('howto-description');
  });
}
