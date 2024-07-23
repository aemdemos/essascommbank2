
export default function decorate(block) {
  // Adding classes to elements for styling
  block.classList.add('hero');

  // Extracting and restructuring necessary elements
  const innerDiv = block.querySelector('div > div');
  innerDiv.classList.add('hero-content');

  const picture = innerDiv.querySelector('picture');
  picture.classList.add('hero-image');

  const heading = innerDiv.querySelector('h1');
  heading.classList.add('hero-heading');

  const paragraphs = innerDiv.querySelectorAll('p');
  paragraphs[0].classList.add('hero-description');
  paragraphs[1].classList.add('hero-offer');

  const links = innerDiv.querySelectorAll('a');
  links[0].classList.add('hero-link', 'hero-link-primary');
  links[1].classList.add('hero-link', 'hero-link-secondary');
}
