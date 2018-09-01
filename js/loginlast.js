$(function(){
	var oDivs = document.getElementById('last-con');
	var aUls = oDivs.getElementsByTagName('ul');
	var oUl1 = document.getElementById('last-ul1');
	var oUl2 = document.getElementById('last-ul2');
	var oUl3 = document.getElementById('last-ul3');
	var oUl4 = document.getElementById('last-ul4');
	ajax({
		url: 'json/link.json',
		success: function(data){
//			alert(data);
			var arr = JSON.parse(data);
//			alert(arr.length);

			for(var i = 0; i < arr.length; i++){
//				alert(arr[i]);
				
					
					
					
					
					if(i < 4){
						var msg = arr[i].id;
//						alert(msg);
						var oLi = document.createElement('li');
						
						var oAs = document.createElement('a');
						$(oAs).attr({'href':'#','class':'last-a'});
						oAs.innerHTML = msg;
//						alert(msg);
						oLi.appendChild(oAs);
						oUl1.appendChild(oLi);
					}else if(i > 4 && i <= 8){
	
						var msg = arr[i].id;
//						alert(msg);
						var oLi = document.createElement('li');
						var oAs = document.createElement('a');
						$(oAs).attr({'href':'#','class':'last-a'});
						oAs.innerHTML = msg;
//						alert(msg);
						oLi.appendChild(oAs);
						oUl2.appendChild(oLi);
					}else if(i > 8 && i <= 12){
	
						var msg = arr[i].id;
//						alert(msg);
						var oLi = document.createElement('li');
						var oAs = document.createElement('a');
						$(oAs).attr({'href':'#','class':'last-a'});
						oAs.innerHTML = msg;
//						alert(msg);
						oLi.appendChild(oAs);
						oUl3.appendChild(oLi);
					}else{
						var msg = arr[i].id;
//						alert(msg);
						var oLi = document.createElement('li');
						var oAs = document.createElement('a');
						$(oAs).attr({'href':'#','class':'last-a'});
						oAs.innerHTML = msg;
//						alert(msg);
						oLi.appendChild(oAs);
						oUl4.appendChild(oLi);
					}
					}
		},
		error: function(msg){
			alert(msg);
		}
		
	})
})