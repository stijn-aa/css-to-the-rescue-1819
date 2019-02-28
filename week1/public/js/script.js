const root = document.documentElement
root.style.setProperty('--bg', '#febc04');
root.style.setProperty('--c1', '#ffa418');
root.style.setProperty('--c2', '#f17014');
root.style.setProperty('--c3', '#ec4c0e');
root.style.setProperty('--c4', '#a93e14');
root.style.setProperty('--c5', '#ffffff');
root.style.setProperty('--c6', '#a93e14');
root.style.setProperty('--btnbg', '#202d69');
root.style.setProperty('--btnc', '#18dad2');
root.style.setProperty('--fontstyle', 'normal');
root.style.setProperty('--fontweight', '900');
root.style.setProperty('--arc', 'url(../img/boog.svg)');
let mode = "night";
document.getElementById("button").addEventListener("click", modeswitch);


function modeswitch() {
  if (mode == "day") {
    root.style.setProperty('--bg', '#febc04');
    root.style.setProperty('--c1', '#ffa418');
    root.style.setProperty('--c2', '#f17014');
    root.style.setProperty('--c3', '#ec4c0e');
    root.style.setProperty('--c4', '#a93e14');
    root.style.setProperty('--c5', '#ffffff');
    root.style.setProperty('--c6', '#a93e14');
    root.style.setProperty('--btnbg', '#202d69');
    root.style.setProperty('--btnc', '#18dad2');
    root.style.setProperty('--fontstyle', 'normal');
    root.style.setProperty('--fontweight', '900');
    root.style.setProperty('--arc', 'url(../img/boog.svg)');
    mode = "night";

  } else {
    root.style.setProperty('--bg', '#0d1422');
    root.style.setProperty('--c1', '#153635');
    root.style.setProperty('--c2', '#1d504f');
    root.style.setProperty('--c3', '#1c8783');
    root.style.setProperty('--c4', '#18dad2');
    root.style.setProperty('--c5', '#0d182c');
    root.style.setProperty('--c6', '#7d69da');
    root.style.setProperty('--btnbg', '#ffffff');
    root.style.setProperty('--btnc', '#a93e14');
    root.style.setProperty('--fontstyle', 'italic');
    root.style.setProperty('--fontweight', 'normal');
    root.style.setProperty('--arc', 'url(../img/boogNight.svg)');
    mode = "day";
  }


};
