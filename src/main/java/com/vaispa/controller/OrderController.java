package com.vaispa.controller;

import javax.annotation.PostConstruct;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.vaispa.custom.exception.ResourceNotFoundException;
import com.vaispa.helper.LoginStatus;
import com.vaispa.model.Orders;
import com.vaispa.repository.OrdersRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping({ "/api/v1/orders" })
public class OrderController {

	@Autowired
	private OrdersRepository ordersRepository;

	@PostConstruct
	public void init() {
		ordersRepository.save(new Orders("Nagpur", "Pantaloons", "99009990090", "Vaishali Pawar",
				"vpawar2139@gmail.com", "10001", "COD", new Double(1000), 10));
		ordersRepository.save(new Orders("Hyderabad", "MI", "8887777777", "Anup Mridha", "anupmridha007@gmail.com",
				"10002", "NET BANKING", new Double(5000), 5));
	}

	@RequestMapping(value = { "/", "" }, method = RequestMethod.GET, produces = "application/json")
	public ResponseEntity<Iterable<Orders>> getOrders() {
		return ResponseEntity.ok(ordersRepository.findAll());
	}

	@GetMapping("/{id}")
	public Orders getOrdersById(@PathVariable("id") Integer id) {
		return ordersRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Orders", "id", id));
	}

	@DeleteMapping(path = { "/{id}" })
	public ResponseEntity<Orders> delete(@PathVariable("id") int id) {
		Orders entity = ordersRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Orders", "id", id));

		if (entity.getId() == null) {
			ResponseEntity.badRequest().build();
		}

		ordersRepository.deleteById(id);

		return ResponseEntity.ok(entity);
	}

	@PostMapping
	public ResponseEntity<Orders> create(@Valid @RequestBody Orders order) {
		ordersRepository.save(order);
		return ResponseEntity.ok(order);
	}

	@PutMapping(path = { "/{id}" })
	public ResponseEntity<Orders> update(@PathVariable("id") Integer id, @Valid @RequestBody Orders order) {
		Orders updatedOrd = ordersRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Orders", "id", id));

		if (updatedOrd.getId() == null) {
			ResponseEntity.badRequest().build();
		} else {

			updatedOrd.setAddress(order.getAddress());
			updatedOrd.setBrand(order.getBrand());
			updatedOrd.setContactNo(order.getContactNo());
			updatedOrd.setCustomerName(order.getCustomerName());
			updatedOrd.setEmail(order.getEmail());
			updatedOrd.setItem(order.getItem());
			updatedOrd.setOrderType(order.getOrderType());
			updatedOrd.setPrice(order.getPrice());
			updatedOrd.setQty(order.getQty());

			ordersRepository.save(updatedOrd);
		}

		return ResponseEntity.ok(updatedOrd);
	}

	@GetMapping(produces = "application/json")
	@RequestMapping({ "/validateLogin" })
	public LoginStatus validateLogin() {
		return new LoginStatus("User successfully authenticated");
	}

}
