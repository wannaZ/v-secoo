$(function(){
	var oDivRecommend = document.querySelector(".recommend-bot");
	var oUlRecommend = oDivRecommend.getElementsByTagName("ul")[0];
	var aLisRecommend = oUlRecommend.getElementsByTagName("li");
	var timer = null;

	//在图片尾部，新增四张一样的图片
	oUlRecommend.innerHTML += oUlRecommend.innerHTML;
	//将ul的宽
	oUlRecommend.style.width = aLisRecommend.length * aLisRecommend[0].offsetWidth + "px";

	funcMove();

	
	function funcMove(){
		clearInterval(timer);
		timer = setInterval(function(){
			if(oUlRecommend.offsetLeft <= -oUlRecommend.offsetWidth / 2){
				oUlRecommend.style.left = 0;
			}
			//缓冲
			startMove(oUlRecommend, {left: oUlRecommend.offsetLeft - 300});
		}, 2000);
	}


	oUlRecommend.onmouseover = function(){
		clearInterval(timer);
	}
	oUlRecommend.onmouseout = function(){
		funcMove();
	}
	
	function startMove(obj, json, func){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){

		var isclose = true;

		for(var attr in json){
			var iCur = 0;
			if(attr == "opacity"){
				iCur = parseInt(parseFloat(getStyle(obj, attr)) * 100);
			}else{
				iCur = parseInt(getStyle(obj, attr))
			}
			var speed = (json[attr] - iCur) / 8;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

			iCur += speed;
			if(attr == "opacity"){
				obj.style.filter = `alpha(opacity=${iCur});`;
				obj.style.opacity = iCur / 100;
			}else{
				obj.style[attr] = iCur + "px";
			}

			if(iCur != json[attr]){
				isclose = false;
			}
		}

		if(isclose){
			clearInterval(obj.timer);
			if(func){
				func.call(obj);
			}
		}
	}, 30);
}

function getStyle(elem, attr){
	return elem.currentStyle ? elem.currentStyle[attr] : getComputedStyle(elem)[attr];
}
})