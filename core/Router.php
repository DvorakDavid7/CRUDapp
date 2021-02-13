<?php


class Router
{
    public array $register;


    public function post(string $path, $callback)
    {
        $this->register["POST"][$path] = $callback;
    }

    public function get(string $path, $callback)
    {
        $this->register["GET"][$path] = $callback;
    }

    public function put(string $path, $callback)
    {
        $this->register["PUT"][$path] = $callback;
    }

    public function delete(string $path, $callback)
    {
        $this->register["DELETE"][$path] = $callback;
    }
}
