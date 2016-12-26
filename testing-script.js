//don't forget to remove the wine ads on december 31 (2 items just above last item)
//this is 728x90
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
                     "http://www.tkqlhce.com/placeholder-24773817?target=_blank&mouseover=N",
                     "http://www.dpbolvw.net/placeholder-24761258?target=_blank&mouseover=N",
                     "http://www.dpbolvw.net/placeholder-24761259?target=_blank&mouseover=N",
                     "http://www.tkqlhce.com/placeholder-24699053?target=_blank&mouseover=N"];                
  return leaderArray[Math.floor(Math.random() * leaderArray.length)];
}

//this is 300x250
function getSrcLinkMobile() {
  var mobileArray = ["http://www.anrdoezrs.net/placeholder-24760828?target=_blank&mouseover=N",
                     "http://www.tkqlhce.com/placeholder-24761239?target=_blank&mouseover=N",
                     "http://www.tkqlhce.com/placeholder-24761249?target=_blank&mouseover=N",
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

//don't forget to remove the wine ads on december 31 (2 items just above last item)
//this is 160x600
function getSrcLinkSideBanner() {
  var sideBannerArray = ["http://www.jdoqocy.com/placeholder-24698462?target=_blank&mouseover=N",
                         "http://www.tkqlhce.com/placeholder-24761059?target=_blank&mouseover=N",
                         "http://www.kqzyfj.com/placeholder-24761061?target=_blank&mouseover=N",
                         "http://www.jdoqocy.com/placeholder-24698798?target=_blank&mouseover=N",
                         "http://www.anrdoezrs.net/placeholder-24761063?target=_blank&mouseover=N",
                         "http://www.kqzyfj.com/placeholder-24728766?target=_blank&mouseover=N",
                         "http://www.anrdoezrs.net/placeholder-24761066?target=_blank&mouseover=N",
                         "http://www.kqzyfj.com/placeholder-24698424?target=_blank&mouseover=N",
                         "http://www.dpbolvw.net/placeholder-24712846?target=_blank&mouseover=N",
                         "http://www.anrdoezrs.net/placeholder-24712835?target=_blank&mouseover=N",
                         "http://www.jdoqocy.com/placeholder-24761137?target=_blank&mouseover=N",
                         "http://www.tkqlhce.com/placeholder-24761138?target=_blank&mouseover=N",
                         "http://www.dpbolvw.net/placeholder-24761074?target=_blank&mouseover=N"];
  return sideBannerArray[Math.floor(Math.random() * sideBannerArray.length)];
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

function displayMobileContent() {
  if(screen.width < 500) {
    var script = document.createElement("script");
    script.language="javascript";
    script.src = getSrcLinkMobile();
    document.write(script.outerHTML);
  } 
}

function displaySideBannerContent() {
  if(screen.width > 500) {
    var script = document.createElement("script");
    script.language="javascript";
    script.src = getSrcLinkSideBanner();
    document.write(script.outerHTML);
  } 
}
