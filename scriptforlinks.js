//don't forget to remove the wine ads on december 31 (item just above last item)
//this is 728x90 size banner
function getSrcLinkLeader() {
  var leaderArray = ["http://www.anrdoezrs.net/placeholder-24755168?target=_blank&mouseover=N",
                     "http://www.dpbolvw.net/placeholder-24786320?target=_blank&mouseover=N",
                     "http://www.anrdoezrs.net/placeholder-24784213?target=_blank&mouseover=N",
                     "http://www.anrdoezrs.net/placeholder-24728885?target=_blank&mouseover=N",
                     "http://www.jdoqocy.com/placeholder-24760848?target=_blank&mouseover=N",
                     "http://www.dpbolvw.net/placeholder-24760854?target=_blank&mouseover=N",
                     "http://www.jdoqocy.com/placeholder-24712954?target=_blank&mouseover=N",
                     "http://www.dpbolvw.net/placeholder-24760820?target=_blank&mouseover=N",
                     "http://www.tkqlhce.com/placeholder-24773817?target=_blank&mouseover=N",
                     "http://www.dpbolvw.net/placeholder-24761258?target=_blank&mouseover=N",
                     "http://www.tkqlhce.com/placeholder-24699053?target=_blank&mouseover=N"];                
  return leaderArray[Math.floor(Math.random() * leaderArray.length)];
}

//this is 300x250 size banner
function getSrcLinkMobile() {
  var mobileArray = ["http://www.anrdoezrs.net/placeholder-24760828?target=_blank&mouseover=N",
                     "http://www.tkqlhce.com/placeholder-24761239?target=_blank&mouseover=N",
                     "http://www.kqzyfj.com/placeholder-24786332?target=_blank&mouseover=N",
                     "http://www.dpbolvw.net/placeholder-24728890?target=_blank&mouseover=N",
                     "http://www.dpbolvw.net/placeholder-24760867?target=_blank&mouseover=N",
                     "http://www.tkqlhce.com/placeholder-24699106?target=_blank&mouseover=N",
                     "http://www.kqzyfj.com/placeholder-24760868?target=_blank&mouseover=N",
                     "http://www.kqzyfj.com/placeholder-24712934?target=_blank&mouseover=N",
                     "http://www.kqzyfj.com/placeholder-24760862?target=_blank&mouseover=N"];
  return mobileArray[Math.floor(Math.random() * mobileArray.length)];
}

//don't forget to remove the wine ads on december 31 (item just above last item)
//this is 160x600 size banner
function getSrcLinkSideBanner() {
  var sideBannerArray = ["http://www.jdoqocy.com/placeholder-24698462?target=_blank&mouseover=N",
                         "http://www.jdoqocy.com/placeholder-24786067?target=_blank&mouseover=N",
                         "http://www.anrdoezrs.net/placeholder-24786072?target=_blank&mouseover=N",
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

//for displaying amazon recommendations ad
function displayEndRecomm() {
  var node = document.createElement("div");
  node.style = "width:98%";
  //create script body
  var script = document.createElement("script");
  script.language="javascript";
  script.src = "//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=d08216e9-ee4d-4362-b467-952cb396ecf9&storeId=kperaka-20";
  //append script to node
  node.appendChild(script);
  document.write(node.outerHTML);
}

//for displaying the ad in the body
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

//for displaying mobile only ad
function displayMobileContent() {
  if(screen.width < 500) {
    var script = document.createElement("script");
    script.language="javascript";
    script.src = getSrcLinkMobile();
    document.write(script.outerHTML);
  } 
}

//for displaying side banner
function displaySideBannerContent() {
  if(screen.width > 500) {
    var script = document.createElement("script");
    script.language="javascript";
    script.src = getSrcLinkSideBanner();
    document.write(script.outerHTML);
  } 
}

