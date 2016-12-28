//--------------- THIS CODE IS JUST FOR TESTING. MAIN ONE IS OTHER FILE ---------------//

//don't forget to remove the wine ads on december 31 (item just above last item)
//this is 728x90 size banner
function getSrcLinkLeader() {
  var leaderArray = ["http://www.anrdoezrs.net/placeholder-24755168?target=_blank&mouseover=N",
                     "http://www.tkqlhce.com/placeholder-24699053?target=_blank&mouseover=N"];                
  return leaderArray[Math.floor(Math.random() * leaderArray.length)];
}

//this is 300x250 size banner
function getSrcLinkMobile() {
  var mobileArray = ["http://www.anrdoezrs.net/placeholder-24760828?target=_blank&mouseover=N",
                     "http://www.kqzyfj.com/placeholder-24760862?target=_blank&mouseover=N"];
  return mobileArray[Math.floor(Math.random() * mobileArray.length)];
}

//don't forget to remove the wine ads on december 31 (item just above last item)
//this is 160x600 size banner
function getSrcLinkSideBanner() {
  var sideBannerArray = ["http://www.jdoqocy.com/placeholder-24698462?target=_blank&mouseover=N",
                         "http://www.dpbolvw.net/placeholder-24761074?target=_blank&mouseover=N"];
  return sideBannerArray[Math.floor(Math.random() * sideBannerArray.length)];
}

//for displaying google ad units
function displayGoogleAds() {
  var node = document.createElement("div");
  node.style = "width:98%";
  
  var script = document.createElement("script");
  script.async= true;
  script.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  node.appendChild(script);
  
  var insrt = document.createElement("ins");
  insrt.setAttribute('class','adsbygoogle');
  insrt.setAttribute('style','display:block');
  insrt.setAttribute('data-ad-client','ca-pub-8825619236094394');
  insrt.setAttribute('data-ad-slot','6573340668');
  node.appendChild(insrt);
  
  var mainScrpt = document.createElement("script");
  var insideCode = "(adsbygoogle = window.adsbygoogle || []).push({})";
  mainScrpt.appendChild(insideCode);
  
  node.appendChild(mainScrpt);
  document.write(node.outerHTML);
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
