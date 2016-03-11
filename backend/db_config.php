<?php
$conn = new Mongo('localhost');
$db = $conn->gearPanel;
$var = 'citys';
$collection = $db->$var;

$cursor = $collection->find();

foreach ($cursor as $obj) {
    echo $obj['fname'];
}

//print_r($cursor);

//phpinfo();
?>