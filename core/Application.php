<?php

require "Router.php";
require "Request.php";


class Application
{
    public $router;
    public $request;

    public function __construct()
    {
        $this->router = new Router();
        $this->request = new Request();
    }

    public function run()
    {
        $method = $this->request->getMethod();
        $path = $this->request->getPath();
        $callback = $this->router->register[$method][$path] ?? false;

        if (!$callback) {
            echo "Not found";
            http_response_code(404);
            exit();
        }
        call_user_func($callback, $this->request);
    }
}
