$(function(){
	
	//跳转后生成节点
	var oTrolleyaShoping = document.createElement('div');
	var oTrolleyaCon = document.querySelector('.trolleya-list-con');
	$(oTrolleyaShoping).attr('class','trolleya-shoping');
	oTrolleyaCon.appendChild(oTrolleyaShoping);
	
	//创建ul节点
	var oTrolleyaConUl = document.createElement('ul');
//	$(oTrolleyaConUl).attr('display','block');
	oTrolleyaShoping.appendChild(oTrolleyaConUl);
	
	//动态添加第一个li节点
	var oTrolleyaConLi1 = document.createElement('li');
	//动态创建按钮 添加到li中
	var oTrolleyaConLiIn = document.createElement('input');
	$(oTrolleyaConLiIn).attr({'type':'checkbox','checked':'checked'});
	oTrolleyaConLi1.appendChild(oTrolleyaConLiIn);
	
	//第一个li节点添加到ul中
	oTrolleyaConUl.appendChild(oTrolleyaConLi1);
	
	//动态添加第二个li节点
	var oTrolleyaConLi2 = document.createElement('li');
	//创建img标签添加到li中
	var oTrolleyaConImg = document.createElement('img');
	oTrolleyaConImg.src = $.cookie('imgcookie');
	oTrolleyaConLi2.appendChild(oTrolleyaConImg);
	
	//创建文本节点
	var oTrolleyaConTxt = document.createElement('div');
	$(oTrolleyaConTxt).attr('class','trolleya-shoping-li2');
	
	//创建a节点插入到文本节点
	var oTrolleyaConTxtA = document.createElement('a');	
	$(oTrolleyaConTxtA).attr('href','particular.html');
	oTrolleyaConTxtA.innerHTML = $.cookie('testcookie');
	oTrolleyaConTxt.appendChild(oTrolleyaConTxtA);
	
	//创建span节点插入到文本节点
	var oTrolleyaConTxtSpan = document.createElement('span');
	$(oTrolleyaConTxtSpan).attr('class','trolleya-shoping-span');
	oTrolleyaConTxtSpan.innerHTML = '颜色：白色';
	oTrolleyaConTxt.appendChild(oTrolleyaConTxtSpan);
	
	//将文本节点插入到li2中
	oTrolleyaConLi2.appendChild(oTrolleyaConTxt);
	
	//第二个li节点添加到ul中
	oTrolleyaConUl.appendChild(oTrolleyaConLi2);
	
	
	//动态添加第三个li节点
	var oTrolleyaConLi3 = document.createElement('li');
	oTrolleyaConLi3.innerHTML = '中国大陆';
	
	//第三个li节点添加到ul中
	oTrolleyaConUl.appendChild(oTrolleyaConLi3);
	
	
	//动态添加第四个li节点
	var oTrolleyaConLi4 = document.createElement('li');
	oTrolleyaConLi4.innerHTML = '￥' + $.cookie('ptestcookie');
	
	//第四个li节点添加到ul中
	oTrolleyaConUl.appendChild(oTrolleyaConLi4);
	
	
	//动态添加第五个li节点
	var oTrolleyaConLi5 = document.createElement('li');
	
	//减少数量按钮
	var oTrolleyaConMinus = document.createElement('button');
	$(oTrolleyaConMinus).attr('class','trolleya-con-minus');
	oTrolleyaConMinus.innerHTML = '-';
	
	//点击减少
	$(oTrolleyaConMinus).click(function(){
		var num = Number($(oTrolleyaConIN).val()) - 1;
		$(oTrolleyaConIN).val(num);
		$.cookie('trolleyaNum',$(oTrolleyaConIN).val(),{ expires: 999, path: 'secoo' });
		oTrolleyaConLi6.innerHTML ='￥' + $.cookie('trolleyaNum') * $.cookie('ptestcookie');
	})
	
	//数量值输入框
	var oTrolleyaConIN = document.createElement('input');
	$(oTrolleyaConIN).attr('id','trolleya-con-in');
	$(oTrolleyaConIN).val($.cookie('shopNum'));
	
	//添加数量按钮
	var oTrolleyaConAdd = document.createElement('button');
	$(oTrolleyaConAdd).attr('class','trolleya-con-add');
	oTrolleyaConAdd.innerHTML = '+';
	
	//点击添加
	$(oTrolleyaConAdd).click(function(){
		var num = Number($(oTrolleyaConIN).val()) + 1;
		$(oTrolleyaConIN).val(num);	
		$.cookie('trolleyaNum',$(oTrolleyaConIN).val(),{ expires: 999, path: 'secoo' });
		oTrolleyaConLi6.innerHTML ='￥' + $.cookie('trolleyaNum') * $.cookie('ptestcookie');
	})
	
	//减少 添加 input 添加到li5中
	oTrolleyaConLi5.appendChild(oTrolleyaConMinus);
	oTrolleyaConLi5.appendChild(oTrolleyaConIN);
	oTrolleyaConLi5.appendChild(oTrolleyaConAdd);
	
	//第五个li节点添加到ul中
	oTrolleyaConUl.appendChild(oTrolleyaConLi5);
	
	//动态添加第六个li节点
	var oTrolleyaConLi6 = document.createElement('li');
	
	//赋值第六个li节点
	
	oTrolleyaConLi6.innerHTML ='￥' + $.cookie('shopNum') * $.cookie('ptestcookie');
	
	
	//第六个li节点添加到ul中
	oTrolleyaConUl.appendChild(oTrolleyaConLi6);
	
	//动态添加第七个li节点
	var oTrolleyaConLi7 = document.createElement('li');
	
	//创建p节点加点击事件
	var oTrolleyaConLi7P = document.createElement('p');
	oTrolleyaConLi7P.innerHTML = '删除';
	oTrolleyaConLi7P.onclick = function(){		
		$(this).parent().parent().remove();
	}
	
	//将p标签添加到li节点中
	oTrolleyaConLi7.appendChild(oTrolleyaConLi7P);
	
	//第七个li节点添加到ul中
	oTrolleyaConUl.appendChild(oTrolleyaConLi7);
	
	if(oTrolleyaConTxtA.innerHTML = $.cookie('testcookie')){
		alert(1);
	}
})