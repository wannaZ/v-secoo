<?php
	include "public.php";
	$uname = $_POST['name'];
	$upswd = $_POST['pswd'];
	
	$sql = "SELECT * FROM `user` WHERE name = '$uname'";
	$set = mysql_query($sql);
	$arr = mysql_fetch_array($set);
	
	if($arr['name'] == $uname){
		if($arr['pswd'] == $upswd){
			echo "<script>alert('登录成功！');location.href = '../index.html';</script>";
		}else{
			echo "<script>alert('密码错误！');location.href = '../login.html';</script>";
		}
	}else{
		echo "<script>alert('用户不存在！');location.href = '../register.html';</script>";
	}
?>