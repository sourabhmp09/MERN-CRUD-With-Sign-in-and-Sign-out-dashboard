import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompnay] = useState('');
    const [error, setError] = useState(false);
    const navigate= useNavigate();

    const addProduct = async () => {

        if (!name || !price || !company || !category) {
            setError(true);
            return false
        }


        console.log(name, price, category, company);
        const userId = JSON.parse(localStorage.getItem("user"))._id;
        let result = await fetch("http://localhost:5000/add-product", {
            method: "post",
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                "Content-type": "application/json",
                
                    authorization:JSON.parse(localStorage.getItem('token'))
                }
            
        });
        result = await result.json();
        //console.log(result)
        if (result) {
            navigate('/')
        }

    }

    return (
        <div className='product'>
            <h1>Add Product</h1>
            <input type="text" placeholder='Enter product name' className='inputBox'
                value={name} onChange={(e) => { setName(e.target.value) }} />

            {error && !name && <span className='invalid-input'>Enter valid name</span>}
            <input type="text" placeholder='Enter product price' className='inputBox'
                value={price} onChange={(e) => { setPrice(e.target.value) }} />
            {error && !price && <span className='invalid-input'>Enter valid price</span>}

            <input type="text" placeholder='Enter product category' className='inputBox'
                value={category} onChange={(e) => { setCategory(e.target.value) }} />

            {error && !category && <span className='invalid-input'>Enter valid category</span>}
            <input type="text" placeholder='Enter product company' className='inputBox'
                value={company} onChange={(e) => { setCompnay(e.target.value) }}

            />
            {error && !company && <span className='invalid-input'>Enter valid company</span>}
            <button onClick={addProduct} className='appButton'>Add Product</button>


        </div>
    )
}


export default AddProduct;





////////////////