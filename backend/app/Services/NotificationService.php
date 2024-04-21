<?php

namespace App\Services;

use GuzzleHttp\Client;

class NotificationService
{
    static function sendPushNotification($to, $title, $body)
    {
        $client = new Client();
        $client->request("POST", "https://exp.host/--/api/v2/push/send", [
            'headers' => [
                "Accept" => "application/json",
                "Accept-encoding" => "gzip, deflate",
                "Content-Type" => "application/x-www-form-urlencoded",
            ],
            'form_params' => [
                "to" => $to,
                "title" => $title,
                "body" => $body,
            ]
        ]);
    }
}
