(function(){
var s=document.createElement('style');
s.textContent='.nav-i>.lang-drop,.nav-right>.lang-drop{margin:0 0 0 auto;width:auto}.nav-i>.lang-drop .lang-drop-toggle,.nav-right>.lang-drop .lang-drop-toggle{width:auto}.nav-i>.lang-drop .lang-drop-menu,.nav-right>.lang-drop .lang-drop-menu{left:auto;right:0}@media(max-width:768px){.nav-i>.lang-drop .lang-drop-menu,.nav-right>.lang-drop .lang-drop-menu{transform:translateY(-8px) scale(.96)}.nav-i>.lang-drop.open .lang-drop-menu,.nav-right>.lang-drop.open .lang-drop-menu{transform:translateY(0) scale(1)}}';
document.head.appendChild(s);
function fix(){var d=document.getElementById('langDrop'),h=document.getElementById('hbg');if(d&&h&&d.nextElementSibling!==h)h.parentNode.insertBefore(d,h);}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fix);else fix();
})();
