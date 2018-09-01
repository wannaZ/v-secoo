$(function(){

	var oUlssss = document.getElementById('secoo-nav-ul');
	var aLisssss = oUlssss.getElementsByTagName('li');
	var oDownpull = document.getElementById('down-pull');
	var oClassify = document.getElementById('classify');
	var oBrand = document.getElementById('brand');
	var oHot = document.getElementById('hot');
	//	alert(aLisssss.length);
	
//	alert(1);
	aLisssss[1].onmouseenter = function(){
		oDownpull.style.display = "block";
		oDownpull.style.height = "250" + "px";
		ajax({
		url: 'json/downpull1.json',
		success: function(data){
//			alert(data);
			var arr = JSON.parse(data);
//			var oDpUl = oDownpull.getElementsByTagName('ul');
//			oDownpull.removeChild(oDpUl);


			//添加第一个ul(分类)节点
			
//			var oClassify = document.createElement('ul');
//			$(oClassify).attr('class','classify');
			
			//添加ul下的span节点
			
//			var oSpan1 = document.createElement('span');
//			oSpan1.innerHTML = '分类';
			
			//插入对应节点
			
//			oClassify.appendChild(oSpan1);
//			oDownpull.appendChild(oClassify);
			
			
			//添加第二个ul(品牌)节点
			
//			var oBrand = document.createElement('ul');
//			$(oBrand).attr('class','brand');
			
			//添加ul下的span节点
			
//			var oSpan2 = document.createElement('span');
//			oSpan2.innerHTML = '品牌';
			
			//插入对应节点
			
//			oBrand.appendChild(oSpan2);
//			oDownpull.appendChild(oBrand);
			
			//添加第二个ul(品牌)节点
			
//			var oHot = document.createElement('ul');
//			$(oHot).attr('class','hot');
			
			//添加ul下的span节点
			
//			var oSpan3 = document.createElement('span');
//			oSpan3.innerHTML = '热词';
			
			//插入对应节点
			
//			oHot.appendChild(oSpan3);
//			oDownpull.appendChild(oHot);
			oClassify.innerHTML = '';
			oBrand.innerHTML = '';
			oHot.innerHTML = '';
			for(var i = 0; i < arr.length; i++){
				if(i < 9){
					var msg = arr[i].id;
//						alert(msg);
					
					var oLi = document.createElement('li');
					
					var oAs = document.createElement('a');
					$(oAs).attr({'href':'#','class':'downpull-a'});
					oAs.innerHTML = msg;
//						alert(msg);
					oLi.appendChild(oAs);
					
					oClassify.appendChild(oLi);
					
				}else if(i >= 9 && i <22){
					var msg2 = arr[i].id;
//						alert(msg);
					
					var oLi = document.createElement('li');
					
					var oAs = document.createElement('a');
					$(oAs).attr({'href':'#','class':'downpull-a'});
					oAs.innerHTML = msg2;
////						alert(msg);
					oLi.appendChild(oAs);
				
					oBrand.appendChild(oLi);
				}else{
//					alert(arr[21].id);
					var msg3 = arr[i].id;
//						alert(msg);
					
					var oLi = document.createElement('li');
					
					var oAs = document.createElement('a');
					$(oAs).attr({'href':'#','class':'downpull-a'});
					oAs.innerHTML = msg3;
////						alert(msg);
					oLi.appendChild(oAs);
				
					oHot.appendChild(oLi);
				
				}
				
			}
//			var oSpan1 = document.createElement('span');
//				oSpan1.innerHTML = '分类';
//				oClassify.appendChild(oSpan1);
//			var oSpan2 = document.createElement('span');
//				oSpan2.innerHTML = '品牌';
//				oBrand.appendChild(oSpan2);
//			var oSpan3 = document.createElement('span');
//				oSpan3.innerHTML = '热词';
//				oHot.appendChild(oSpan3);
				
			}
		})
	}
	
	oDownpull.onmouseleave = function(){
		oDownpull.style.display = "none";
	}
	
	
	//第二个鼠标滑过事件
	aLisssss[2].onmouseenter = function(){
		oDownpull.style.display = "block";
		oDownpull.style.height = "400" + "px";
		ajax({
		url: 'json/downpull2.json',
		success: function(data){
//			alert(data);
			var arr = JSON.parse(data);
			oClassify.innerHTML = '';
			oBrand.innerHTML = '';
			oHot.innerHTML = '';
			for(var i = 0; i < arr.length; i++){
				if(i < 5){
					var msg = arr[i].id;
//						alert(msg);
					
					var oLi = document.createElement('li');
					
					var oAs = document.createElement('a');
					$(oAs).attr({'href':'#','class':'downpull-a'});
					oAs.innerHTML = msg;
//						alert(msg);
					oLi.appendChild(oAs);
					
					oClassify.appendChild(oLi);
					
				}else if(i >= 5 && i <27){
					var msg2 = arr[i].id;
//						alert(msg);
					
					var oLi = document.createElement('li');
					
					var oAs = document.createElement('a');
					$(oAs).attr({'href':'#','class':'downpull-a'});
					oAs.innerHTML = msg2;
////						alert(msg);
					oLi.appendChild(oAs);
				
					oBrand.appendChild(oLi);
				}else{
//					alert(arr[21].id);
					var msg3 = arr[i].id;
//						alert(msg);
					
					var oLi = document.createElement('li');
					
					var oAs = document.createElement('a');
					$(oAs).attr({'href':'#','class':'downpull-a'});
					oAs.innerHTML = msg3;
////						alert(msg);
					oLi.appendChild(oAs);
				
					oHot.appendChild(oLi);
				
				}
				
			}
			}
		})
	}
	
	oDownpull.onmouseleave = function(){
		oDownpull.style.display = "none";
	}
})