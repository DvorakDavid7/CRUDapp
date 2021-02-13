<?php


class CustomerModel
{
    public string $firstName;
    public string $lastName;
    public string $email;
    public string $phone;
    public string $location;
    public string $project;


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
