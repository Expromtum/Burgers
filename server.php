<?php
    /*
    MAMP PRO should be set with following settings:
    Set domain of outgoing emails: smtp.gmail.com
    port: 587
    local SMTP relay port 25
    Use STMP relay - Yes
    Use authentication: yes
    Username: [yourusername]@gmail.com
    Password: [yourpassword]
    Authentication: SSL
    Instead of [yourusername] you should enter your GMail username. Instead of [yourpassword] you should enter your GMail password.
    Для гугл аккаунта разрешить почты от непроверенных приложений
    */

    $name = $_POST['order__user-name'];
    $phone = $_POST['order__user-phone'];
    $street = $_POST['order__user-street'];
    $house = $_POST['order__user-house'];
    $block = $_POST['order__house-block'];
    $block = isset($block) ?  (' корпус ' . $block)  :  '';       
    $flat = $_POST['order__house-flat'];
    $floor = $_POST['order__house-floor'];
    $comment = $_POST['order__user-comment'];
    $pay = $_POST['order__pay-option'];
    $notcalback = $_POST['order__not-callback']; // 1 или null
    $notcalback = isset($notcalback) ? 'НЕТ' : 'ДА';   

    $mail_message = '
    <html>
    <head>
        <title>Заявка</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li>Имя:' . $name . '</li>
            <li>Телефон: ' . $phone . '</li>
            <li>Адрес: ' . $street . ' дом ' . $house . $block . ' квартира ' .$flat .'</li>                  
            <li>Способ оплаты: ' . $pay . '</li>
            <li>Комментарий к заказу: ' . $comment . '</li>
            <li>Нужно ли перезванивать клиенту: ' . $notcalback . '</li>
        </ul>
    </body>
    </html>';

    $headers = "From: Администратор сайта <admin@mysite.ru>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('stagger@mail.ru', 'Заказ', $mail_message, $headers);

    $data = [];

    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Заказ успешно отправлен";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }

    echo json_encode($data);
?>