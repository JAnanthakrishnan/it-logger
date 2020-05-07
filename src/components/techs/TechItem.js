import React from 'react'
import PropTypes from 'prop-types'
import {deleteTech} from '../../actions/techActions'
import {connect} from 'react-redux'
const TechItem = ({deleteTech,tech}) => {
    return (
        <li className="collection-item">
            <div>
                {tech.firstName} {tech.lastName}
                <a href="#!" onClick={()=>deleteTech(tech.id)} className="secondary-content">
                    <i className="material-icons red-text">remove</i>
                </a>
            </div>
        </li>
    )
}

TechItem.propTypes = {
    tech:PropTypes.object.isRequired,
    deleteTech:PropTypes.func.isRequired,
}

export default connect(null,{deleteTech})(TechItem)
