package com.vaispa.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.vaispa.model.Employee;
import com.vaispa.repository.EmployeeRepository;

@RestController
@CrossOrigin
@RequestMapping({ "/api/v1/employees" })
public class EmployeeController {

	@Autowired
	private EmployeeRepository empRepository;

//	@PostConstruct
//	private void init() {
//		Employee emp1 = new Employee();
//		emp1.setName("emp1");
//		emp1.setDesignation("manager");
//		emp1.setSalary(3000);
//
//		Employee emp2 = new Employee();
//		emp2.setName("emp2");
//		emp2.setDesignation("developer");
//		emp2.setSalary(3000);
//
//		empRepository.save(emp1);
//		empRepository.save(emp2);
//	}

	@RequestMapping(value = { "/", "" }, method = RequestMethod.GET, produces = "application/json")
	public ResponseEntity<Iterable<Employee>> getEmployees() {
		return ResponseEntity.ok(empRepository.findAll());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") Integer id) {
		Employee entity = empRepository.getByEmpId(id);

		return new ResponseEntity<Employee>(entity, new HttpHeaders(), HttpStatus.OK);
	}

	@DeleteMapping(path = { "/{id}" })
	public ResponseEntity<Employee> delete(@PathVariable("id") int id) {
		Employee entity = empRepository.getByEmpId(id);

		if (entity.getEmpId() == null) {
			ResponseEntity.badRequest().build();
		}

		empRepository.deleteById(id);

		return ResponseEntity.ok(entity);
	}

	@PostMapping
	public ResponseEntity<Employee> create(@Valid @RequestBody Employee emp) {
		empRepository.save(emp);
		return ResponseEntity.ok(emp);
	}

	@PutMapping(path = { "/{id}" })
	public ResponseEntity<Employee> updateEmployee(@PathVariable("id") Integer id, @Valid @RequestBody Employee emp) {
		Employee deletedEmp = empRepository.getByEmpId(id);

		if (deletedEmp.getEmpId() == null) {
			ResponseEntity.badRequest().build();
		} else {

			deletedEmp.setName(emp.getName());
			deletedEmp.setSalary(emp.getSalary());
			deletedEmp.setDesignation(emp.getDesignation());

			empRepository.save(deletedEmp);
		}

		return ResponseEntity.ok(deletedEmp);
	}

	@GetMapping({ "/validateLogin" })
	public String validateLogin() {
		return "User successfully authenticated";
	}

}
