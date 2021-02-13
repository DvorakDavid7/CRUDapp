<?php

require_once "Controllers/Controller.php";
require_once "Database/CustomersTable.php";
require_once "core/Request.php";


class HomeController extends Controller
{

    public function home(Request $request)
    {
        self::renderView("index.html");
    }

    public function getData(Request $request)
    {
        $result = [
            "data" => array()
        ];

        $customersTable = new CustomersTable();
        $sqlResult = $customersTable->selectAll();

        while ($row = mysqli_fetch_assoc($sqlResult)) {
            array_push($result["data"], $row);
        }
        self::sendJson($result);
    }

    public function addRecord(Request $request)
    {
        $body = $request->getBody();
        $data = $body["record"];

        $customer = new CustomerModel(
            $data["firstName"],
            $data["lastName"],
            $data["email"],
            $data["phone"],
            $data["location"],
            $data["project"]
        );

        $customerTable = new CustomersTable();
        $customerTable->insert($customer);
    }

    public function deleteRecord(Request $request)
    {
        $body = $request->getBody();
        $customerId = $body["id"];

        $customerTable = new CustomersTable();
        $customerTable->deleteCustomer($customerId);
    }


    public function updateRecord(Request $request)
    {
        $body = $request->getBody();
        $recordId = $body["id"];
        $data = $body["updatedValue"];

        $customer = new CustomerModel(
            $data["firstName"],
            $data["lastName"],
            $data["email"],
            $data["phone"],
            $data["location"],
            $data["project"]
        );
        $customerTable = new CustomersTable();
        $customerTable->updateCustomer($recordId, $customer);
    }
}
