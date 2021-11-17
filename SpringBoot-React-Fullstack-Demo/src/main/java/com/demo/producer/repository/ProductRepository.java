/**
 * 
 */
package com.demo.producer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.producer.domain.Product;

/**
 * @author Arindam
 *
 */
@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
	//public Optional<Product> findByProductId(Integer id);

	//public void deleteByProductId(Integer id);

}
