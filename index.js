function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.querySelector('#nested .target');
}

let x = document.querySelector("#grand-node")

function deepestChild() {
    if (x.children[0]) {
    x = x.children[0]
     return deepestChild()
    }else{
        console.log(x)
        return x  }
}

// deepestChild()


function increaseRankBy(n) {
    const lists = document.querySelectorAll('.ranked-list li')
    for(let i =0; i < lists.length; i++) {
        let parsed = parseInt(lists[i].innerHTML)
        lists[i].innerHTML = parsed + n
    }

        
}

// function increaseRankBy(n) {
//     const lists = document.querySelectorAll('.ranked-list li')
//         lists.forEach(list => {
//             let parsed = parseInt(list[i].innerHTML)
//             list[i].innerHTML = parsed + n
//         })
//     }



