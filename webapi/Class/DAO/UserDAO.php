<?php

class UserDAO
{
	private $connection;

	public function __construct(){
		$this->connection = new Connect();
	}

	public function consultAllUsers(){
		$sql = "SELECT * FROM usuarios";

		$result = mysqli_query($this->connection->getConn(), $sql);

		if(mysqli_num_rows($result) > 0){
			return $result;
		}else{
			return FALSE;
		}
	}

	public function consultCode($code){
		$sql = "SELECT * FROM usuarios WHERE id ='$code' ";

		$result = mysqli_query($this->connection->getConn(), $sql);

		if(mysqli_num_rows($result) > 0){
			return $result;
		}else{
			return FALSE;
		}
	}

	public function consult2Param($param1, $param2){
		$sql = "SELECT * FROM usuarios WHERE sexo = '$param1' AND idade >= '$param2' ";

		$result = mysqli_query($this->connection->getConn(), $sql);

		if(mysqli_num_rows($result) > 0){
			return $result;
		}else{
			return FALSE;
		}
	}

}

