"use strict";/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/var au=Math.imul;var av=Math.fround;var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};function ah(c){var a=-0.;a=+c.keyCode;if(a===37){k.i0=(k.i0|0)-5|0;}else{a=+c.keyCode;if(a===39){k.i0=(k.i0|0)+5|0;}}}function Z(){var a=0;w(0,0,400,400,0);w(k.i0|0,k.i1|0,k.i2|0,k.i3|0,16777215);l.i0=(l.i0|0)+(l.i2|0)|0;l.i1=(l.i1|0)+(l.i3|0)|0;a=Y()|0;if(a){X();}K(l.i0|0,l.i1|0);}function w(o,m,h,f,c){var ap=null,a=null,an=null,B=null,A=null,z=null,y=null,x=null,ao=null;ap=e;a="";an="rgb(";B=String(c&255);A=",";z=String(c>>>8&255);y=",";x=String(c>>>16&255);ao=")";a=a.concat(an,B,A,z,y,x,ao);a=String(a);ap.fillStyle=a;e.fillRect((+(o|0)),(+(m|0)),(+(h|0)),(+(f|0)));}function Y(){var c=0,a=0,h=0,f=0;c=l.i1|0;if((c|0)>399){return 1|0;}a=l.i0|0;if(a-1>>>0>398){l.i2=-(l.i2|0)|0;}if((c|0)<1){l.i3=-(l.i3|0)|0;}h=k.i0|0;if((h|0)<(a|0)){f=k.i2|0;if((f+h|0)>(a|0)){a=k.i1|0;if((a|0)<(c|0)&&(a+f|0)>(c|0)){l.i3=-(l.i3|0)|0;return 0|0;}return 0|0;}return 0|0;}return 0|0;}function X(){var c=null,a=null;c=e;a="24px sans-serif";c.font=a;c=e;a="rgb(255,255,255)";c.fillStyle=a;c=e;a="You lost!";c.fillText(a,0,(+((v|0)-24|0)));}function W(){V();}function V(){var a=null,c=null;am=400;v=400;a="pongcanvas";a=document.getElementById(a);a=a;j=a;a.width=400;j.height=400;a=document.body;c=j;a.appendChild(c);a=j;c="2d";a=a.getContext(c);e=a;a=u;+requestAnimationFrame(a);a="keydown";c=ah;document.addEventListener(a,c);}function u(){var a=null;Z();a=u;+requestAnimationFrame(a);}function O(h,i){var c=0,f=0,a=null,m=null;a=String();c=h[i]|0;if((c&255)===0){return a;}else{f=0;}while(1){m=String.fromCharCode(c<<24>>24);a=a.concat(m);f=f+1|0;c=h[i+f|0]|0;if((c&255)!==0){continue;}break;}return a;}function K(A,o){var c=null,a=null,z=null,y=null,x=null,B=null,m=null,h=null,f=null;c=e;a="";z="rgb(";y=String(255);x=",";B=String(255);m=",";h=String(255);f=")";a=a.concat(z,y,x,B,m,h,f);a=String(a);c.fillStyle=a;e.beginPath();c=e;c.arc((+(A|0)),(+(o|0)),5,0,6.2831853071795862);e.fill();}function d(a,b){var c=null;c=O(a,b);c=String(c);return c;}var am;var v;var ak=new Uint8Array([112,111,110,103,99,97,110,118,97,115,0]);var j;var aj=new Uint8Array([50,100,0]);var e;var al=new Uint8Array([107,101,121,100,111,119,110,0]);var k={i0:185,i1:380,i2:30,i3:7};var l={i0:200,i1:200,i2:2,i3:-2};var af=[0];var ae=new Uint8Array([114,103,98,40,0]);var ad=new Uint8Array([44,0]);var ac=new Uint8Array([41,0]);var ab=new Uint8Array([50,52,112,120,32,115,97,110,115,45,115,101,114,105,102,0]);var ai=new Uint8Array([114,103,98,40,50,53,53,44,50,53,53,44,50,53,53,41,0]);var ag=new Uint8Array([89,111,117,32,108,111,115,116,33,0]);W();