$(function(){
			const oBigBox = document.getElementById("minute-explain-leftImg");
			//获取小图
			const oSmallPic = document.getElementById('explain-img');
			//获取遮罩
			const oMark = document.querySelector('#explain-mark');
			//获取滑块
			const oFloat = document.querySelector('#explain-float');
			//获取大图盒子
			const oBigPic = document.querySelector('#explain-bigPic');
			//获取大图
			const oBigImg = document.querySelector('#explain-bigPic img');
//				alert(oBigImg);
			//给遮罩添加移入事件，滑块和大图所在的盒子显示
			$("#explain-mark").mouseenter(function(){
				$("#explain-float").css('display','block');
				$("#explain-bigPic").css('display','block');
				
			})
			//给遮罩添加移出事件，滑块和大图所在的盒子隐藏
			$("#explain-mark").mouseleave(function(){
				$("#explain-float").css('display','none');
				$("#explain-bigPic").css('display','none');
				
			})
			

			//给遮罩添加移动事件，实现滑块跟随并设置边界
			$("#explain-mark").mousemove(function(e) {
			    var l = e.pageX - $("#minute-explain-leftImg").offset().left - ($("#explain-float").width() / 2);
			    var t = e.pageY - $("#minute-explain-leftImg").offset().left - ($("#explain-float").height() / 2);
			    if (l < 0) {
			        l = 0
			    }
			    if (l > $(this).width() - $("#explain-float").width()) {
			        l = $(this).width() - $("#explain-float").width()
			    }
			    if (t < 0) {
			        t = 0
			    }
			    if (t > $(this).height() - $("#explain-float").height()) {
			        t = $(this).height() - $("#explain-float").height()
			    }
		        
		        
		        $("#explain-float").css({
			        "left": l,
			        "top": t
			    })
			    var pX = l / ($("#explain-mark").width() - $("#explain-float").width())
			    var pY = t / ($("#explain-mark").height() - $("#explain-float").height())
			    $("#explain-bigPic img").css({
			        "left": -pX * ($("#explain-bigPic img").width() - $("#explain-bigPic").width()),
			        "top": -pY * ($("#explain-bigPic img").height() - $("#explain-bigPic").height())
			    })
			})
		})

//调用testcookie生成a标签
var oCookieDiv = document.getElementById('minute-header-a');
//var oCookieS = $.cookie('testcookie');
var oCookieA = document.createElement('a');
$(oCookieA).attr({'href':'particular.html','class':'cookieA','name':'value'});
oCookieA.innerHTML = $.cookie('testcookie');
oCookieDiv.appendChild(oCookieA);

//调用imgcookie生成小图img标签
var oExplanImg = document.getElementById('explain-img');
var oCookieImg = document.createElement('img');
oCookieImg.src = $.cookie('imgcookie');
oExplanImg.appendChild(oCookieImg);

//调用imgcookie生成大图img标签	
var oBigImgCookie = document.getElementById('explain-bigPic');
var oBigCookieImg = document.createElement('img');
oBigCookieImg.src = $.cookie('imgcookie');
oBigImgCookie.appendChild(oBigCookieImg);

//获取div
var oMinuteExplainR = document.getElementById('minute-explain-right');

//调用testcookie生成p标签存入文本
var oMinuteExplainRp = document.createElement('p');
$(oMinuteExplainRp).attr('id','minute-explain-rightp');
oMinuteExplainRp.innerHTML = $.cookie('testcookie');
oMinuteExplainR.appendChild(oMinuteExplainRp);

//新建背景图div
var oMinuteExplainRBac = document.createElement('div');
$(oMinuteExplainRBac).attr('class','explain-none');
oMinuteExplainR.appendChild(oMinuteExplainRBac);

//新建价格区域
var oMinutePrice = document.createElement('div');
$(oMinutePrice).attr('class','explain-price');
oMinuteExplainR.appendChild(oMinutePrice);

//新建ul1标签
var oMinutePriceUl1 = document.createElement('ul');
var oPriceDiv = document.querySelector('.explain-price');
$(oMinutePriceUl1).attr('class','explain-priceUl1');
oPriceDiv.appendChild(oMinutePriceUl1);

//新建文本标签 存入文本内容
var oMinutePUl1 = document.querySelector('.explain-priceUl1');
var oMinutePriceLi1 = document.createElement('li');
oMinutePriceLi1.innerHTML = '寺库价';
oMinutePUl1.appendChild(oMinutePriceLi1);
var oMinutePriceLi2 = document.createElement('li');
oMinutePriceLi2.innerHTML = '发货地';
oMinutePUl1.appendChild(oMinutePriceLi2);
var oMinutePriceLi3 = document.createElement('li');
oMinutePriceLi3.innerHTML = '温馨提示';
oMinutePUl1.appendChild(oMinutePriceLi3);
var oMinutePriceLi4 = document.createElement('li');
oMinutePriceLi4.innerHTML = '商品信息';
oMinutePUl1.appendChild(oMinutePriceLi4);

//新建ul2标签
var oMinutePriceUl2 = document.createElement('ul');
$(oMinutePriceUl2).attr('class','explain-priceUl2');
oPriceDiv.appendChild(oMinutePriceUl2);

//获取ul2标签
var oMinutePUl2 = document.querySelector('.explain-priceUl2');

//新建li标签并调用ptestcookie 添加li标签到ul2中
var oMinutePriceLi5 = document.createElement('li');
oMinutePriceLi5.innerHTML = $.cookie('ptestcookie');
oMinutePUl2.appendChild(oMinutePriceLi5);

//新建li标签并添加到ul2
var oMinutePriceLi6 = document.createElement('li');
oMinutePriceLi6.innerHTML = '大陆 有货    预计下单后5-7天内发货';
oMinutePUl2.appendChild(oMinutePriceLi6);
var oMinutePriceLi7 = document.createElement('li');
oMinutePriceLi7.innerHTML = '本商品无质量问题不支持退换货';
oMinutePUl2.appendChild(oMinutePriceLi7);
var oMinutePriceLi8 = document.createElement('li');
oMinutePriceLi8.innerHTML = '自营';
oMinutePUl2.appendChild(oMinutePriceLi8);

//新建背景图div
var oMinuteExplainRBac = document.createElement('div');
$(oMinuteExplainRBac).attr('class','explain-none');
oMinuteExplainR.appendChild(oMinuteExplainRBac);

//新建颜色区域
var oMinuteColor = document.createElement('div');
$(oMinuteColor).attr('class','minute-color');
oMinuteExplainR.appendChild(oMinuteColor);

//新建颜色区域文本节点
var oMinuteColorT = document.createElement('span');
oMinuteColorT.innerHTML = '颜色';
oMinuteColor.appendChild(oMinuteColorT);

//新建颜色区域图片div
var oMinuteColorImg = document.createElement('div');
$(oMinuteColorImg).attr('class','minute-color-img');
oMinuteColor.appendChild(oMinuteColorImg);

//新建图片div
var oMinuteColorPic = document.createElement('div');
$(oMinuteColorPic).attr('class','minute-color-pic');
oMinuteColorImg.appendChild(oMinuteColorPic);

//新建img标签并调用imgcookie
var oMinuteColorImgSrc = document.createElement('img');
oMinuteColorImgSrc.src = $.cookie('imgcookie');
oMinuteColorPic.appendChild(oMinuteColorImgSrc);

//新建购买数量区域
var oMinuteShop = document.createElement('div');
$(oMinuteShop).attr('class','minute-shop');
oMinuteExplainR.appendChild(oMinuteShop);

//数量文本
var oMinuteShopT = document.createElement('span');
oMinuteShopT.innerHTML = '购买数量';
oMinuteShop.appendChild(oMinuteShopT);

//添加数量区域
var oMinuteShopInput = document.createElement('div');
$(oMinuteShopInput).attr('class','minute-shop-input');
oMinuteShop.appendChild(oMinuteShopInput);

//减少数量按钮
var oMinuteInputMinus = document.createElement('button');
$(oMinuteInputMinus).attr('class','minute-input-minus');
oMinuteInputMinus.innerHTML = '-';

//点击减少
$(oMinuteInputMinus).click(function(){
	var num = Number($(oMinuteInputIN).val()) - 1;
	$(oMinuteInputIN).val(num);
})

//数量值输入框
var oMinuteInputIN = document.createElement('input');
$(oMinuteInputIN).attr('id','minute-input-in');
$(oMinuteInputIN).val('1');

//添加数量按钮
var oMinuteInputAdd = document.createElement('button');
$(oMinuteInputAdd).attr('class','minute-input-add');
oMinuteInputAdd.innerHTML = '+';

//点击添加
$(oMinuteInputAdd).click(function(){
	var num = Number($(oMinuteInputIN).val()) + 1;
	$(oMinuteInputIN).val(num);
	
})

//添加到父元素
oMinuteShopInput.appendChild(oMinuteInputMinus);
oMinuteShopInput.appendChild(oMinuteInputIN);
oMinuteShopInput.appendChild(oMinuteInputAdd);

//跳转部分(二维码以及购物车按钮)
var oMinuteButton = document.createElement('div');
$(oMinuteButton).attr('class','minute-button');
oMinuteExplainR.appendChild(oMinuteButton);

//二维码部分
var oMinuteButtonImg = document.createElement('img');
oMinuteButtonImg.src = 'images/a05c0c6973944877917610d3693a76be.png';
oMinuteButton.appendChild(oMinuteButtonImg);

//立即购买按钮
var oMinuteButtonBuy = document.createElement('button');
$(oMinuteButtonBuy).attr('id','minute-button-buy');	
oMinuteButton.appendChild(oMinuteButtonBuy);
$(oMinuteButtonBuy).click(function(){
	location.href = 'trolleya.html';
	var cartName = $('#minute-explain-rightp').text();
	$.cookie('shopingCartName',cartName,{ expires: 999, path: 'secoo' });
//		alert($.cookie('shopingCartName'));
	
	
		var cartNum = $(oMinuteInputIN).val();

		$.cookie('shopingCartNum',cartNum,{ expires: 999, path: 'secoo' });
	
//		alert(Number($.cookie('shopingCartNum')) + 1);
		
//		$.cookie('shopNum',$(oMinuteInputIN).val(),{ expires: 999, path: 'secoo' });
//		if(oMinuteExplainRp.innerHTML = $.cookie('testcookie')){
//			$(oMinuteInputIN).val() + 1;
//		}
})
	
//立即购买跳转标签
var oMinuteButtonBuyA = document.createElement('a');
$(oMinuteButtonBuyA).attr({'id':'minute-button-buya','href':'trolley.html'});
oMinuteButtonBuyA.innerHTML = '立即购买';
oMinuteButtonBuy.appendChild(oMinuteButtonBuyA);

//加入购物车按钮
var oMinuteButtonTrolley = document.createElement('button');
$(oMinuteButtonTrolley).attr('id','minute-button-trolley');	
oMinuteButton.appendChild(oMinuteButtonTrolley);

//var newElement = document.createElement("script");
//$(newElement).attr({'src':'js/trolleya.js','type':'text/javascript'});
//document.body.appendChild(newElement);

$(oMinuteButtonTrolley).click(function(){
	location.href = 'trolleya.html';
	$.cookie('shopNum',$(oMinuteInputIN).val(),{ expires: 999, path: 'secoo' });
})
	
//加入购物车跳转标签
var oMinuteButtonTrolleyA = document.createElement('a');
$(oMinuteButtonTrolleyA).attr({'id':'minute-button-trolleya','href':'trolley.html'});
oMinuteButtonTrolleyA.innerHTML = '加入购物车';
oMinuteButtonTrolley.appendChild(oMinuteButtonTrolleyA);




