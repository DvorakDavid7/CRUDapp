<?php


class Request
{

    private $method;
    private $path;
    private $body;


    public function __construct()
    {
        $this->method = $_SERVER["REQUEST_METHOD"];
        $this->path = $_SERVER["REQUEST_URI"];

        if (file_get_contents('php://input')) {
            $this->body = json_decode(file_get_contents('php://input'), true);
        }
    }

    public function getMethod(): string
    {
        return $this->method;
    }

    public function getPath(): string
    {
        return $this->path;
    }

    public function getBody(): array
    {
        return $this->body;
    }
}
