
export default function decorate(block) {
  // Add the 'cc2' class to the block if not already present
  if (!block.classList.contains('cc2')) {
    block.classList.add('cc2');
  }

  // Select all the child divs within the block
  const childDivs = block.querySelectorAll(':scope > div > div');

  // Add the 'card' class to each child div
  childDivs.forEach((div) => {
    div.classList.add('card');
  });

  // Adjust the structure and classes for each card
  childDivs.forEach((card, index) => {
    const img = card.querySelector('img');
    const h3 = card.querySelector('h3');
    const paragraphs = card.querySelectorAll('p');
    const ul = card.querySelector('ul');
    const tradeOffs = card.querySelector('h3[id^="trade-offs"]');
    const tradeOffsUl = tradeOffs.nextElementSibling;
    const applyNowLinks = card.querySelectorAll('a[href*="apply"]');

    // Add specific classes for styling
    img.classList.add('card-img');
    h3.classList.add('card-title');
    paragraphs.forEach((p, idx) => {
      if (idx === paragraphs.length - 1) {
        p.classList.add('close');
      } else if (applyNowLinks.length && p.contains(applyNowLinks[0])) {
        p.classList.add('apply-now');
      } else if (p.innerText.includes('Already a customer banking online with us?')) {
        p.classList.add('already-customer');
      } else if (p.innerText.includes("New customer or don't bank online with us?")) {
        p.classList.add('new-customer');
      } else {
        p.classList.add('card-info');
      }
    });
    ul.classList.add('card-features');
    tradeOffs.classList.add('trade-offs-title');
    tradeOffsUl.classList.add('trade-offs-list');

    // Add ribbon for specific cards
    if (index === 1 || index === 2) {
      const ribbon = document.createElement('div');
      ribbon.classList.add('ribbon');
      card.prepend(ribbon);
    }
  });
}
