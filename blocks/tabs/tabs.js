
export default function decorate(block) {
  // Set classes to elements
  const tabsContainer = block.querySelector('div');
  tabsContainer.classList.add('tabs-container');
  
  const tabsContent = tabsContainer.querySelector('div');
  tabsContent.classList.add('tabs-content');
  
  const ul = tabsContent.querySelector('ul');
  ul.classList.add('tabs-list');
  
  const lis = ul.querySelectorAll('li');
  lis.forEach((li) => {
    li.classList.add('tab-item');
    const a = li.querySelector('a');
    a.classList.add('tab-link');
  });
  
  const p = tabsContent.querySelector('p');
  p.classList.add('help-link-container');
  
  const helpLink = p.querySelector('a');
  helpLink.classList.add('help-link');
}
