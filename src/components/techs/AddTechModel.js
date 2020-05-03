import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechModal = () => {
    const [fn,setfn]=useState('');
    const [ln,setln]=useState('');
    const onSubmit = (e)=>{
        e.preventDefault();
        if(fn===''||ln===''){
            M.toast({html:'Please enter First name and Last name'})
        } else {
            console.log(fn,ln);
            //Clear Fields
            setfn('');
            setln('');
        }
        
    }
    return (
        <div id="tech-modal" className="modal" >
            <div className="modal-content">
                <h4>New Technitian</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='msg' value={fn} onChange={e=>setfn(e.target.value)}/>
                        <label htmlFor="msg" className="active">
                            First Name
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='msg' value={ln} onChange={e=>setln(e.target.value)}/>
                        <label htmlFor="msg" className="active">
                            Last Name
                        </label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-light btn" style={{marginRight:'10px'}}>Enter</a>
            </div>
        </div>
    )
}


export default AddTechModal
