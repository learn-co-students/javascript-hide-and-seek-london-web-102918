
const getFirstSelector = selector => {
  return document.querySelector(selector)
}

const nestedTarget = () => {
  return document.querySelector('div div div div div')
}
// function nestedTarget (){
//
// }
const deepestChild = () => {
  return document.querySelector('#grand-node').firstElementChild.firstElementChild.firstElementChild.firstElementChild
}

// MY 1000% BETTER SOLUTION
// const increaseRankBy = (n) => {
//   // numberOfChildElements = document.querySelectorAll('.ranked-list').length
//   //
//   const lis = document.querySelectorAll('.ranked-list li');
//     lis.forEach(li => li.innerHTML = parseInt(li.innerHTML) + parseInt(n));
// }



function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children;

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}
