import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { createProduct, getProduct, updateProduct } from "./RestClient";

const CreateProduct = () => {
    const [name,setName] = useState([]);
    const [description,setDescription] = useState([]);
    const [price,setPrice] = useState([]);
    let navigate = useNavigate();  // available in react-router 6, for prior version use useHistory() hook instead

    let {id} = useParams(); // useParam hook to get id value from request parameter
    
    // Pre load data based on id
    useEffect(() =>{
        if(id){
            const promise = getProduct(id)
            promise.then(data => {
                console.log('product fetched::', data);
                setName(data.name)
                setDescription(data.description)
                setPrice(data.price)
            })
            .catch(e=>{
                console.error('Error occurred on getProduct Rest Call:', e)
            })
        }
    }, [id] )

    const saveProduct = (e) =>{
        e.preventDefault(); // stop sending default browser request
        const product = {name,description,price,id}; // construct the product object
        if(id){
            const promise = updateProduct(product)
            promise.then(response =>{
                console.log('product saved:',response);
                window.alert('Awesom! Product updated successfully');
                navigate('/product'); // navigate to home page with latest product
            })
            .catch(e =>{
                console.error('error occurred while updating the product:',e)
            });
        }else{
            const promise = createProduct(product)
            promise.then(response =>{
                console.log('product saved:',response);
                window.alert('Awesom! Product created successfully');
                navigate('/product'); // navigate to home page with latest product
            })
            .catch(e =>{
                console.error('error occurred while saving the product:',e)
            });
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3' style={{marginTop:"10px"}}>
                    <h3 className='text-center'>Add New Product Screen</h3>
                    <hr/>
                    <div className='card-body'>
                        <form>
                            <div className='form-group'>
                                <label>Product Name:</label>
                                <input type='text'className='form-control'
                                    id='name' value={name} onChange={(e)=> setName(e.target.value)} placeholder='Enter Product Name'/>                    
                            </div>
                            <div className='form-group' style={{marginTop:"10px"}}>
                                <label>Product Description:</label>
                                <input type='text'className='form-control' 
                                    id='description' value={description} onChange={(e)=> setDescription(e.target.value)} placeholder='Enter Product Description'/>                    
                            </div>
                            <div className='form-group' style={{marginTop:"10px"}}>
                                <label>Product Price (£):</label>
                                <input type='text'className='form-control' 
                                    id='price' value={price} onChange={(e)=> setPrice(e.target.value)} placeholder='Enter Product Price in GBP (£)'/>
                            </div>
                            <div style={{marginTop:"20px"}}>
                                <button className='btn btn-success' onClick={(e) => saveProduct(e)}>Save Product</button>
                                <Link to='/product' className='btn btn-danger' style={{marginLeft:"10px"}}>Back to Product</Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default CreateProduct;
