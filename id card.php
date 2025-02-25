<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $studentName = $_POST['studentName'];
    $studentPhoto = $_FILES['studentPhoto'];

    $targetDir = "uploads/";
    $targetFile = $targetDir . basename($studentPhoto["name"]);
    move_uploaded_file($studentPhoto["tmp_name"], $targetFile);

    echo "ID Card Generated for: " . $studentName;
}
?>