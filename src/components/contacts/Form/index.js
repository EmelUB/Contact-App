import React, { useState } from 'react'

function Form({addContact,contacts}) {
    
    const [form,setForm] = useState({fullname:"",phone_number:""});
    const onChangeInput =(e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    };

    const onSubmit = (e)=>{
        e.preventDefault();
        if(form.fullname===""||form.phone_number===""){
            return false;
        };
        addContact([...contacts,form]);
        setForm({fullname:"",phone_number:""});
        
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div><input name="fullname" placeholder='Full Name' onChange={onChangeInput} value={form.fullname}></input></div>
                <div><input name="phone_number" placeholder='Phone Number' onChange={onChangeInput} value={form.phone_number}></input></div>
                <div><button>Add</button></div>
            </form>
        </div>
    )
}

export default Form
