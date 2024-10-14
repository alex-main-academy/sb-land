<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $count = $_POST['count'];
    $utm_content = $_POST['utm_content'];
    $utm_campaign = $_POST['utm_campaign'];
    $utm_source = $_POST['utm_source'];
    $utm_medium = $_POST['utm_medium'];
    $utm_term = $_POST['utm_term']; 
    $date = date("d.m.Y H:i:s");

    $googleScriptURL = "https://script.google.com/macros/s/AKfycbxwk5gtwBWLQHoZn4P99kImkxm6PsdIjeFEe8RNb4qFnwV1cCEbqEcsNekw3pl4dfPv/exec";

    $postData = array(
        'date' => $date,
        'name' => $name,
        'email' => $email,
        'phone' => $phone,
        'count' => $count,
        'utm_content' => $utm_content,
        'utm_campaign' => $utm_campaign,
        'utm_source' => $utm_source,
        'utm_medium' => $utm_medium,
        'utm_term' => $utm_term
    );

    $ch = curl_init($googleScriptURL);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postData));

    $response = curl_exec($ch);
    curl_close($ch);

    if ($response) {
        header('Location: thanks.html');
        exit();
    } else {
        echo "Ошибка при отправке данных.";
    }
} else {
    echo "Неверный метод запроса.";
}
?>