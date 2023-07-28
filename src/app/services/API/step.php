<?php 

require_once 'init.php';

//CREATION
if( $_GET['action']=='create'){

    //file_get_contents permet d'écouter les valeurs des différents input
    $data= json_decode(file_get_contents('php://input'), true);

    $sql=
    "REPLACE INTO etape ( id, description, ordre, id_recette) 
    VALUES (:id, :description, :ordre, :id_recette)";

    $result= $pdo->prepare($sql);
    $result->execute($data);

    echo json_encode($data);

}


//LECTURE
if ($_GET['action']=='readAll') {
    
    // $sql="SELECT  *  FROM etape";
    $sql="SELECT e.*, r.titre as recette FROM etape e INNER JOIN recette r ON e.id_recette=r.id";

    $result= $pdo->prepare($sql);
    $result->execute();
    $data=$result->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data);

}

if ($_GET['action']=='readOne') {
    
    // $sql="SELECT  *  FROM ingredient";
    $sql=
    "SELECT e.*, r.titre as recette 
    FROM etape e 
    INNER JOIN recette r 
    ON e.id_recette=r.id";

    $result= $pdo->prepare($sql);
    $result->execute();
    $data=$result->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data);

}


//SUPPRIMER
if ($_GET['action']=='delete') {
    
    $sql="DELETE FROM etape WHERE id=:id";

    $result= $pdo->prepare($sql);
    $result->execute([':id'=>$_GET['id']]);

    echo json_encode($result);

}


// MODIFIER
if( $_GET['action']=='modify'){
    $data= json_decode(file_get_contents('php://input'), true);

    $sql="UPDATE etape SET description=:description WHERE id=:id";

    $result= $pdo->prepare($sql);
    // $result->execute([':id'=>$_GET['id']],);
    $result->execute($data);

    echo json_encode($data);

}

//Lire les étapes par recette
if( $_GET['action']=='readEtape'){
    $data= json_decode(file_get_contents('php://input'), true);
    $sql="SELECT e.*, r.titre as rTitre FROM etape e JOIN recette r ON e.id_recette = r.id WHERE id_recette=:id_recette";

    $result= $pdo->prepare($sql);
    $result->execute([':id_recette'=>$_GET['id_recette']]);

    $data=$result->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);

}

?>