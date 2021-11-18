import React, { useEffect, useState } from 'react';
import getProducts, { deleteProduct } from './RestClient';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function ProductHome (){
	const [products,setProducts] = useState([]);
	const [connError,setConnError] = useState([]);
	const [delFlag,setDelFlag] = useState(false);

	useEffect(() =>{
		init();  // pre load the product list
	},[] ) // empty [] means no data dependency, only call once after first render

	const init = () =>{
		const promise = getProducts()
		promise.then(data => {
			console.log('product list fetched::', data);
			setProducts(data)
		})
		.catch(e=>{
			console.error('Error occurred while fetching Product list:', e)
			setConnError(<h6 className="alert alert-danger alert-dismissible fade show"> ERROR! Server connection Failed. Please try again after some time!</h6>);
		})
	}

	const removeProduct = (id)=>{
		deleteProduct(id).then(response=>{
			console.log('Product Deleted.',response)
			setDelFlag(true);
			// alert will disapear after 3 sec.
			window.setTimeout(()=>{
				setDelFlag(false)
				},3000)
			init(); // reload the product page again.
		})
		.catch(e=>{
			console.error('error occurred while deleting product.',e)
		})
	}

	return(
		<div className="container">
			<div>
				<h1>This is Product Management System !!</h1>
				<section><h4>List of Products..</h4></section>
			</div>
			<hr/>	
			{ connError ? connError : ""}
			<Link to='/createProduct' className="btn btn-primary mb-2">Add Product</Link>
			{ delFlag ?  
				<div className="alert alert-success alert-dismissible fade show" role="alert">
					<h6>Product Deleted Successfully</h6>
					<button type="button" className="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div> 
				: '' 
			}
			
			<br/>
			<div>
				<table className='table table-bordered table-striped'>
					<thead className='thead-dark'>
						<tr>
							<th>Product Name</th>
							<th>Description</th>
							<th>Price (£)</th>
							<th>Update Product</th>
							<th>Delete Product</th>
						</tr>
					</thead>
					<tbody>
							{
								products.map((product) =>{
									return(
										<tr key={product.id}>
											<td>{ product.name}</td>
											<td>{ product.description}</td>
											<td>{ product.price}</td>
											<td><Link to={`/updateProduct/${product.id}`} className="btn btn-info mb-2">Update</Link></td>
											<td><button className='btn btn-danger' 
												onClick={(e) => { if (window.confirm('Are you sure you wish to delete this Product?')) 
												removeProduct(product.id) } }> Delete </button>
											</td>
										</tr>										
									)
								})
							}
					</tbody>
				</table>
			</div>			
			
		</div>
	)
}
export default ProductHome;