<?php

require_once __DIR__ . "/Controller.php";


class HomeController extends Controller
{
    public function home()
    {
        self::renderView("index.html");
    }


    public function getData()
    {
        $data = [
            "name" => "David",
            "age" => [
                "naser" => array(1, 2, 3, 4, 5, 6)
            ]
        ];
        self::sendJson($data);
    }
}
