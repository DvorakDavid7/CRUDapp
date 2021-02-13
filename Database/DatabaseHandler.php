<?php


class DatabaseHandler
{
    private string $hostname = "localhost";
    private string $username = "user";
    private string $password = "passwd123";
    private string $database = "CrudAppDb";
    protected mysqli $connection;


    public function __construct()
    {
        $this->connection = new mysqli($this->hostname, $this->username, $this->password, $this->database);
        if ($this->connection->connect_error) {
            die("Connection failed: " . $this->connection->connect_error);
        }
    }
}
