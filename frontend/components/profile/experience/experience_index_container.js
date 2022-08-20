import { connect } from 'react-redux';
import { fetchExperiences } from '../../../actions/experience_actions';
import ExperiencesIndex from './experience_index';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        viewedUserId: ownProps.viewedPageId,
        experiences: state.entities.viewedUserExperience
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchExperiences: (userId) => dispatch(fetchExperiences(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExperiencesIndex)