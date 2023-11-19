CREATE DATABASE postgres

CREATE TABLE student(
    name VARCHAR(255),
    admi_no VARCHAR(255) PRIMARY KEY,
    mobile_no VARCHAR(255),
    email VARCHAR(255),
    admi_year INT,
    admi_type VARCHAR(255),
    gender VARCHAR(255),
    admi_category VARCHAR(255),
    e_grants_category VARCHAR(255),
    income INT,
    distance INT,
    parent_name VARCHAR(255),
    partent_mobile_no VARCHAR(255)
)
