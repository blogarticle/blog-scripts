function getSrcLinkLeader() {
  var leaderArray = ["http://www.anrdoezrs.net/placeholder-24755168?target=_blank&mouseover=N",
                     "http://www.kqzyfj.com/placeholder-24755168?target=_blank&mouseover=N",
                     "http://www.anrdoezrs.net/placeholder-24728885?target=_blank&mouseover=N",
                     "http://www.jdoqocy.com/placeholder-24760848?target=_blank&mouseover=N",
                     "http://www.dpbolvw.net/placeholder-24760854?target=_blank&mouseover=N",
                     "http://www.kqzyfj.com/placeholder-24760856?target=_blank&mouseover=N",
                     "http://www.jdoqocy.com/placeholder-24712954?target=_blank&mouseover=N",
                     "http://www.dpbolvw.net/placeholder-24760820?target=_blank&mouseover=N",
                     "http://www.anrdoezrs.net/placeholder-24699103?target=_blank&mouseover=N",
                     "http://www.tkqlhce.com/placeholder-24699053?target=_blank&mouseover=N"];                
  return leaderArray[Math.floor(Math.random() * leaderArray.length)];
}

function getSrcLinkMobile() {
  var mobileArray = ["http://www.anrdoezrs.net/placeholder-24760828?target=_blank&mouseover=N",
                     "http://www.dpbolvw.net/placeholder-24760863?target=_blank&mouseover=N",
                     "http://www.dpbolvw.net/placeholder-24728890?target=_blank&mouseover=N",
                     "http://www.dpbolvw.net/placeholder-24760867?target=_blank&mouseover=N",
                     "http://www.tkqlhce.com/placeholder-24699106?target=_blank&mouseover=N",
                     "http://www.kqzyfj.com/placeholder-24760868?target=_blank&mouseover=N",
                     "http://www.anrdoezrs.net/placeholder-24760869?target=_blank&mouseover=N",
                     "http://www.kqzyfj.com/placeholder-24712934?target=_blank&mouseover=N",
                     "http://www.kqzyfj.com/placeholder-24698576?target=_blank&mouseover=N",
                     "http://www.kqzyfj.com/placeholder-24760862?target=_blank&mouseover=N"];
  return mobileArray[Math.floor(Math.random() * mobileArray.length)];
}

function displayBodyContent() {
  var script = document.createElement("script");
  script.language="javascript";
  if(screen.width < 500) {
    script.src = getSrcLinkMobile();
  } else {
    script.src = getSrcLinkLeader();
  }
  document.write(script.outerHTML);
}

