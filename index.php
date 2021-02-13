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


// Enable CORS
header("Access-Control-Allow-Origin: *");

$app = new Application();

$app->router->get("/", [HomeController::class, "home"]);

$app->router->get("/api/getData", [HomeController::class, "getData"]);

$app->router->post("/api/addRecord", [HomeController::class, "addRecord"]);

$app->router->delete("/api/deleteRecord", [HomeController::class, "deleteRecord"]);

$app->run();
