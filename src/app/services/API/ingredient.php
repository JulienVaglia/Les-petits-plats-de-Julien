<?php 

require_once 'init.php';

//CREATION
if( $_GET['action']=='create'){

    //file_get_contents permet d'écouter les valeurs des différents input
    $data= json_decode(file_get_contents('php://input'), true);

    $sql=
    "REPLACE INTO ingredient ( id, titre, quantite, unite, id_recette) 
    VALUES (:id, :titre, :quantite, :unite, :id_recette)";

    $result= $pdo->prepare($sql);
    $result->execute($data);

    echo json_encode($data);

}


//LECTURE
if ($_GET['action']=='readAll') {
    
    // $sql="SELECT  *  FROM ingredient";
    $sql="SELECT i.*, r.titre as recette FROM ingredient i INNER JOIN recette r ON i.id_recette=r.id";

    $result= $pdo->prepare($sql);
    $result->execute();
    $data=$result->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data);

}

if ($_GET['action']=='readOne') {
    
    // $sql="SELECT  *  FROM ingredient";
    $sql=
    "SELECT i.*, r.titre as recette 
    FROM ingredient i 
    INNER JOIN recette r 
    ON i.id_recette=r.id";

    $result= $pdo->prepare($sql);
    $result->execute();
    $data=$result->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data);

}


//SUPPRIMER
if ($_GET['action']=='delete') {
    
    $sql="DELETE FROM ingredient WHERE id=:id";

    $result= $pdo->prepare($sql);
    $result->execute([':id'=>$_GET['id']]);

    echo json_encode($result);

}


// MODIFIER
if( $_GET['action']=='modify'){
    $data= json_decode(file_get_contents('php://input'), true);

    $sql="UPDATE ingredient SET titre=:titre WHERE id=:id";

    $result= $pdo->prepare($sql);
    // $result->execute([':id'=>$_GET['id']],);
    $result->execute($data);

    echo json_encode($data);

}

//Lire les ingrédients par recette
if( $_GET['action']=='readIngredient'){
    $data= json_decode(file_get_contents('php://input'), true);
    $sql="SELECT i.*, r.titre as rTitre FROM ingredient i  RIGHT JOIN recette r ON i.id_recette = r.id WHERE id_recette=:id_recette";

    $result= $pdo->prepare($sql);
    $result->execute([':id_recette'=>$_GET['id_recette']]);

    $data=$result->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);

}

?>