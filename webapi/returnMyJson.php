<?php

include './Class/Connect.php';
include './Class/DAO/UserDAO.php';

$UserDAO = new UserDAO();

$consulta = $UserDAO->consultAllUsers(); 

if($consulta == TRUE){
	for ($i=0; $i < mysqli_num_rows($consulta); $i++) { 
		$line = mysqli_fetch_array($consulta);

		$resp [] = array(
			'id' => $line['id'],
			'nome' => $line['nome'],
			'sobrenome' => $line['sobrenome'],
			'idade' => $line['idade'],
			'sexo' => $line['sexo']

		);
	}
}

echo json_encode($resp);
