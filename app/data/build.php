<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "", "ngAtrix");

$result = $conn->query("SELECT build,companyName,contactNumber,type,budget,email,details	 FROM build");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"build":"'  . $rs["build"] . '",';
    $outp .= '"companyName":"'   . $rs["companyName"]       . '",';
    $outp .= '"contactNumber":"'   . $rs["contactNumber"]     . '",';
    $outp .= '"email":"'   . $rs["email"]             . '",';
    $outp .= '"type":"'   . $rs["type"]              . '",';
    $outp .= '"budget":"'   . $rs["budget"]            . '",';
    $outp .= '"details":"'   . $rs["details"]           . '"}'; 
} 
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>

