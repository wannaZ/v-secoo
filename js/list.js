$(function(){
	var oUl = document.getElementById('earrings-case');
	ajax({
		url: 'json/list.json',
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
						$(oAs).attr({'href':'particular.html','class':'list-a','name':'value'});
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
					oLi.onclick = function(){
//						location.href = 'particular.html';
						var oAstext = $(this).find('a').html();
//						alert(oAstext);
						$.cookie('testcookie', oAstext, { expires: 999, path: 'secoo' });
//						alert($.cookie('testcookie'));
						var oImgSrc =$(this).find('img')[0].src;
//						alert(oImgSrc);
						$.cookie('imgcookie',oImgSrc, { expires: 999, path: 'secoo' });
//						alert($.cookie('imgcookie'));
						var oPstext = $(this).find('p').html();
//						alert(oPstext);
						$.cookie('ptestcookie', oPstext, { expires: 999, path: 'secoo' });
//						alert($.cookie('ptestcookie'));
//						$.cookie("userbuy",[{'id':$(this).find('a').html(),'img':$(this).find('img')[0].src,'price':$(this).find('p').html()}])
//						alert($.cookie("userbuy"));
						
					}	
				
						
			}
			
			
			
		}
	})
})
	
//						var msg = arr[i].id;
////						alert(msg);
//						var oLi = document.createElement('li');
//						var oAs = document.createElement('a');
//						$(oAs).attr({'href':'#','class':'last-a'});
//						oAs.innerHTML = msg;
////						alert(msg);
//						oLi.appendChild(oAs);
//						oUl2.appendChild(oLi);
//					}else if(i > 8 && i <= 12){
//	
//						var msg = arr[i].id;
////						alert(msg);
//						var oLi = document.createElement('li');
//						var oAs = document.createElement('a');
//						$(oAs).attr({'href':'#','class':'last-a'});
//						oAs.innerHTML = msg;
////						alert(msg);
//						oLi.appendChild(oAs);
//						oUl3.appendChild(oLi);
//					}else{
//						var msg = arr[i].id;
////						alert(msg);
//						var oLi = document.createElement('li');
//						var oAs = document.createElement('a');
//						$(oAs).attr({'href':'#','class':'last-a'});
//						oAs.innerHTML = msg;
////						alert(msg);
//						oLi.appendChild(oAs);
//						oUl4.appendChild(oLi);
//					}
//					}
//		},
//		error: function(msg){
//			alert(msg);
//		}
//		
//	}
//})