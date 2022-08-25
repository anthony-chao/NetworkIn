import { connect } from "react-redux";
import ExperienceForm from "./experience_form";
import { updateExperience, deleteExperience } from '../../../actions/experience_actions';
import { closeModal } from "../../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        viewedUserId: state.entities.viewedUser,
        experience: {
            id: state.entities.viewedUserExperience[ownProps.experienceId].id,
            user_id: state.entities.viewedUserExperience[ownProps.experienceId].user_id,
            title: state.entities.viewedUserExperience[ownProps.experienceId].title,
            company_name: state.entities.viewedUserExperience[ownProps.experienceId].company_name,
            location: state.entities.viewedUserExperience[ownProps.experienceId].location,
            start_date: state.entities.viewedUserExperience[ownProps.experienceId].start_date,
            end_date: state.entities.viewedUserExperience[ownProps.experienceId].end_date,
            description: state.entities.viewedUserExperience[ownProps.experienceId].description,
            start_month: String(state.entities.viewedUserExperience[ownProps.experienceId].start_date).slice(5, 7),
            start_year: String(state.entities.viewedUserExperience[ownProps.experienceId].start_date).slice(0, 4),
            end_month: String(state.entities.viewedUserExperience[ownProps.experienceId].end_date).slice(5, 7),
            end_year: String(state.entities.viewedUserExperience[ownProps.experienceId].end_date).slice(0, 4)
        },
        formType: 'Edit Experience'
    }
};

const mapDispatchToProps = (dispatch) => ({
    experienceFunction: (experience) => dispatch(updateExperience(experience)),
    deleteExperience: (experience) => dispatch(deleteExperience(experience)),
    closeModal: () => dispatch(closeModal())
})

export default connect (mapStateToProps, mapDispatchToProps)(ExperienceForm);