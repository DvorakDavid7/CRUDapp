<?php

spl_autoload_register(function ($class) {
    if (strpos($class, "Controller")) {
        $base_path = __DIR__ . "/Controllers/";
    } else {
        $base_path = __DIR__ . "/core/";
    }
    $extension = ".php";
    $full_path = $base_path . $class . $extension;
    if (!file_exists($full_path)) {
        return false;
    } else {
        include_once $full_path;
        return true;
    }
});


$app = new Application();

$app->router->get("/", [HomeController::class, "home"]);

$app->router->post("/getData", [HomeController::class, "getData"]);

$app->run();
