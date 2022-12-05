import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products', 
        {headers:{
            authorization:JSON.parse(localStorage.getItem('token'))
        }});
      //last me head
        //  headers:{
        //     authorization:JSON.parse(localStorage.getItem('token'))
        // }
        result = await result.json();
        setProducts(result);
    }
    //console.log("products",products)

    const deleteProduct = async (id) => {
        //console.log(id)
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: "Delete",  headers:{
                authorization:JSON.parse(localStorage.getItem('token'))
            }
        });
        result = await result.json();
        if (result) {
           getProducts();
        }
    }
    const searchHandle = async (event)=>{
        let key = event.target.value;
        if(key){
            let result = await fetch(`http://localhost:5000/search/${key}`,{  headers:{
                authorization:JSON.parse(localStorage.getItem('token'))
            }});
            result = await result.json()
            if(result){
                setProducts(result)
            }
        }else{
            getProducts();
        }
        
    }


    return (
        <div className="product-list">
            <h3>Product List</h3>

            <input type="" className='search-product-box' placeholder='Search Product'
           onChange={ searchHandle} ></input>
            <ul>
                <li>S. No.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                
                <li>company</li>
                <li>Operation</li>

            </ul>

            {
              products.length>0?  products.map((item, index) =>
                    <ul key={item._id}>
                        <li >{index + 1}</li>
                        <li>{item.name}</li>
                        <li>₹{item.price}</li>
                        <li>{item.category}</li>
                        <li>{item.company}</li>
                      <li>
                      <button onClick={()=>deleteProduct(item._id)} className="deletebtn">Delete</button>
                      <Link to={"/update/"+item._id} className="updatebtn">Update</Link>
                      </li>  
                        
                    </ul>
                ):<h1>NO Result Found</h1>
            }

        </div>
    )

}

export default ProductList;




