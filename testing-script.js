//--------------- THIS CODE IS JUST FOR TESTING. MAIN ONE IS OTHER FILE ---------------//

//don't forget to remove the wine ads on december 31 (2 items just above last item)
//this is 728x90
function getSrcLinkLeader() {
  var leaderArray = ["http://www.anrdoezrs.net/placeholder-24755168?target=_blank&mouseover=N",
                     "http://www.tkqlhce.com/placeholder-24699053?target=_blank&mouseover=N"];                
  return leaderArray[Math.floor(Math.random() * leaderArray.length)];
}

//this is 300x250
function getSrcLinkMobile() {
  var mobileArray = ["http://www.anrdoezrs.net/placeholder-24760828?target=_blank&mouseover=N",
                     "http://www.kqzyfj.com/placeholder-24760862?target=_blank&mouseover=N"];
  return mobileArray[Math.floor(Math.random() * mobileArray.length)];
}

//don't forget to remove the wine ads on december 31 (2 items just above last item)
//this is 160x600
function getSrcLinkSideBanner() {
  var sideBannerArray = ["http://www.jdoqocy.com/placeholder-24698462?target=_blank&mouseover=N",
                         "http://www.dpbolvw.net/placeholder-24761074?target=_blank&mouseover=N"];
  return sideBannerArray[Math.floor(Math.random() * sideBannerArray.length)];
}

function getProductIDs(){
  return "B0001HLTSE,B005MMNBBQ,B002WUPWC2,B00CGSES9I,B00O4XR5QQ";
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
