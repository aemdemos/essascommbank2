
export default function decorate(block) {
  // Add classes to the elements to be styled
  const h2 = block.querySelector('h2');
  const p = block.querySelector('p');
  const a = block.querySelector('a');

  if (h2) h2.classList.add('callout-personal-heading');
  if (p) p.classList.add('callout-personal-paragraph');
  if (a) a.classList.add('callout-personal-link');
}
