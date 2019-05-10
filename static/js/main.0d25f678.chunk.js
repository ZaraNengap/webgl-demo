(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(t,e,i){},146:function(t,e,i){},147:function(t,e,i){"use strict";i.r(e);var a=i(0),n=i.n(a),o=i(26),s=i.n(o),r=(i(90),i(3)),h=i(15),A=n.a.createContext({width:400,height:400}),c=A;function l(t){return n.a.createElement(A.Provider,{value:{width:400,height:400}},t.children)}function m(){this._buffer=null,this.cols=null,this.rows=null,this.cols_m1=null,this.rows_m1=null,this.width=null,this.height=null,this.nTotal=null,this.nTotalx2=null,this.outX=null,this.outY=null,this.fieldPosX=null,this.fieldPosY=null,this.mPos=null}function u(){this.flg=!1,this.angle=0,this.scale=0,this.int=0,this.velX=0,this.posX=0,this.velY=0,this.posY=0,this.life=0,this.damping=.1,this.r=0,this.g=0,this.b=0}f.prototype.changeColor=function(t){this.isEraser=!1,this.mActiveColor=t},f.prototype.changeWidth=function(t){return this.penWidth=t,this.penWidth},m.prototype.setupField=function(t,e,i,a){this.cols=t,this.rows=e,this.cols_m1=this.cols-1,this.rows_m1=this.rows-1,this.width=i,this.height=a,this.nTotal=this.cols*this.rows,this.nTotalx2=2*this.nTotal,this.dispose(),this._buffer=new Array;for(var n=0;n<this.nTotalx2;n++)this._buffer.push(0)},m.prototype.dispose=function(){this._buffer=null},m.prototype.clear=function(){for(var t=0;t<this.nTotalx2;t++)this._buffer[t]=0},m.prototype.getForceFromPos=function(t,e){t/=this.width,e/=this.height,t<0||t>1||e<0||e>1?(this.outX=0,this.outY=0):(this.fieldPosX=t*this.cols,this.fieldPosY=e*this.rows,this.mPos=2*Math.trunc(this.fieldPosY*this.cols+this.fieldPosX),this.outX=.1*this._buffer[this.mPos],this.outY=.1*this._buffer[this.mPos+1])},m.prototype.addVectorCircle=function(t,e,i,a,n,o){var s=a>>16&255,r=a>>8&255,h=a>>0&255,A=t.ctx;A.strokeStyle="rgba(".concat(s,", ").concat(r,", ").concat(h,", 1)"),A.lineCap="round",A.lineWidth=40,A.beginPath(),A.moveTo(e,i),A.lineTo(n,o),A.stroke()},m.prototype.fadeField=function(t){for(var e=0;e<this.nTotalx2;e++){var i=Math.trunc(e);this._buffer[i]*=t}},u.prototype.setInitialCondition=function(t,e,i,a,n){this.posX=t,this.posY=e,this.velX=i,this.velY=a,this.life=n},u.prototype.setVFupdate=function(t,e){this.velX=this.velX+(t-this.velX*this.damping),this.velY=this.velY+(e-this.velY*this.damping),this.posX=this.posX+this.velX,this.posY=this.posY+this.velY,this.life=this.life-1};function d(){}d.prototype.easeOutQuart=function(t,e,i,a){return-i*((t=t/a-1)*t*t*t-1)+e},d.prototype.easeInOutQuart=function(t,e,i,a){return(t/=a/2)<1?i/2*t*t*t*t+e:-i/2*((t-=2)*t*t*t-2)+e};new d;function f(){this.penWidth=50}f.prototype.init=function(t,e,i){this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.canvas.width=e,this.canvas.height=i,this.mParticles=[],this.mVF=new m,this.isEraser=!1,this.mVF.setupField(e/30,i/30,e,i),this.moveFlag=!1,this.isZoom=!1,this._toScale=0,this._frScale=null,this._ticktime=null,this._zoomTryed=!1,this._drawingEnabled=!0,this.currentScale=1.16,this.mColorRandRange=1,this.mActiveColor=13209,this._eraseMode=!1,this.mFudeSize=1.2,this.mUniformMatrix=new Array(4),this.mUniformColor=new Array(4),this.canvas.addEventListener("touchstart",this.startEvent.bind(this),!1),this.canvas.addEventListener("mousedown",this.startEvent.bind(this),!1),this.canvas.addEventListener("touchmove",this.moveEvent.bind(this),!1),this.canvas.addEventListener("mousemove",this.moveEvent.bind(this),!1),this.canvas.addEventListener("touchend",this.endEvent.bind(this),!1),this.canvas.addEventListener("mouseup",this.endEvent.bind(this),!1),this.textureParticle=[],this.animloop()},f.prototype.animloop=function(){window.requestAnimFrame(this.animloop.bind(this)),this.onEnterFrame()},f.prototype.getXY=function(t){var e=t.touches?t.touches[0].clientX:t.clientX,i=t.touches?t.touches[0].clientY:t.clientY;return{x:e-this.canvas.offsetLeft+(document.body.scrollLeft||document.documentElement.scrollLeft),y:i-this.canvas.offsetTop+(document.body.scrollTop||document.documentElement.scrollTop)}},f.prototype.startEvent=function(t){t.preventDefault(),t.stopPropagation();var e=this.getXY(t);this.mPrevMouseX=e.x,this.mPrevMouseY=e.y,this.mPrevDiffX=0,this.mPrevDiffY=0,this.moveFlag=!0};f.prototype.moveEvent=function(t){if(t.preventDefault(),t.stopPropagation(),this.moveFlag){var e=this.getXY(t),i=e.x,a=e.y;if(this.isEraser)this.resetEraser(i,a);else{for(var n=i-this.mPrevMouseX,o=a-this.mPrevMouseY,s=Math.max(Math.sqrt(n*n+o*o)/30,1),r=0;r<s;r++){var h=(r+1)/s,A=i-this.mPrevMouseX,c=a-this.mPrevMouseY;A*=h,c*=h,A=this.mPrevMouseX+A,c=this.mPrevMouseY+c;var l=n-this.mPrevDiffX,m=o-this.mPrevDiffY;l*=h,m*=h,l=this.mPrevDiffX+l,m=this.mPrevDiffY+m;var d=.2+Math.min(this.mFudeSize,Math.sqrt(l*l+m*m)/50);this.mVF.addVectorCircle(this,this.mPrevMouseX,this.mPrevMouseY,this.mActiveColor,A,c);for(var f=0;f<10;f++){var v=this._eraseMode?1e3:1e3*Math.random(),E=new u;E.angle=720*Math.random(),E.flg=!1;var p=void 0;if(Math.random()<.1){var g=255*(Math.random()*this.mColorRandRange-.5*this.mColorRandRange),Q=(this.mActiveColor>>16&255)+g,B=(this.mActiveColor>>8&255)+g,w=(this.mActiveColor>>0&255)+g;p=(Q=Q<0?0:Q>255?255:Q)<<16|(B=B<0?0:B>255?255:B)<<8|(w=w<0?0:w>255?255:w)}else p=this.mActiveColor;E.r=p>>16&255,E.g=p>>8&255,E.b=p>>0&255;var b=100*Math.random()-50,x=100*Math.random()-50,C=Math.sqrt(b*b+x*x);b/=C,x/=C;var y=50*Math.random()-25;if(b*=y,x*=y,v<10)Math.random()<.1?E.scale=6*Math.random():E.scale=3*Math.random(),E.setInitialCondition(A+100*Math.random()-50,c+100*Math.random()-50,0,0,0),E.texIndex=6*Math.random();else if(v<30){Math.random()<.1?(E.scale=4*Math.random(),E.texIndex=1):(E.scale=.5*Math.random()+1,E.texIndex=6*Math.random());var M=.7*Math.random()+.3;E.setInitialCondition(A+l*M*15,c+m*M*15,0,0,0)}else if(v<50){var I=.7*Math.random()+.3;E.scale=.5*Math.random()+1,E.setInitialCondition(A+b,c+x,l*I,m*I,30*Math.pow(d,.7)),E.texIndex=0,E.flg=!0}else E.setInitialCondition(A+b,c+x,.2*l,.2*m,30),E.texIndex=Math.random()<.2?1:0,E.scale=.3*Math.random()+1.2;if(E.scale*=1.2,E.scale*=50*d,this.mParticles.push(E),this.mParticles.length>500){var X=250*Math.random();this.mParticles.splice(X,1)}}}this.mPrevDiffX=n,this.mPrevDiffY=o,this.mPrevMouseX=i,this.mPrevMouseY=a}}},f.prototype.endEvent=function(t){t.preventDefault(),t.stopPropagation(),this.moveFlag=!1},f.prototype.clearCanvas=function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)},f.prototype.onEnterFrame=function(){if(this._drawingEnabled&&this.draw(),this.isZoom?1!=this._toScale&&(this._toScale=1,this._frScale=this.currentScale,this._ticktime=(new Date).getTime()):0!=this._toScale&&(this._toScale=0,this._frScale=this.currentScale,this._ticktime=(new Date).getTime()),this.currentScale!=this._toScale&&this._drawingEnabled){var t=((new Date).getTime()-this.__ticktime)/1e3*.3;t>1&&(t=1,this.currentScale=this._toScale)}},f.prototype.getZoomRectMotion=function(){},f.prototype.draw=function(){var t=this.mParticles.length;if(t>0){this.__eraseMode;for(var e=0;e<t;){var i=this.mParticles[e];i.flg&&Math.random()>.5||(i.flg?(this.mUniformMatrix[0]=i.posX+(1*Math.random()-.5)*i.scale*.06,this.mUniformMatrix[1]=i.posY+(1*Math.random()-.5)*i.scale*.06,this.mUniformMatrix[3]=i.scale*(.4*Math.random()+.8),this.mUniformColor[3]=Math.random(),this.mUniformColor[0]=i.r*this.mUniformColor[3],this.mUniformColor[1]=i.g*this.mUniformColor[3],this.mUniformColor[2]=i.b*this.mUniformColor[3]):(this.mUniformMatrix[0]=i.posX,this.mUniformMatrix[1]=i.posY,this.mUniformMatrix[3]=i.scale,this.mUniformColor[0]=i.r,this.mUniformColor[1]=i.g,this.mUniformColor[2]=i.b,this.mUniformColor[3]=1),this.mUniformMatrix[2]=i.angle,this.drawTriangles(this.mUniformMatrix,this.mUniformColor)),i.life>0?(this.mVF.getForceFromPos(i.posX,i.posY),i.setVFupdate(this.mVF.outX,this.mVF.outY),e++):(this.mParticles.splice(e,1),--t)}this.mUniformColor[3]=1}this.mVF.fadeField(.96)},f.prototype.drawTriangles=function(t,e){this.ctx.fillStyle="rgba(".concat(e[0],", ").concat(e[1],", ").concat(e[2],", ").concat(e[3],")"),this.ctx.beginPath(),this.ctx.arc(t[0],t[1],t[3]/40,0,2*Math.PI),this.ctx.fill()},f.prototype.resetEraser=function(t,e){this.ctx.globalCompositeOperation="source-over",this.ctx.beginPath(),this.ctx.arc(t,e,30,0,2*Math.PI),this.ctx.fillStyle="rgba(255,255,255,1)",this.ctx.fill(),this.ctx.globalCompositeOperation="source-over"},f.prototype.openEraser=function(){this.isEraser=!0},window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};var v=f;function E(){var t=Object(a.useRef)(),e=Object(a.useContext)(c),i=e.width,o=e.height;return Object(a.useEffect)(function(){var e=t.current,a=new v;e&&a.init(e,i,o)},[t,i,o]),n.a.createElement("canvas",{ref:t,width:i,height:o})}function p(){var t=Object(a.useRef)(),e=Object(a.useContext)(c),i=e.width,o=e.height;return Object(a.useEffect)(function(){t.current},[t,i,o]),n.a.createElement("canvas",{ref:t,width:i,height:o})}function g(){var t=Object(a.useRef)(),e=Object(a.useContext)(c),i=e.width,o=e.height;return Object(a.useEffect)(function(){t.current},[t,i,o]),n.a.createElement("canvas",{ref:t,width:i,height:o})}i(91);var Q=i(35),B=i(83),w=i(70),b=i(71),x=function(){function t(e,i,a,n,o){var s=this;Object(w.a)(this,t),this.start=function(t,e,i,a,n){var o=i,r=0;!function i(){o>0?r=1-o:o<0&&(r=-1-o),s.animate(t,e,o,r,a,n,function(){s.concussionIds[n]=window.requestAnimFrame(i)}),0!==Number(r.toFixed(5))?o=r:s.reset()}()},this.ctx=e.getContext("2d"),this.width=i,this.height=a,this.duration=o,this.img=new Image,this.img.src=n,this.img.onload=function(){s.reset()},this.concussionIds=[],this.animateIds=[]}return Object(b.a)(t,[{key:"reset",value:function(){var t=this.animateIds,e=this.concussionIds,i=this.ctx;t.length&&(t.forEach(function(t){return window.cancelAnimationFrame(t)}),this.animateIds=[]),e.length&&(e.forEach(function(t){return window.cancelAnimationFrame(t)}),this.concussionIds=[]),this.pausing=!1,i.restore(),i.clearRect(0,0,this.width,this.height),i.drawImage(this.img,0,0,this.width,this.height)}},{key:"pause",value:function(){this.pausing=!this.pausing}},{key:"animate",value:function(t,e,i,a,n,o,s){var r,h=this,A=this.duration,c=this.animateIds,l=Date.now(),m=l+A,u=a-i;!function a(d){if(!h.pausing){r=d?Date.now():l;var f=i+u*(r>m?A:r-l)/A;if(h.drawGlitch(t,e,f,n),r>m)return void s()}c[o]=window.requestAnimFrame(a)}()}},{key:"translateImage",value:function(t,e,i){var a=this.width,n=this.height,o=this.img,s=this.ctx;s.save(),s.beginPath(),s.moveTo(i[0].x,i[0].y),s.lineTo(i[1].x,i[1].y),s.lineTo(i[2].x,i[2].y),s.lineTo(i[3].x,i[3].y),s.closePath(),s.clip(),s.clearRect(0,0,a,n),s.drawImage(o,t,e,a,n),s.restore()}},{key:"drawGlitch",value:function(t,e,i,a){t<45?this.drawXGlitch(t,e,i,a):t<90?this.drawYGlitch(t,e,i,a):t<135?this.drawLargeYGlitch(t,e,i,a):this.drawLargeXGlitch(t,e,i,a)}},{key:"drawXGlitch",value:function(t,e,i,a){var n=Math.tan(Math.PI*t/180),o=n*this.width,s=[{x:0,y:a},{x:this.width,y:a-o},{x:this.width,y:a-o+e},{x:0,y:a+e}];this.translateImage(i,-n*i,s)}},{key:"drawYGlitch",value:function(t,e,i,a){var n=Math.tan(Math.PI*t/180),o=this.height/n,s=[{x:a,y:0},{x:a-o,y:this.height},{x:a-o+e,y:this.height},{x:a+e,y:0}];this.translateImage(-i/n,i,s)}},{key:"drawLargeYGlitch",value:function(t,e,i,a){var n=Math.tan(Math.PI*(180-t)/180),o=this.height/n,s=[{x:a,y:0},{x:a+o,y:this.height},{x:a+o+e,y:this.height},{x:a+e,y:0}];this.translateImage(i/n,i,s)}},{key:"drawLargeXGlitch",value:function(t,e,i,a){var n=Math.tan(Math.PI*(180-t)/180),o=n*this.width,s=[{x:0,y:a},{x:this.width,y:a+o},{x:this.width,y:a+o+e},{x:0,y:a+e}];this.translateImage(i,n*i,s)}}]),t}(),C=i(72),y=i.n(C),M=i(73),I=i.n(M),X=i(74),P=i.n(X);i(94);function Y(t,e){return Math.floor(Math.random()*(e-t+1))+t}function j(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return e[Math.floor(Math.random()*e.length)]}function L(){var t=Object(a.useRef)(),e=Object(a.useContext)(c),i=e.width,o=e.height,s=Object(a.useState)(1),r=Object(B.a)(s,2),h=r[0],A=r[1],l=[y.a,I.a,P.a],m=null;return Object(a.useEffect)(function(){var e=t.current;return e&&(m=new x(e,i,o,l[h],30)),function(){m.reset(),m=null}},[t,i,o,h]),n.a.createElement("div",{className:"filter"},n.a.createElement("div",{className:"filter-t-shirt"},n.a.createElement("canvas",{width:i,height:o,className:"filter-canvas",ref:t})),n.a.createElement("div",{className:"operation-area"},n.a.createElement(Q.a,{onClick:function(){if(m){m.reset();for(var t=Y(4,7),e=Y(1,179),i=1;i<=t;i++){var a=Y(5,20),n=Y(50+200/t*(i-1),50+200/t*i),o=j(100,-100);m.start(e,a,o,n,i)}}},type:"primary"},"\u968f\u673a\u5272\u88c2"),"\xa0\xa0",n.a.createElement(Q.a,{onClick:function(){m&&m.pause()},type:"primary"},"\u6682\u505c"),"\xa0\xa0",n.a.createElement(Q.a,{onClick:function(){m&&m.reset()}},"\u91cd\u7f6e"),n.a.createElement("br",null),n.a.createElement("div",{className:"image-list"},n.a.createElement("div",{className:"image-list-label"},"\u9009\u62e9\u56fe\u7247\uff1a"),l.map(function(t,e){return n.a.createElement("img",{key:e,className:h===e?"selected":"",src:t,onClick:function(){return A(e)},alt:""})}))))}function R(t){this.scale=1,this.position=0,this._mipmaps=new Array(9),this._LODLevel=[],this._martigX=null,this.mUniformColor=[],this.margin=7,this.InMargin=106/102,this._lodSum=0,this.maxCellLod=null,this._bUpdated=null,this._lod1Count=0,this.updatePointsX=[],this.updatePointsY=[],this.updatePointsLod=[],this._mosicRemderSize=47.8,this._martigX=0,this._martigY=0}R.prototype.init=function(t,e,i){this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.canvas.width=e,this.canvas.height=i;var a=this,n=new Image;n.src="pic5.png",n.onload=function(){a.ctx.drawImage(n,0,0,400,400);var t=a.ctx.getImageData(0,0,400,400);a.generateMipmapWithBitmap(t,400,400)},this._LODLevel=new Array(1600).fill(1).map(function(t,e){return[e%40,Math.floor(e/40),1,e]}),this.maxCellLod=1600,this.canvas.addEventListener("mousedown",this.startEvent.bind(this),!1)},R.prototype.generateMipmapWithBitmap=function(t,e,i){var a=this.ctx.getImageData(0,0,e,i),n=a.data,o=this.ctx.getImageData(0,0,e,i),s=o.data;console.log(o);for(var r=0;r<i;r+=10)for(var h=0;h<e;h+=10){for(var A=0,c=0,l=0,m=0;m<10;m++)for(var u=0;u<10;u++){A+=s[4*(d=r+m+(h+u)*e)+0],c+=s[4*d+1],l+=s[4*d+2]}var d=r+h*e,f=A/100,v=c/100,E=l/100;for(m=0;m<10;m++)for(u=0;u<10;u++){n[4*(d=r+m+(h+u)*e)+0]=f,n[4*d+1]=v,n[4*d+2]=E}}this.ctx.putImageData(a,0,0,0,0,e,i)},R.prototype.getXY=function(t){var e=t.touches?t.touches[0].clientX:t.clientX,i=t.touches?t.touches[0].clientY:t.clientY;return{x:e-this.canvas.offsetLeft+(document.body.scrollLeft||document.documentElement.scrollLeft),y:i-this.canvas.offsetTop+(document.body.scrollTop||document.documentElement.scrollTop)}},R.prototype.startEvent=function(t){t.preventDefault(),t.stopPropagation();var e=this.getXY(t);this.addedForce(e.x,e.y),this.draw()},R.prototype.draw=function(){var t=this;console.log(this.updatePointsX),console.log(this.updatePointsY),console.log(this.updatePointsLod),console.log(this._LODLevel.length);var e=this.ctx.getImageData(0,0,400,400),i=e.data,a=this.ctx.getImageData(0,0,400,400).data;this.updatePointsX.forEach(function(e,n){for(var o=10*t.updatePointsX[n],s=10*t.updatePointsY[n],r=t.updatePointsLod[n],h=(n=o,s),A=0,c=0,l=0,m=10*r,u=m*m,d=0;d<m;d++)for(var f=0;f<m;f++){A+=a[4*(v=(o=n+d)+400*(s=h+f))+0],c+=a[4*v+1],l+=a[4*v+2]}var v=n+400*h,E=A/u,p=c/u,g=l/u;for(d=0;d<m;d++)for(f=0;f<m;f++){i[4*(v=(o=n+d)+400*(s=h+f))+0]=E,i[4*v+1]=p,i[4*v+2]=g}}),this.updatePointsX=[],this.updatePointsY=[],this.updatePointsLod=[],this.ctx.clearRect(0,0,400,400),this.ctx.putImageData(e,0,0,0,0,400,400)},R.prototype.addedForce=function(t,e){for(var i,a,n,o,s,r,h=0;h<45;h++)A(this);function A(t){s=Math.floor(t._LODLevel.length*Math.random()),r=t._LODLevel[s],i=r[0],a=r[1],n=r[2],o=8===n?8:2*n,function(t){i%2===1?i-=1:Math.floor(i/n)%2===1&&(i-=n);a%2===1?a-=1:Math.floor(a/n)%2===1&&(a-=n);for(var e=a;e<a+o;e++)for(var s=i;s<i+o;s++)t._LODLevel.forEach(function(n,r){n&&n[0]===s&&n[1]===e&&(n&&n[0]===i&&n[1]===a?n[2]=o:t._LODLevel[r]=void 0)});t._LODLevel=t._LODLevel.filter(function(t){return!!t}),t.updatePointsX.push(i),t.updatePointsY.push(a),t.updatePointsLod.push(o)}(t)}};var W=R;function D(){var t=Object(a.useRef)(),e=Object(a.useContext)(c),i=e.width,o=e.height;return Object(a.useEffect)(function(){var e=t.current,a=new W;e&&a.init(e,i,o)},[t,i,o]),n.a.createElement("canvas",{ref:t,width:i,height:o})}function T(){var t=Object(a.useRef)(),e=Object(a.useContext)(c),i=e.width,o=e.height;return Object(a.useEffect)(function(){t.current},[t,i,o]),n.a.createElement("canvas",{ref:t,width:i,height:o})}i(140);var F=i(80),U=i.n(F),Z={maxY:8,maxX:8,generateLayout1:function(){var t=[],e=[];this.getRandomY(0,e,2,this.maxY),console.log("end"),console.log("arr "+JSON.stringify(e));for(var i=0,a=e.length;i<a;i++){var n=e[i],o=[n],s=n;this.getRandomY(s,o,n,this.maxX),console.log("xArrLine "+JSON.stringify(o)),t.push(o)}return this.generatePosition(t)},getRandomY:function(t,e,i,a){var n=Math.floor(Math.random()*i)+1,o=t+n;o<=a||o>a&&(n=a-t),e.push(n),(t+=n)<a&&this.getRandomY(t,e,i,a)},generatePosition:function(t){var e=0,i=0,a=[],n=Math.floor(3*Math.random())-1;console.log("rotate "+n),1===n?i+=105:-1===n?(e+=130,i-=40):(i+=75,e+=80);for(var o=e,s=0,r=t.length;s<r;s++){var h=t[s],A=i;s>0&&(o=o+30*t[s-1][0]+2);for(var c=0,l=h.length;c<l;c++){var m=h[c];c>0&&(A=A+30*h[c-1]+2);var u={left:A,top:o,width:30*m,height:30*m};0===s||s===t.length-1?c>1||c<h.length-2?u.show=Math.floor(2*Math.random()):u.show=1:c<1||c>h.length-2?u.show=Math.floor(2*Math.random()):u.show=1,a.push(u)}}var d={rotate:n*(1/6*Math.PI),images:a};return console.log("bitmap "+JSON.stringify(d)),d}},O={ctx:null,imgArr:[],imgIcon:null,init:function(t,e){this.ctx=t,this.imgArr=e,this.imgIcon=e[0],t.drawImage(this.imgIcon,50,50,300,300)},draw:function(){var t=Z.generateLayout1();this.ctx.clearRect(0,0,600,600);var e=t.images;this.setAnimation(e),console.log("imgList "+JSON.stringify(e)),this.drawImageAnimation(t.rotate,e)},onlyDraw:function(){var t=Z.generateLayout1(),e=t.images;this.ctx.clearRect(0,0,600,600),this.ctx.save(),this.ctx.rotate(t.rotate);for(var i=0,a=e.length;i<a;i++){var n=e[i],o=n.left,s=n.top;n.show&&this.ctx.drawImage(this.imgIcon,o,s,n.width,n.height)}this.ctx.restore()},setAnimation:function(t){for(var e=0,i=t.length;e<i;e++){var a=t[e];a.drawLeft=80,a.drawTop=100,a.speedX=(a.left-a.drawLeft)/25,a.speedY=(a.top-a.drawTop)/25,a.addSpeedX=a.speedX/30,a.addSpeedY=a.speedY/30}},speed:function(t){for(var e=0,i=t.length;e<i;e++){var a=t[e];a.speedX=a.speedX+a.addSpeedX,a.speedY=a.speedY+a.addSpeedY,Math.abs(a.drawLeft-a.left)>Math.abs(a.speedX)?a.drawLeft=a.drawLeft+a.speedX:a.drawLeft=a.left,Math.abs(a.drawTop-a.top)>Math.abs(a.speedY)?a.drawTop=a.drawTop+a.speedY:a.drawTop=a.top}},drawImageAnimation:function(t,e){var i=this;this.ctx.clearRect(0,0,600,600),this.ctx.save(),this.ctx.rotate(t);for(var a=0,n=e.length;a<n;a++){var o=e[a],s=o.drawLeft,r=o.drawTop;o.show&&this.ctx.drawImage(this.imgIcon,s,r,o.width,o.height)}this.ctx.restore(),o.drawLeft===o.left&&o.drawTop===o.top||window.requestAnimationFrame(function(){i.speed(e),i.drawImageAnimation(t,e)})}};function G(){var t=Object(a.useRef)(),e=Object(a.useContext)(c),i=e.width,o=e.height;return Object(a.useEffect)(function(){var e=t.current;if(e){var i=e.getContext("2d");console.log(i);var a=new Image;a.src=U.a,a.onload=function(){O.init(i,[a])}}},[t,i,o]),n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("button",{onClick:function(){O.draw()}},"\u8f6c\u6362")),n.a.createElement("canvas",{className:"auto-layout",ref:t,width:i,height:o}))}var S=i(17);function N(){var t=Object(a.useRef)(),e=Object(a.useContext)(c),i=e.width,o=e.height;return Object(a.useEffect)(function(){var e=t.current;if(e){var a=new S.d(70,i/o,.01,10);a.position.z=1;var n=new S.e,s=new S.a(.2,.2,.2),r=new S.c,h=new S.b(s,r);n.add(h);var A=new S.f({antialias:!0});A.setSize(i,o),e.appendChild(A.domElement),function t(){requestAnimationFrame(t),h.rotation.x+=.01,h.rotation.y+=.02,A.render(n,a)}()}},[t,i,o]),n.a.createElement("div",{ref:t,style:{width:i,height:o}})}function V(){return n.a.createElement(l,null,n.a.createElement(h.c,null,n.a.createElement(h.a,{exact:!0,path:"/"},n.a.createElement("h1",null,"WebGL Demo")),n.a.createElement(h.a,{exact:!0,path:"/paint",component:E}),n.a.createElement(h.a,{exact:!0,path:"/moma01",component:p}),n.a.createElement(h.a,{exact:!0,path:"/moma02",component:g}),n.a.createElement(h.a,{exact:!0,path:"/mosaic",component:D}),n.a.createElement(h.a,{exact:!0,path:"/glich",component:L}),n.a.createElement(h.a,{exact:!0,path:"/splash",component:T}),n.a.createElement(h.a,{exact:!0,path:"/layout",component:G}),n.a.createElement(h.a,{exact:!0,path:"/three",component:N})))}i(146);var J=function(){return n.a.createElement("div",{className:"container"},n.a.createElement(r.a,null,n.a.createElement("ul",{className:"navbar"},n.a.createElement("li",null,n.a.createElement(r.b,{exact:!0,activeClassName:"active",to:"/"},"Home")),n.a.createElement("li",null,n.a.createElement(r.b,{activeClassName:"active",to:"/paint"},"Paint Demo")),n.a.createElement("li",null,n.a.createElement(r.b,{activeClassName:"active",to:"/moma01"},"Moma01 Demo")),n.a.createElement("li",null,n.a.createElement(r.b,{activeClassName:"active",to:"/moma02"},"Moma02 Demo")),n.a.createElement("li",null,n.a.createElement(r.b,{activeClassName:"active",to:"/glich"},"Glich Demo")),n.a.createElement("li",null,n.a.createElement(r.b,{activeClassName:"active",to:"/mosaic"},"Mosaic Demo")),n.a.createElement("li",null,n.a.createElement(r.b,{activeClassName:"active",to:"/splash"},"Splash Demo")),n.a.createElement("li",null,n.a.createElement(r.b,{activeClassName:"active",to:"/layout"},"Layout Demo")),n.a.createElement("li",null,n.a.createElement(r.b,{activeClassName:"active",to:"/three"},"Three-js Demo"))),n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"demo"},n.a.createElement(V,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},72:function(t,e,i){t.exports=i.p+"static/media/test.77585d9f.png"},73:function(t,e,i){t.exports=i.p+"static/media/test1.335b4691.png"},74:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAYAAACI7Fo9AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAA6ppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxOS0wNS0xMFQwOTowNToyNTwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+UGl4ZWxtYXRvciAzLjguMzwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpDb21wcmVzc2lvbj41PC90aWZmOkNvbXByZXNzaW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzI8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4yNTA8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjI1MDwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpGwM0GAAARMElEQVR4Ae3df/Atcx3HcSJKws1v0r0uMop0I43Ib9EMomhK40elUjNMpvT7jxrjR5mhX1eU8qMwldAUZYxulxmicFWGuJQbQvIjXZIf9XqNs2adu5/P2R+fPbvne56fmfecc/aznx/72P3s7tnd8/0utxwJAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAIKnA8klrozIEJlfgCHV9pYLu36VpvyqYziQEEJhAgcfU5/8VxEUTuCzLdHnFZaZ0M+EANXtYN01HWz1VuQujc5CJwAQI9GWgbyard/bQ68Ie9okuIVBZ4CWVS1AAAQQmToCBPnGrjA4jUF2AgV7djBIITJwAA33iVhkdRqC6AAO9uhklEJg4gb48MLOC5F5aU887q6WRsi+P5I3K+q9meG7UTOTPCAHfR1+tYEku1rR3FUyfqEl9ub32rNQcddKos5L/1KmUMgjMJIFRg2QmLSvLgsDUCjDQp3bVs+DTJMBAn6a1zbJOrQADfWpXPQs+TQIM9Gla2yzr1Aow0Kd21bPg0yTAQJ+mtc2yTq0AA72/q35ldW2V/naPnk2SQF8emJkks5R99ZOJ2yj2UWyuWC8Xa+i9k5/6e3AQD+j1r4orFAsUsScClU1C4HmBvjwC22R9+Kwk9lRd35bRj/rurvAf2thXsaGiTnpKha5W/FLhP5CxRNFWOkIVvzdS+XHKWxjJT5H1EVXynkhFX1aePYrSZZpY9Pfg8vPuog8r5CcM3v9Dr38omF40yevzyaIMpjUX8EAv+ltf2bTmLaSr4d2qavGI/mb9rvLqZ/LnK9ZXtJH8DPhfFKE+3a281dtoeFDnlnr1o8yh9r2ziyUPvlDZlNNXjXWCvGYCkzDQ36xF9NEm5UZVVNcTauOrijUVqdNOqtBnTkXtetoPUzc4qM9H4kWKULsPKW/UDo6BPsCc5Jc+D3RfUPuewr+AC22obUx/WO3tpUidTlKFsf7GTq3r9uXEEW0eWKJiBnoJpL7P0teB/irBjeMoHhp4z6j9TyVeeaOOrv9Ue3WvORR1dQdNjJ1FnFtUqGDa1A/0vl2oKlhHIyd5oPftYtxc9ckXgDYf2fvnZ/CFtd8rrlXcq/AR2eHl8mm4w6en2yu2U7xMUTadpxk/rPDGniL5+7L7unKgMt8R2EvhHVCTtKoK36ywZVHydYGtFf4d+ah0o2YYdTFuC83jbWk4Pa4JS4YnBj573TwRyGNyQwGvnNBRrenGVqdr/j7u22CxPjnPR9yfKHZXhAaNspZJnndnxTmK2AWqfPvXat4mf4BDxV+UjtGnfP3D749+0dz1Pnw30oZ3gLvUqzZYyjuM4eXw54uCJcgYq0CfBvocLflDiqINJpvm7+unKzZSNE3rqIIvKXw/Pas/9HqB5kmVfCZ4pSLUls8eXtegMd+mCtXt6Sc3qDtUlIEekunJ9L4MdJ9O+xQxtoH6dHOPFtw2UZ2xgZf16fMJ2/aO6hFFVvfw6w3K8zMDVdPaKhA7I/I97SpnQGXbZ6CXlepovr4M9LO1/MMbe/7zb5WfPe3WFtVRqvjZSD98NrFfwsYPjrTlZT+hRlsXR+r0V5U31KizTBEGehmlDufpw0D/uJY/P6iH3/s78mpjMjpI7fji3nAfss++uJTyyri/EmR1D796p7Ojomw6XDMO15H/fGzZimrMx0CvgTbOIl0PdJ/Cxi6K3ab8cQ3yzH0vvfHTcvlBkn9/WjZjgtdZquOeSFt3Ke+VJdqZo3n+pcj3M//+N8rzum4rMdDbkk1Ub9cD/QwtR36DzL/3YNsm0XJWrcb30PN9yb/3EX921Qoj8/u6Q+yhoO9HyjrL63ChIt/H/HsPwpT9VXXLJAb6MiT9mtDlQJ8riqcV+Y0y//5zHVL5yvjlkb6dmbhvX4u0ZZMDIu3Fdkoue1ikbKosBnoqyZbq6XKgn6Nlyg/s/Ps7lLdCS8tcttr1NWPoqTDvoHy1PlXyXYdbFHmD/Hv/Cmy9gsa20rTYV58LC8q0MYmB3oZqwjq7Guibahn80Et+Y86/PzzhMjapan6kjyc2qbig7DxNi10buHSojJ9Wu1mRd8u/v095fipwHImBPg7lBm10NdA/rT7nN8r8+8XKW7HBMqUsurEqC+2QbkrZ0KAuf13JWwy//1iuzZNGzPuO3Lxtv2Wgty3csP6uBvoC9Xt4I84+H91wmVIXvyTQV19AKzqdbtK+18fVgfbss1TxWsWOitg9/5R3BtTUyMRAH0nU7QxdDHTfLgqdonrjTT14mgr7KJrthIZfD21aeUF5n0XEbpX9Tvl3KYb7kn3+s/JWUYwzMdDHqV2jrS4G+v7qZ7ZRDr9eWWMZ2i7i6wnD/cw+n99S4x+ItJm1XfTqi4TbtdSnWLUzeqD35XtkbAX0MW/PSKf8E855kfyusvxjm7UKGt+5YFqKSWepkv0U3ilWScdr5uurFGDe6RDo4ojuq8dFR6NJnObv6XV+fFJm61pbM91fweo6zdvVwWdGH9E9SEjVBdatXqS3JZZXz9paHt87/1DJJX9C8x2i8B0CUmIBBno90HXqFettKT9Y01by2c8ZJSr303G3l5iPWWoIMNBroKnITBvoG9RjKF3q2yPm9AW4X4yYh+wGAgz06nirq8jK1Yv1ukSbR3Q/BnzaiKX3NYKzFf4aQWpBoKsLHy0sSi+qXKRe/KgXPanWCf/VlrbSZ1TxW0tUvpvmOUZxSol5mWUKBXxWErva3QZJ6EcYl7fR2ATX6duMoQeLitaZXf0jly4SV927UO95mw8G+vfqwPRpnOxfs/1AUeXWnb8SnaeYaV+NtEjdJr6j1/MPDfQN61U3I0udoKV6fWDJfDQPJR/RXZaEwIsEujh1v0w9KDr19DQ/Bz/taVcB+EGckNHJyrsgku+y/s4+zjSjT93HCdlWW10M9PlamNBGvGdbCzoh9fquxN0Rn+zPNc/SPH+LzLdEeWsoxpUY6OOSrtlOFwM99qOWab9qfK7WY2gn+JTyts6t5z30Pnbk91F/XImBPi7pmu10MdBjP1O9teZyzIRiB2ohQoPc032rbTidqgmxMu8fLtDSZwZ6S7Cpqu1ioLvvCxShDXRuqoVLWE/bv5F3/bF/R3WV8r2uhpOvzv9JEbJ8VHmvGS7UwmcGeguoKavsaqD76BTaOL+ZcgET1HWA6vBjpt9RbJSgvqIqYr/o8x+h2Lio0GDaG/Xq0/qQ5wLlFe0kBsWTvDDQkzC2V0lXA31TLVLob7H5wY+2BlRVSf9U9AFFNojct68r1lWkSh9VRVn9Ra8fLNFQbMfpOo8tUUeTWRjoTfTGULarge5FO0dRtGF72umeoQfJfy65qI9LNd1/Yqpp8g7v34qiNjztkpINeD1eFaln+EJeyWpLz8ZAL03VzYxdDvS5WmSfEhdt5H70c9tuSF5o9eBA39xfX+32H2hskvyDlWsURcvvaT6T8BlF2TRHM4YGnOv7o8Lf6dtIoXYvaqMx6qwu0OVAd2/9vTe0ofs+cVc/ad1AbT8c6dvZymuavqAKQsvu6fvVaOCwEXX6Kn0biYHehmrCOrse6L4i7O+9oQ3+KuVVed47BY2fuV8U6ZN3AE13QG9SHT5rCS33mcqrm0JfN9yWz0R8/z11YqCnFk1cX9cD3YtzpCK0wXu6f6ixkmIcaZ4auVcR60/Te9M+fb4l0sadyltVUTf5v7Pcpwgtwz3Km1W38kA5BnoApi+T+zDQbXGWIrRherqP7Gsp2kz7qvLYhTH341sJOhB7yOVZ1b9Dgjb2Vh0xz9S/+2egJ1hpbVbRl4Huo9wNIzbOxcrfqgWM5VXnJxQeZLHBca3ym55Z7KY6fPocaudE5aVK3imF2vH0Q1I1pHpCA/3ShG1QVQOBvgx0L8JsRezpMG+czyjOUKynaJpeoQp8i+xWRWxAOM+n075A1yStrsJLFKG2blJe0x1Jvn/+by23Rdp7VHmz8wUavP97oJ3rGtRJ0YQCfRroXqx5itj3y2yQ+BTbRz/PXzV54/ZPPR9RZPXFXu/QfL5A1zT5D0mE2vEFyS2bNlBQfltNe1oRaneh8rwNNE0+2ylqwzsT/7ZhopNP+SY9eSX7lDWUuljGjdQZ/2a97Ibvi0s/V/jU//5B+B70aoo5Q7GxPnvn4HvYZdLtmmlXhXc+TdJBKvzjSAWfVN4pkfwmWV9U4eMiFXxWeV+J5JfJOl8zvS8w49WafqHC6+RxhXc8WfIdDK83UssCfTuiZ4vrQXqFougoMa5pF6v9WVmHGryur7KxryQLlN/mDtU7tWsUITc/NVfnzEjFXkjH612o/tj0X79QA29aFejrQPdC+/65j3KxU8/YRlQ3z6fRRylSpdhf1PGprZ8laDttogZ8NA2Z+HafL4jWTTuqYKju2HQGel3xiuX6PNCzRdlMb36qiG0wqfJ8FN8iazjB65Ej+n1ogjbKVnHEiL58o2xFgflsV3U9MNADmKknT8JAz5Z5B72JnYJW3ciy+Z9Tvf6a8JasoUSv3kH5omHWzvCrv7eOO/1MDQ73I/tsh7c36JCX98lI/Vk7+deJGOhtfq9q4F256NsiJXwhpW/Jfx11n0Fsr1d/B62T/PfXLhjE3XUqGFFmjvJ9YTGUblaGf2s+zrSGGtsq0qAvjvk0vm7yYJ+v2LNkBQs0324l5+1stpky0DsDTNDwmqpjb8WWinWHwhu1v5f6e/BjCt/rXaTwVd4bB5/1QmpBYH/VuZNi00FsqNelCq8LX32/U7FYcb1iIo7q6icJAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQGBMAv8Hx8xF5vXVL1wAAAAASUVORK5CYII="},80:function(t,e,i){t.exports=i.p+"static/media/template.eb6c2403.jpeg"},85:function(t,e,i){t.exports=i(147)},90:function(t,e,i){},94:function(t,e,i){}},[[85,1,2]]]);
//# sourceMappingURL=main.0d25f678.chunk.js.map