<?php


class CustomerModel
{
    public $firstName;
    public $lastName;
    public $email;
    public $phone;
    public $location;
    public $project;


    public function setFirstName(string $firstName): void
    {
        $this->firstName = $firstName;
    }

    public function setLastName(string $lastName): void
    {
        $this->lastName = $lastName;
    }

    public function setEmail(string $email): void
    {
        $this->email = $email;
    }

    public function setPhone(string $phone): void
    {
        $this->phone = $phone;
    }

    public function setLocation(string $location): void
    {
        $this->location = $location;
    }

    public function setProject(string $project): void
    {
        $this->project = $project;
    }
}
