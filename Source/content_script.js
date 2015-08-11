findAndReplace('You Guys', 'You Babies', document);
findAndReplace('You guys', 'You babies', document);
findAndReplace('you Guys', 'you Babies', document);
findAndReplace('you guys', 'you babies', document);
findAndReplace('YOU GUYS', 'YOU BABIES', document);

function findAndReplace(a, b, el) {
    if (!el) el = document.body; 
    var nodes = el.childNodes;
    for (var n = 0; n < nodes.length; n++) {
        if (nodes[n].nodeType == Node.TEXT_NODE) {
            nodes[n].textContent = nodes[n].textContent.replace(a, b);
        } else {
            findAndReplace(a, b, nodes[n]);
        }
    }
}