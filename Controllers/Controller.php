<?php


class Controller
{

    /**
     * render provided view from views folder in root of the project
     * @param string $view name of the view
     */
    protected static function renderView(string $view)
    {
        $path = "./views/$view";
        if (file_exists($path)) {
            require_once $path;
        }
    }

    /**
     * send JSON data as response
     * @param array $data associated array data
     */
    protected static function sendJson(array $data)
    {
        header('Content-Type: application/json');
        echo json_encode($data);
    }
}
