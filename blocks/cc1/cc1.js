
export default function decorate(block) {
  // Add container class to the block
  block.classList.add('cc1-container');

  // Iterate through child divs (each credit card section)
  const sections = block.querySelectorAll('.cc1 > div > div');
  sections.forEach((section) => {
    section.classList.add('cc1-card');

    // Add class to images
    const img = section.querySelector('picture img');
    if (img) {
      img.classList.add('cc1-card-img');
    }

    // Add class to headings
    const headings = section.querySelectorAll('h3, h2');
    headings.forEach((heading) => {
      heading.classList.add('cc1-heading');
    });

    // Add class to paragraphs
    const paragraphs = section.querySelectorAll('p');
    paragraphs.forEach((paragraph) => {
      paragraph.classList.add('cc1-paragraph');
    });

    // Add class to lists
    const lists = section.querySelectorAll('ul');
    lists.forEach((list) => {
      list.classList.add('cc1-list');
    });

    // Add class to links
    const links = section.querySelectorAll('a');
    links.forEach((link) => {
      link.classList.add('cc1-link');
    });

    // Add class to buttons
    const buttons = section.querySelectorAll('a.button');
    buttons.forEach((button) => {
      button.classList.add('cc1-button');
    });
  });
}
