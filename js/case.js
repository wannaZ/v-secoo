
$(function(){

	var caseCon = document.getElementsByClassName('case-con');	
//	alert(caseCon.length);
	ajax({
		url: 'json/case.json',
		success: function(data){
//			alert(data);
			var arr = JSON.parse(data);
//			alert(arr.length);

			for(var i = 0; i < arr.length; i++){
//				alert(arr[i]);
				
					var msg1 = arr[i].id;
					var msg2 = arr[i].img;
					
					
					
					var oDiv = document.createElement('div');
					$(oDiv).attr('class', 'case-div');
					var oAs = document.createElement('a');
					$(oAs).attr({'href':'list.html','class':'case-a'});
					
					var oNoneCol = document.createElement('div');
					$(oNoneCol).attr('class', 'case-divnone');
					 
					var oImg = document.createElement('img');
					$(oImg).attr('class', 'case-div-img');
					oImg.src = msg2;
					var oP = document.createElement('p');
					oP.innerHTML = msg1;
					$(oP).attr('class', 'case-div-id');



					oDiv.appendChild(oImg);
					oDiv.appendChild(oP);
					oDiv.appendChild(oNoneCol);
					
					oAs.appendChild(oDiv);
					
					
					caseCon[0].appendChild(oAs);
					
					$(oDiv).mouseenter(function(){
						$(this).find('div').css('display','block');
					})
					$(oDiv).mouseleave(function(){
						$(this).find('div').css('display','none');
					})
			}
		},
		error: function(msg){
			alert(msg);
		}
		
	})
	
})
//var aToLists = document.getElementsByClassName('case-div');
//	alert(aToLists.length);
//	for(var i = 0; i < aToLists.length; i++){
//		
//	}
	
