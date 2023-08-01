<?php 

require_once 'init.php';

if( $_GET['action']=='create'){

    //file_get_contents permet d'écouter les valeurs des différents input
    
    $data= json_decode(file_get_contents('php://input'), true);
    $sql=
    "REPLACE INTO recette ( id,titre, photo, description,cout, tempsprep, tempscuisson, difficulte, id_categorie) 
    VALUES (:id,:titre, :photo, :description, :cout, :tempsprep, :tempscuisson, :difficulte, :id_categorie)";

    $result= $pdo->prepare($sql);
    $result->execute($data);

    echo json_encode($data);

}

if ($_GET['action']=='readAll') {
    
    $sql="SELECT r.*, c.titre as categorie FROM categorie c INNER JOIN recette r ON r.id_categorie=c.id";

    $result= $pdo->prepare($sql);
    $result->execute();
    $data=$result->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data);

}

if ($_GET['action']=='readOne') {
    
    $sql=
    "SELECT r.*, c.titre 
    FROM categorie c 
    INNER JOIN recette r 
    ON r.id_categorie=c.id 
    WHERE r.id=:id";


    $result= $pdo->prepare($sql);
    $result->execute([':id' => $_GET['id']]);
    $data=$result->fetch(PDO::FETCH_ASSOC);

    echo json_encode($data);

}

if ($_GET['action']=='delete') {
    
    $sql="DELETE FROM recette WHERE id=:id";

    $result= $pdo->prepare($sql);
    $result->execute([':id'=>$_GET['id']]);

    echo json_encode($result);

}











?>