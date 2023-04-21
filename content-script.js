const headers = document.querySelectorAll('h1, h2, h3, h4'); // list

function createList(nodeList) {
  const ul = document.createElement('ul');
  ul.classList.add('toc-list')
  ul.classList.add('hidden');

  nodeList.forEach(node => {
    const li = document.createElement('li');
    li.classList.add(node.tagName); // for indentation
    li.innerText = node.innerText; // display
    li.addEventListener('click', () => {
      node.scrollIntoView()
      node.classList.add('highlight');
      setTimeout(() => node.classList.remove('highlight'), 1000);
      document.querySelector('.toc-list').classList.toggle('hidden');
      document.querySelector('.toc-button').classList.toggle('hidden');
    });
    ul.appendChild(li);
  })

  return ul;
}

const list = createList(headers);

function createButton(ul) {
  // initialized with the list hidden
  const button = document.createElement('button');
  button.classList.add('toc-button');
  // click on it to open the list
  button.addEventListener('click', () => {
    ul.classList.toggle('hidden');
    button.classList.toggle('hidden');
  });
  // once you click on a list item, collapse the list
  button.innerText = 'TOC';
  return button;
}

const button = createButton(list);


document.querySelector('body').appendChild(button);
document.querySelector('body').appendChild(list);
