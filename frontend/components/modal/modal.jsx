import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import AddEducationContainer from '../profile/education/add_education_container';
import UpdateEducationContainer from '../profile/education/update_education_container';
import FeedContainer from '../feed/feed_container'

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal.modal) {
    case 'addEducation':
      component = <AddEducationContainer />;
      break;
    case 'updateEducation':
      component = <UpdateEducationContainer educationId={modal.id} />;
      break;
    case 'createPost':
      component = <FeedContainer />;
      break;
    case 'updatePost':
      component = <FeedContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.modal.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);