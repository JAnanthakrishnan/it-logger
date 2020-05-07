import React, { useEffect } from 'react'
import TechItem from './TechItem'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {getTechs} from '../../actions/techActions'

const TechListModal = ({tech:{techs,loading},getTechs}) => {
    useEffect(()=>{
        getTechs();
        //eslint-disable-next-line
    },[]);
    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician list</h4>
                <ul className="collection">
                    {!loading && techs!==null && techs.map(tech=>
                        <TechItem key={tech.id} tech={tech}/>
                        )}
                </ul>
            </div>
        </div>
    )
}
TechListModal.propTypes = {
    getTechs:PropTypes.func.isRequired,
    tech:PropTypes.object,
}
const mapStateToProps = state => ({
    tech:state.tech,
})

export default connect(mapStateToProps,{getTechs})(TechListModal)
