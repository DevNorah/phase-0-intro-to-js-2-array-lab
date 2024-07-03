const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat (bob){
    cats.push(bob);
}

function destructivelyPrependCat (bobby) {
    cats.unshift(bobby);
}

function destructivelyRemoveLastCat () {
    cats.pop();
}

function destructivelyRemoveFirstCat (){
    cats.shift();
}

function appendCat(knight){
    return [...cats, knight];
}

function prependCat(knight){
    return [knight, ...cats];
}

function removeLastCat(){
    return cats.slice(0, -1);
}

function removeFirstCat(){
    return cats.slice(1);
}