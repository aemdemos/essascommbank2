
export default function decorate(block) {
  // Adding classes to the block and its children
  block.classList.add('help');

  const divs = block.querySelectorAll(':scope > div > div');
  divs.forEach((div) => {
    div.classList.add('help-item');
    const picture = div.querySelector('picture');
    picture.classList.add('help-picture');
    const aTag = div.querySelector('a');
    aTag.classList.add('help-link');

    const textLink = div.querySelector('li:last-child a');
    textLink.classList.add('help-text-link');
  });
}
