<?php

class Connect
{
	private $user = "root";
	private $password = "";
	private $files = "localhost";
	private $database = "webapi";
	private $conn;

	public function __construct(){
		$this->conn = mysqli_connect($this->files, $this->user, $this->password) or 
		die("Falha na Conexão com o banco de dados". mysqli_error($this->conn));

		mysqli_select_db($this->conn, $this->database) or 
		die("Falha". mysqli_error($this->conn));
	}

	public function getConn()
	{
		return $this->conn;
	}

}