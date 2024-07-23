
export default function decorate(block) {
  block.classList.add('support');

  const sections = block.querySelectorAll('.support > div > div');
  sections.forEach((section) => {
    section.classList.add('support-section');
    const title = section.querySelector('h3');
    if (title) {
      title.classList.add('support-title');
    }
    const lists = section.querySelectorAll('ul');
    lists.forEach((list) => {
      list.classList.add('support-list');
    });
    const links = section.querySelectorAll('a');
    links.forEach((link) => {
      link.classList.add('support-link');
    });
  });

  // Specifically style the "More tips" link as a button
  const moreTipsLink = block.querySelector('a[href*="support_manage"]');
  if (moreTipsLink) {
    moreTipsLink.classList.add('support-button');
  }
}
