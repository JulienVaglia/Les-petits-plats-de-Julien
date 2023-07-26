<?php 

require_once 'init.php';

if( $_GET['action']=='create'){

    //file_get_contents permet d'écouter les valeurs des différents input
    $data= json_decode(file_get_contents('php://input'), true);

    $sql="INSERT INTO categorie ( titre) VALUES (:titre)";

    $result= $pdo->prepare($sql);
    $result->execute($data);

    echo json_encode($data);

}

if ($_GET['action']=='readAll') {
    
    $sql="SELECT * FROM categorie";

    $result= $pdo->prepare($sql);
    $result->execute();
    $data=$result->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data);

}

if ($_GET['action']=='delete') {
    
    $sql="DELETE FROM categorie WHERE id=:id";

    $result= $pdo->prepare($sql);
    $result->execute([':id'=>$_GET['id']]);

    echo json_encode($result);

}

if( $_GET['action']=='modify'){
    $data= json_decode(file_get_contents('php://input'), true);

    $sql="UPDATE categorie SET titre=:titre WHERE id=:id";

    $result= $pdo->prepare($sql);
    // $result->execute([':id'=>$_GET['id']],);
    $result->execute($data);

    echo json_encode($data);

}















?>