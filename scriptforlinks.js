function getSrcLink() {
return "http://www.anrdoezrs.net/placeholder-24755168?target=_top&mouseover=N";              
}

function displayContent() {
var script = document.createElement("script");
script.language="javascript"
script.src = getSrcLink();
document.write(script.outerHTML);
}

