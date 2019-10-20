package com.vaispa.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.vaispa.model.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, Integer> {

	@Query(value = "select * from Employee where emp_id = ?1", nativeQuery = true)
	Employee getByEmpId(Integer id);

}
