function getFirstSelector(selector) {
  var element = document.querySelector(selector)
  return element
}

function nestedTarget() {
  var element = document.querySelector('#nested .target')
  return element
}

function increaseRankBy(n) {
  var element = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < element.length; i++) {
    element[i].innerHTML = (i + n).toString()
  }
  return element

}

function deepestChild() {
  var element = document.getElementById('grand-node')
  let nextelement = element.children[0]

  while (nextelement) {
    element = nextelement
    nextelement = element.children[0]
  }

  return element

}
