import { connect } from 'react-redux';
import { fetchEducations } from '../../../actions/education_actions';
import EducationIndex from './education_index';
import { openModal, closeModal } from '../../../actions/modal_actions';
import React from 'react';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        viewedUserId: ownProps.viewedPageId,
        educations: state.entities.viewedUserEducation
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchEducations: (userId) => dispatch(fetchEducations(userId)),
    otherForm: (
        <button onClick={() => dispatch(openModal('addEducation'))}>
          +
        </button>
      ),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(EducationIndex)