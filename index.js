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
        deepestChild() 
    } 
        console.log(x)
        return x  
}

// deepestChild()


function increaseRankBy(n) {
    const list = document.querySelectorAll('.ranked-list li')
        for(let i =0; i < list.length; i++) {
            let parsed = parseInt(list[i].innerHTML)
            list[i].innerHTML = parsed + n
        }
}



