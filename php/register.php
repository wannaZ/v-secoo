<?php
	include "public.php";
	$uname = $_POST['name'];
	$upswd = $_POST['pswd'];
	
	
	$has = "SELECT * FROM `user` WHERE `name` = '$uname'";
	$row = mysql_query($has);
//	echo $row;
	$arr = mysql_fetch_array($row);
	if($arr){
		echo "<script>alert('用户名已存在！');location.href = '../register.html';</script>";
	}else{
		$sql = "INSERT INTO `user`( `name`, `pswd`) VALUES ('$uname','$upswd')";
		$res = mysql_query($sql);
		if($res){
			echo "<script>alert('注册成功！');location.href = '../login.html';</script>";
		}
		
	}
	//INSERT INTO `users`(`name`, `pswd`) VALUES ('$uname',[value-3])
?>