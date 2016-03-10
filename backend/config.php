<?php
$conn = new Mongo('localhost');
$db = $conn->citysDB;
$collection = $db->items;

$cursor = $collection->find();

foreach ($cursor as $obj) {
    echo $obj['fname'];
}

//print_r($cursor);

//phpinfo();
?>