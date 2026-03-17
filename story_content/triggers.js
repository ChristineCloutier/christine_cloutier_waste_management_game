function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6XW94bpylKk":
        Script1();
        break;
      case "5aHszMNsjGu":
        Script2();
        break;
      case "5lLug4pqFGy":
        Script3();
        break;
      case "6RCHQXL204O":
        Script4();
        break;
      case "6FhuoIkhoo5":
        Script5();
        break;
      case "6mUNLzPvqdn":
        Script6();
        break;
      case "6ketgDx8FcD":
        Script7();
        break;
      case "67nwW60mhJG":
        Script8();
        break;
      case "6duUygXCB1P":
        Script9();
        break;
      case "645DM3rsPSY":
        Script10();
        break;
      case "5apZIPFp5I7":
        Script11();
        break;
      case "6Xrv6VDHf1Q":
        Script12();
        break;
      case "5cgv5eerqL9":
        Script13();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  const target = object('6l8rP8gsuHL');
const duration = 750;
const easing = 'ease-out';
const id = '6fz2Erbv0PO';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5XLkyBW4pL7');
const duration = 750;
const easing = 'ease-out';
const id = '5gybbzKgQEE';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6X7woC6oTLi');
const duration = 750;
const easing = 'ease-out';
const id = '6LARsDZbMrv';
const teeterAmount = 4;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('5cWaE6caur2');
const duration = 750;
const easing = 'ease-out';
const id = '6lYKb5QPb8S';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6oamcLcOh8s');
const duration = 750;
const easing = 'ease-out';
const id = '6n6TDNcWiDo';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('5qKnWhPUTQn');
const duration = 750;
const easing = 'ease-out';
const id = '5omvIQro4qw';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('5d6ZSRHEYRo');
const duration = 250;
const easing = 'ease-out';
const id = '6iM8Q2WpGpk';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('6RmauJeB2O1');
const duration = 1750;
const easing = 'ease-out';
const id = '65JnMmycOMo';
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${360}deg` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('6RmauJeB2O1');
const duration = 1250;
const easing = 'ease-out';
const id = '64bTDU4ULGp';
player.addForTriggers(
id,
target.animate(
[ {opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('5mVHmTHPdWp');
const duration = 1250;
const easing = 'ease-out';
const id = '6YqvgtCo9By';
const growAmount = 0.3;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('5mVHmTHPdWp');
const duration = 750;
const easing = 'ease-out';
const id = '5a5xYHvZ9UF';
const floatAmount = 5;
player.addForTriggers(
id,
target.animate(
[ {translate: `0 -${floatAmount}px` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  const target = object('5rueLYdRRae');
const duration = 750;
const easing = 'ease-out';
const id = '6NNwuH4wyv4';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  const target = object('6HgrgFogd06');
const duration = 1000;
const easing = 'ease-out';
const id = '66TmaBkcqAF';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
