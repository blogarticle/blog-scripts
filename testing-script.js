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

function displayNativeAdContent(){
  var script1 = document.createElement("script");
  script1.appendChild("amzn_assoc_placement = 'adunit0';")
  script1.appendChild("amzn_assoc_search_bar = 'false';")
  script1.appendChild("amzn_assoc_tracking_id = 'kperaka-20';")
  script1.appendChild("amzn_assoc_ad_mode = 'manual';")
  script1.appendChild("amzn_assoc_ad_type = 'smart';")
  script1.appendChild("amzn_assoc_marketplace = 'amazon';")
  script1.appendChild("amzn_assoc_region = 'US';")
  script1.appendChild("amzn_assoc_title = 'Amazon Picks';")
  script1.appendChild("amzn_assoc_linkid = '697ee9c6781439abee0280f599279ef8';")
  script1.appendChild("amzn_assoc_asins = 'B0001HLTSE,B005MMNBBQ,B002WUPWC2,B00CGSES9I,B00O4XR5QQ';")
  script1.appendChild("amzn_assoc_size = '728x400';")
  document.write(script1.outerHTML);
  
  var script2 = document.createElement("script");
  script2.src = "//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US";
  document.write(script2.outerHTML);
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
