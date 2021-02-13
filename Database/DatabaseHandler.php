<?php


class DatabaseHandler
{
    private $hostname = "localhost";
    private $username = "user";
    private $password = "passwd123";
    private $database = "CrudAppDb";
    protected $connection;


    public function __construct()
    {
        $this->connection = new mysqli($this->hostname, $this->username, $this->password, $this->database);
        if ($this->connection->connect_error) {
            die("Connection failed: " . $this->connection->connect_error);
        }

        mysqli_set_charset($this->connection, "utf8");
    }
}
