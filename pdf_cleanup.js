document.querySelectorAll("a,img,script,link,canvas").forEach(function(o){o.parentNode.removeChild(o);});
document.querySelectorAll("*").forEach(function(o){o.removeAttribute("style");});
document.querySelectorAll("*").forEach(function(o){console.log(o.tagName);});
