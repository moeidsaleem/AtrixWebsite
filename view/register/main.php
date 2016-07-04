<?php

$name = $_POST['username'];
$email= $_POST['email'];
$password= $_POST['password'];

$conn = mysqli_connect('localhost','root','','margallatravel');
if(!$conn){
	echo "error connecting to database!";
}


$sql  = "INSERT INTO test (name, email, password)
VALUES ('$name', '$email', '$password')";


if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);
    


?>