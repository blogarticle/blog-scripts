//--------------- THIS CODE IS JUST FOR TESTING. MAIN ONE IS OTHER FILE ---------------//

//expedia ending 31st january (last but one)
//this is 728x90 size banner
function getSrcLinkLeader() {
  var leaderArray = ["http://www.anrdoezrs.net/placeholder-24755168?target=_blank&mouseover=N",
                     "http://www.kqzyfj.com/placeholder-24807915?target=_blank&mouseover=N",
                     "http://www.tkqlhce.com/placeholder-24799004?target=_blank&mouseover=N",
                     "http://www.jdoqocy.com/placeholder-24792140?target=_blank&mouseover=N",
                     "http://www.dpbolvw.net/placeholder-24786320?target=_blank&mouseover=N",
                     "http://www.anrdoezrs.net/placeholder-24784213?target=_blank&mouseover=N",
                     "http://www.anrdoezrs.net/placeholder-24728885?target=_blank&mouseover=N",
                     "http://www.jdoqocy.com/placeholder-24760848?target=_blank&mouseover=N",
                     "http://www.dpbolvw.net/placeholder-24760854?target=_blank&mouseover=N",
                     "http://www.jdoqocy.com/placeholder-24712954?target=_blank&mouseover=N",
                     "http://www.dpbolvw.net/placeholder-24760820?target=_blank&mouseover=N",
                     "http://www.tkqlhce.com/placeholder-24773817?target=_blank&mouseover=N",
                     "http://www.jdoqocy.com/placeholder-24825190?target=_blank&mouseover=N",
                     "http://www.anrdoezrs.net/placeholder-24825200?target=_blank&mouseover=N",
                     "http://www.tkqlhce.com/placeholder-24699053?target=_blank&mouseover=N"];                
  return leaderArray[Math.floor(Math.random() * leaderArray.length)];
}

//expedia ending 31st january (last but one)
//this is 300x250 size banner
function getSrcLinkMobile() {
  var mobileArray = ["http://www.anrdoezrs.net/placeholder-24760828?target=_blank&mouseover=N",
                     "http://www.jdoqocy.com/placeholder-24807910?target=_blank&mouseover=N",
                     "http://www.anrdoezrs.net/placeholder-24792142?target=_blank&mouseover=N",
                     "http://www.tkqlhce.com/placeholder-24761239?target=_blank&mouseover=N",
                     "http://www.kqzyfj.com/placeholder-24786332?target=_blank&mouseover=N",
                     "http://www.dpbolvw.net/placeholder-24728890?target=_blank&mouseover=N",
                     "http://www.dpbolvw.net/placeholder-24760867?target=_blank&mouseover=N",
                     "http://www.tkqlhce.com/placeholder-24699106?target=_blank&mouseover=N",
                     "http://www.kqzyfj.com/placeholder-24760868?target=_blank&mouseover=N",
                     "http://www.kqzyfj.com/placeholder-24712934?target=_blank&mouseover=N",
                     "http://www.jdoqocy.com/placeholder-24825199?target=_blank&mouseover=N",
                     "http://www.kqzyfj.com/placeholder-24760862?target=_blank&mouseover=N"];
  return mobileArray[Math.floor(Math.random() * mobileArray.length)];
}

//this is 160x600 size banner
function getSrcLinkSideBanner() {
  var sideBannerArray = ["http://www.jdoqocy.com/placeholder-24698462?target=_blank&mouseover=N",
                         "http://www.jdoqocy.com/placeholder-24807913?target=_blank&mouseover=N",
                         "http://www.jdoqocy.com/placeholder-24786067?target=_blank&mouseover=N",
                         "http://www.tkqlhce.com/placeholder-24761059?target=_blank&mouseover=N",
                         "http://www.jdoqocy.com/placeholder-24698798?target=_blank&mouseover=N",
                         "http://www.anrdoezrs.net/placeholder-24761063?target=_blank&mouseover=N",
                         "http://www.anrdoezrs.net/placeholder-24761066?target=_blank&mouseover=N",
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
    google_ad_client = "ca-pub-8825619236094394";
    google_ad_slot = "9063658661";
    google_ad_width = 300;
    google_ad_height = 250;
    
    var script = document.createElement("script");
    script.type="text/javascript";
    script.src = "//pagead2.googlesyndication.com/pagead/show_ads.js";
    document.write(script.outerHTML);
  } 
}

//for displaying side banner
function displaySideBannerContent() {
  if(screen.width > 500) {
    google_ad_client = "ca-pub-8825619236094394";
    google_ad_slot = "8234557063";
    google_ad_width = 160;
    google_ad_height = 600;
    
    var script = document.createElement("script");
    script.type="text/javascript";
    script.src = "//pagead2.googlesyndication.com/pagead/show_ads.js";
    document.write(script.outerHTML);
  } 
}
