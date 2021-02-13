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
            array_push($result["data"], utf8_encode($row["id"]));
            array_push($result["data"], utf8_encode($row["FirstName"]));
            array_push($result["data"], utf8_encode($row["LastName"]));
            array_push($result["data"], utf8_encode($row["Email"]));
            array_push($result["data"], utf8_encode($row["Phone"]));
            array_push($result["data"], utf8_encode($row["Location"]));
            array_push($result["data"], utf8_encode($row["Project"]));
        }
        self::sendJson($result);
    }

    public function addRecord(Request $request)
    {
        $body = $request->getBody();
        $data = $body["record"];

        $customer = new CustomerModel();
        $customer->setFirstName($data["firstName"]);
        $customer->setLastName($data["lastName"]);
        $customer->setEmail($data["email"]);
        $customer->setPhone($data["phone"]);
        $customer->setLocation($data["location"]);
        $customer->setProject($data["project"]);

        $customerTable = new CustomersTable();
        $customerTable->insert($customer);
    }

    public function deleteRecord(Request $request) {
        $body = $request->getBody();
        $customerId = $body["id"];

        $customerTable = new CustomersTable();
        $customerTable->deleteCustomer($customerId);
    }
}
