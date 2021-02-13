<?php


class CustomerModel
{
    public $firstName;
    public $lastName;
    public $email;
    public $phone;
    public $location;
    public $project;


    public function __construct($firstName, $lastName, $email, $phone, $location, $project)
    {
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->email = $email;
        $this->phone = $phone;
        $this->location = $location;
        $this->project = $project;
    }
}
