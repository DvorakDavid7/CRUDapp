<?php

require_once "DatabaseHandler.php";
require_once "Models/CustomerModel.php";


class CustomersTable extends DatabaseHandler
{
    public function __construct()
    {
        parent::__construct();
    }

    public function selectAll(): mysqli_result
    {
        $query = "SELECT * FROM Customers";
        return mysqli_query($this->connection, $query);
    }

    public function insert(CustomerModel $customer)
    {
        $sql = "INSERT INTO Customers VALUE(
            NULL, \"$customer->firstName\", \"$customer->lastName\", \"$customer->email\", \"$customer->phone\", \"$customer->location\", \"$customer->project\"
        );";

        if (!$this->connection->query($sql)) {
            echo "Error in inserting data\n";
        }
    }

    public function deleteCustomer(int $id) {
        $sql = "DELETE FROM Customers WHERE id = $id";

        if (!$this->connection->query($sql)) {
            echo "Error in deleting data\n";
        }
    }

    public function updateCustomer(int $id, CustomerModel $customer) {
        $sql = "
            UPDATE Customers
            SET FirstName = \"$customer->firstName\",
                LastName = \"$customer->lastName\",
                Email = \"$customer->email\",
                Phone = \"$customer->phone\",
                Location = \"$customer->location\",
                Project = \"$customer->project\"
            WHERE id = $id;
        ";
        if (!$this->connection->query($sql)) {
            echo "Error in deleting data\n";
        }
    }
}