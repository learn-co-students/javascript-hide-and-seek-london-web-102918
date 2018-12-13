function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget() {
  return document.querySelector('#nested .target');
};

function deepestChild() {
  let div = document.querySelector('#grand-node');
  let divDown = div.children[0];
  while (divDown) {
    div = divDown;
    divDown = div.children[0];
  }
  return div
};

function increaseRankBy(n) {
  const listItems = document.querySelectorAll('ul.ranked-list li');
  for (const listItem of listItems) {
    listItem.innerHTML = parseInt(listItem.innerHTML) + n
  };
};
    // = (parseInt(listItem.innerHTML + n).toString()
  // };
  //
  // for (let count = 0; count < listItems.length; count++) {
  //   listItems[count].innerHTML = (parseInt(listItems[count]) + n).toString();
  // };

// increaseRankBy(4)
