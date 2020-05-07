import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import {connect} from 'react-redux'
import {addTech} from '../../actions/techActions'
import PropTypes from 'prop-types'


const AddTechModal = ({addTech}) => {
    const [fn,setfn]=useState('');
    const [ln,setln]=useState('');
    const onSubmit = (e)=>{
        e.preventDefault();
        if(fn===''||ln===''){
            M.toast({html:'Please enter First name and Last name'})
        } else {
            addTech({
                firstName:fn,
                lastName:ln
            })
            M.toast({html:'Tech added'})
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

AddTechModal.propTypes = {
    addTech:PropTypes.func.isRequired,
}

export default connect(null,{addTech})(AddTechModal)
