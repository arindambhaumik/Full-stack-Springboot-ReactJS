/**
 * 
 */
package com.demo.producer.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.demo.producer.domain.Product;
import com.demo.producer.repository.ProductRepository;

/**
 * @author Arindam
 *
 */
@Service
@Transactional
public class ProducerService {
	@Autowired
	private ProductRepository productRepository;

	public List<Product> getProducts() {
		System.out.println("Products Retuned::" + productRepository.findAll());
		return productRepository.findAll();
	}

	public Product getProductById(int id) {
		Optional<Product> product = productRepository.findById(id);
		return product.isPresent() ? product.get() : null;
	}

	public Product createProduct(Product product) {
		return productRepository.saveAndFlush(product);
	}

	public Product updateProduct(Product newProduct, int id) {
		return productRepository.findById(id).map(product -> {
			product.setName(newProduct.getName());
			product.setDescription(newProduct.getDescription());
			product.setPrice(newProduct.getPrice());
			return productRepository.save(product);
		}).orElseGet(() -> {
			return null;
		});
	}

	public boolean deleteProduct(int id) {
		if (productRepository.findById(id).isPresent()) {
			productRepository.deleteById(id);
			return true;
		}
		return false;
	}

}
