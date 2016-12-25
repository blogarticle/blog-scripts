function getSrcLinkLeader() {
  var leaderArray = ["http://www.anrdoezrs.net/placeholder-24755168?target=_blank&mouseover=N",
                "http://www.dpbolvw.net/placeholder-24760820?target=_blank&mouseover=N",
                "http://www.anrdoezrs.net/placeholder-24699103?target=_blank&mouseover=N",
                "http://www.tkqlhce.com/placeholder-24699053?target=_blank&mouseover=N"];
  return leaderArray[Math.floor(Math.random() * leaderArray.length)];
}

function getSrcLinkMobile() {
  var leaderArray = ["http://www.anrdoezrs.net/placeholder-24760828?target=_blank&mouseover=N",
                "http://www.dpbolvw.net/placeholder-24699106?target=_blank&mouseover=N",
                "http://www.kqzyfj.com/placeholder-24760831?target=_blank&mouseover=N",
                "http://www.kqzyfj.com/placeholder-24698576?target=_blank&mouseover=N"];
  return leaderArray[Math.floor(Math.random() * leaderArray.length)];
}

function displayBodyContent() {
  var script = document.createElement("script");
  script.language="javascript";
  if(screen.width < 600) {
    script.src = getSrcLinkMobile();
  } else {
    script.src = getSrcLinkLeader();
  }
  document.write(script.outerHTML);
}

