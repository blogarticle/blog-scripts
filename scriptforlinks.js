//expedia and onetravel ending 31st january (last 2 but one for travel)
//this is 728x90 size banner for travel and others
function getSrcLinkLeader() {
  var leaderArray = ["http://www.anrdoezrs.net/placeholder-24755168?target=_blank&mouseover=N",
                     "http://www.anrdoezrs.net/placeholder-24900980?target=_blank&mouseover=N",
                     "http://www.jdoqocy.com/placeholder-24882799?target=_blank&mouseover=N",
                     "http://www.kqzyfj.com/placeholder-24872997?target=_blank&mouseover=N",
                     "http://www.tkqlhce.com/placeholder-24872967?target=_blank&mouseover=N",
                     "http://www.kqzyfj.com/placeholder-24872974?target=_blank&mouseover=N",
                     "http://www.tkqlhce.com/placeholder-24799004?target=_blank&mouseover=N",
                     "http://www.dpbolvw.net/placeholder-24786320?target=_blank&mouseover=N",
                     "http://www.dpbolvw.net/placeholder-24760820?target=_blank&mouseover=N",
                     "http://www.dpbolvw.net/placeholder-24900984?target=_blank&mouseover=N",
                     "http://www.anrdoezrs.net/placeholder-24825200?target=_blank&mouseover=N",
                     "http://www.tkqlhce.com/placeholder-24699053?target=_blank&mouseover=N",
                     //non-travel stuff
                     "http://www.kqzyfj.com/placeholder-24807915?target=_blank&mouseover=N",
                     "http://www.jdoqocy.com/placeholder-24882820?target=_blank&mouseover=N",
                     "http://www.tkqlhce.com/placeholder-24872981?target=_blank&mouseover=N",
                     "http://www.jdoqocy.com/placeholder-24792140?target=_blank&mouseover=N",
                     "http://www.anrdoezrs.net/placeholder-24784213?target=_blank&mouseover=N",
                     "http://www.anrdoezrs.net/placeholder-24728885?target=_blank&mouseover=N",
                     "http://www.jdoqocy.com/placeholder-24760848?target=_blank&mouseover=N",
                     "http://www.dpbolvw.net/placeholder-24760854?target=_blank&mouseover=N",
                     "http://www.jdoqocy.com/placeholder-24712954?target=_blank&mouseover=N",
                     "http://www.tkqlhce.com/placeholder-24773817?target=_blank&mouseover=N",
                     "http://www.jdoqocy.com/placeholder-24825190?target=_blank&mouseover=N"];                
  return leaderArray[Math.floor(Math.random() * leaderArray.length)];
}

//expedia and onetravel ending 31st january (last 2 but one for travel)
//this is 300x250 size banner for travel
function getSrcLinkMobile() {
  var mobileArray = ["http://www.anrdoezrs.net/placeholder-24760828?target=_blank&mouseover=N",
                     "http://www.tkqlhce.com/placeholder-24900981?target=_blank&mouseover=N",
                     "http://www.anrdoezrs.net/placeholder-24882786?target=_blank&mouseover=N",
                     "http://www.kqzyfj.com/placeholder-24882804?target=_blank&mouseover=N",
                     "http://www.dpbolvw.net/placeholder-24882795?target=_blank&mouseover=N",
                     "http://www.tkqlhce.com/placeholder-24872944?target=_blank&mouseover=N",
                     "http://www.jdoqocy.com/placeholder-24872951?target=_blank&mouseover=N",
                     "http://www.kqzyfj.com/placeholder-24786332?target=_blank&mouseover=N",
                     "http://www.tkqlhce.com/placeholder-24699106?target=_blank&mouseover=N",
                     "http://www.jdoqocy.com/placeholder-24900985?target=_blank&mouseover=N",
                     "http://www.jdoqocy.com/placeholder-24825199?target=_blank&mouseover=N",
                     "http://www.kqzyfj.com/placeholder-24760862?target=_blank&mouseover=N",
                     //non-travel stuff
                     "http://www.jdoqocy.com/placeholder-24807910?target=_blank&mouseover=N",
                     "http://www.jdoqocy.com/placeholder-24882822?target=_blank&mouseover=N",
                     "http://www.tkqlhce.com/placeholder-24872992?target=_blank&mouseover=N",
                     "http://www.anrdoezrs.net/placeholder-24792142?target=_blank&mouseover=N",
                     "http://www.tkqlhce.com/placeholder-24761239?target=_blank&mouseover=N",
                     "http://www.dpbolvw.net/placeholder-24728890?target=_blank&mouseover=N",
                     "http://www.dpbolvw.net/placeholder-24760867?target=_blank&mouseover=N",
                     "http://www.kqzyfj.com/placeholder-24760868?target=_blank&mouseover=N",
                     "http://www.kqzyfj.com/placeholder-24712934?target=_blank&mouseover=N"];
  return mobileArray[Math.floor(Math.random() * mobileArray.length)];
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

//for displaying the ad in the body (travel stuff)
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

//for displaying small side ad
function displaySmallSideContent() {
  if(screen.width > 500) {
    var script = document.createElement("script");
    script.language="javascript";
    script.src = getSrcLinkMobile();
    document.write(script.outerHTML);
  }
}

//for displaying mobile only ad
function displayMobileContent() {
  if(screen.width < 500) {
    displayAdSenseContent("mobileOnly");
  } 
}

//for displaying side banner
function displaySideBannerContent() {
  if(screen.width > 500) {
    displayAdSenseContent("sideBanner");
  } 
}

//supporting method for displaying adsense content
function displayAdSenseContent(adSize) {
  var node = document.createElement("div");
  node.style = "width:100%";
  
  var script = document.createElement("script");
  script.language="javascript";
  script.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  script.async = true;
  node.appendChild(script);
  
  var ins = document.createElement("ins");
  ins.setAttribute("class","adsbygoogle");
  ins.setAttribute("data-ad-client","ca-pub-8825619236094394");
  
  if(adSize == "mobileOnly") {
    ins.setAttribute("style","display:inline-block;width:300px;height:250px");
    ins.setAttribute("data-ad-slot","9063658661");
  } else if(adSize == "sideBanner") {
  	ins.setAttribute("style","display:inline-block;width:160px;height:600px");
    ins.setAttribute("data-ad-slot","8234557063");
  } else if(adSize == "smallSide") {
  	ins.setAttribute("style","display:inline-block;width:200px;height:200px");
    ins.setAttribute("data-ad-slot","6047009868");
  } else if(adSize == "anySize") {
  	ins.setAttribute("style","display:block");
    ins.setAttribute("data-ad-slot","6555151061");
    ins.setAttribute("data-ad-format","auto");
  }
  
  node.appendChild(ins);
  document.write(node.outerHTML);
  (adsbygoogle = window.adsbygoogle || []).push({});
}

