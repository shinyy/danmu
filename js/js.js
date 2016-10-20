$(function(){


   function move(arg){
   		var s=1;
   		arg.style.top=Math.random()*500+'px';
   	 	setInterval(function(){
   					if(parseInt(arg.style.left)<1500){
   						s+=1;
   						arg.style.left=s+'px'
   					}
   				},10)
   };

   var btn=document.getElementsByClassName('btn')[0],
       txt=document.getElementsByClassName('txt')[0],
       wrap=document.getElementsByClassName('wrap')[0],
       danmu,
       danmus=[];

   btn.onclick=function(){
   		if(txt.value!=''){
   			var node=document.createElement('P');
   			
   			node.innerText=txt.value;
   			node.style.left=0;
   			move(node)
   			


   		 //    danmus.push(node);
   			// wrap.appendChild(danmus[danmus.length-1]);
   			// console.log(danmus)


   			wrap.appendChild(node)
   		}
   }
   
   document.onkeydown=function(){
   	 var e=event||window.event||arguments.callee.caller.arguments[0];
   	 if(e&&e.keyCode==13){
   	 	btn.onclick();
   	 }
   }



})