import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import AddEducationContainer from '../profile/education/add_education_container';
import UpdateEducationContainer from '../profile/education/update_education_container';
import FeedContainer from '../feed/feed_container'
import AddExperienceContainer from '../profile/experience/add_experience_container';
import UpdateExperienceContainer from '../profile/experience/update_experience_container';
import AddPostContainer from '../feed/posts/add_post_container';
import UpdatePostContainer from '../feed/posts/update_post_container';

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
    case 'addExperience':
      component = <AddExperienceContainer />;
      break;
    case 'updateExperience':
      component = <UpdateExperienceContainer experienceId={modal.id} />;
      break;
    case 'addPost':
      component = <AddPostContainer />;
      break;
    case 'updatePost':
      component = <UpdatePostContainer postId={modal.id}/>;
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