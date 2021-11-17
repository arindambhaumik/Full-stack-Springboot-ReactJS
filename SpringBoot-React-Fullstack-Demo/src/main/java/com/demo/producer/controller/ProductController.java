/**
 * 
 */
package com.demo.producer.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.producer.domain.Product;
import com.demo.producer.service.ProducerService;

/**
 * @author Arindam
 *
 */
@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*") 
public class ProductController {
	@Autowired
	private ProducerService producerService;

	@GetMapping(value = "/hello", produces = "application/json")
	public String sayHello() {
		return "Hi ! I am Product Service up n running..";
	}

	@GetMapping(value = "/getProducts", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Product> getProducts() {
		return producerService.getProducts();
	}

	@GetMapping("/getProduct/{id}")
	public Product getProductById(@PathVariable(name = "id") int id) {
		return producerService.getProductById(id);
	}

	@PostMapping(value = "/createProduct", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Product> createProduct(@Valid @RequestBody Product product) {
		System.out.println("Product to be created.." + product);
		Product newProduct = producerService.createProduct(product);
		System.out.println("New Product created successfully::" + newProduct);

		return new ResponseEntity<>(newProduct, HttpStatus.CREATED);
	}

	@PutMapping(value = "/updateProduct/{id}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Product> updateProduct(@RequestBody Product product, @PathVariable(name = "id") int id) {

		Product newProduct = producerService.updateProduct(product, id);
		if (newProduct == null) {
			System.out.println("Update Failed !Product not found for product_id::" + id);
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
		System.out.println("Product Updated successfully.." + newProduct);

		return new ResponseEntity<>(newProduct, HttpStatus.OK);
	}

	@DeleteMapping(value = "/deleteProduct/{id}")
	public ResponseEntity<String> deleteProduct(@PathVariable(name = "id") int id) {
		if (producerService.deleteProduct(id)) {
			System.out.println("Product id " + id + " Deleted successfully.");
			return new ResponseEntity<String>("Product Deleted Successfully..", HttpStatus.OK);
		}
		return new ResponseEntity<String>("Product Not found..", HttpStatus.NOT_FOUND);
	}

}
