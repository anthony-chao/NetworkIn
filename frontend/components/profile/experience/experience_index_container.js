import { connect } from 'react-redux';
import { fetchExperiences } from '../../../actions/experience_actions';
import ExperiencesIndex from './experience_index';
import { openModal, closeModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.user,
        viewedUserId: ownProps.viewedPageId,
        experiences: state.entities.viewedUserExperience
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchExperiences: (userId) => dispatch(fetchExperiences(userId)),
    closeModal: () => dispatch(closeModal()),
    openModal: (type, id) => dispatch(openModal(type, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExperiencesIndex)