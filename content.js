// Create the sidebar
const sidebar = document.createElement('div');
sidebar.setAttribute('id', 'mySidebar');
sidebar.setAttribute('class', 'sidebar');

// Add the table of contents to the sidebar
const toc = document.createElement('ul');
toc.setAttribute('id', 'toc');
// You can generate the table of contents dynamically here
sidebar.appendChild(toc);

// Add the sidebar to the page
document.body.appendChild(sidebar);

// Get all header elements on the page
const headers = document.querySelectorAll('h1, h2, h3, h4');

const counts = {};

headers.forEach((header) => {
  if (header.tagName in counts) {
    counts[header.tagName]++;
  } else {
    counts[header.tagName] = 1;
  }
})
const mySet = new Set();
if ((counts.H1 + counts.H2 + counts.H3) > 10 ) {
  // filter up to h2
  mySet.add('H1');
  mySet.add('H2');
} else if ((counts.H1 + counts.H2 + counts.H3 + counts.H4) > 10 ) {
  mySet.add('H1');
  mySet.add('H2');
  mySet.add('H3');
} else {
  mySet.add('H1');
  mySet.add('H2');
  mySet.add('H3');
  mySet.add('H4');
}

// Loop through the header elements and add them to the table of contents
headers.forEach((header) => {
    const headerText = header.innerText;
    const headerTag = header.tagName;
    if (mySet.has(headerTag)) {
      // const headerID = header.getAttribute('id');
      const listItem = document.createElement('li');
      listItem.classList.add(headerTag);
      // const link = document.createElement('a');
      // link.textContent = headerText;
      // link.setAttribute('href', `#${headerID}`);
      // listItem.appendChild(link);
      listItem.addEventListener('click', () => {
        header.classList.add('highlight')
        setTimeout(() => header.classList.toggle('highlight'), 1000);
        header.scrollIntoView();
      })
      listItem.innerText = headerText;
      toc.appendChild(listItem);
    } 
})

// Create the open button
const openBtn = document.createElement('button');
openBtn.setAttribute('class', 'openbtn');
openBtn.innerHTML = '&#9776; Table of Contents';
openBtn.addEventListener('click', openSidebar);
document.body.appendChild(openBtn);

// Add the close button to the sidebar
const closeBtn = document.createElement('a');
closeBtn.setAttribute('href', 'javascript:void(0)');
closeBtn.setAttribute('class', 'closebtn');
closeBtn.addEventListener('click', closeSidebar);
closeBtn.innerHTML = '&times;';
sidebar.appendChild(closeBtn);

// Open the sidebar
function openSidebar() {
  sidebar.style.width = '250px';
  document.body.style.marginRight = '250px';
  openBtn.style.display = 'none';
}

// Close the sidebar
function closeSidebar() {
  sidebar.style.width = '0';
  document.body.style.marginRight = '0px';
  openBtn.style.display = 'block';
}

