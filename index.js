function getFirstSelector(selector) {
    return document.querySelector(selector)
};

function nestedTarget() {
    return document.querySelector('div#nested div.target');
};

function increaseRankBy(n) {
    const rankedLists = document.querySelectorAll('.ranked-list')
    for (let i = 0; i < rankedLists.length; i++) {
        rankedLists[i].innerHTML = parseInt(i + n)
      }
};

function deepestChild() {
    return document.querySelector('#grand-node div div div div')
};