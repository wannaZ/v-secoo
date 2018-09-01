$(function(){
	var oUl = document.getElementById('necklace-case');
	ajax({
		url: 'json/necklace.json',
		success: function(data){
//			alert(data);
			var arr = JSON.parse(data);
//			alert(arr.length);

			for(var i = 0; i < arr.length; i++){
//				alert(arr[i]);
				
					
					
					
					

						var msg1 = arr[i].id;
//						alert(msg1);
						var msg2 = arr[i].img;
//						alert(msg2);
						var msg3 = arr[i].price;
//						alert(msg3);
						var oLi = document.createElement('li');
						$(oLi).attr('class','list-li');
						
						
						var oAs = document.createElement('a');
						$(oAs).attr({'href':'particular.html','class':'list-a'});
						oAs.innerHTML = msg1;
						
						var oImg = document.createElement('img');
						$(oImg).attr('class', 'list-img');
						oImg.src = msg2;
						var oP = document.createElement('p');
						$(oP).attr('class','list-p');
						oP.innerHTML = msg3;
////						alert(msg);
						oLi.appendChild(oImg);
						oLi.appendChild(oAs);
						oLi.appendChild(oP);
						oUl.appendChild(oLi);
						
						
			}
		}
	})
})