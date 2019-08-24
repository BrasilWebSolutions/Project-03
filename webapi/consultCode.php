<?php

include './Class/Connect.php';
include './Class/DAO/UserDAO.php';

if($_GET):
	$code = $_GET['code'];
	$UserDAO = new UserDAO();
	$consulta = $UserDAO->consultCode($code); 

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
else:
	echo "Sem Param na URL";
endif;

