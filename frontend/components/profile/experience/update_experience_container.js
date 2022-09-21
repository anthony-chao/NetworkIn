import { connect } from "react-redux";
import ExperienceForm from "./experience_form";
import { updateExperience, deleteExperience } from '../../../actions/experience_actions';
import { closeModal } from "../../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
    const selectedExperience = state.entities.viewedUserExperience[ownProps.experienceId]
    return {
        currentUser: state.session.user,
        viewedUserId: state.entities.viewedUser,
        experience: {
            id: selectedExperience.id,
            user_id: selectedExperience.user_id,
            title: selectedExperience.title,
            company_name: selectedExperience.company_name,
            location: selectedExperience.location,
            start_date: selectedExperience.start_date,
            end_date: selectedExperience.end_date,
            description: selectedExperience.description,
            start_month: String(selectedExperience.start_date).slice(5, 7),
            start_year: String(selectedExperience.start_date).slice(0, 4),
            end_month: String(selectedExperience.end_date).slice(5, 7),
            end_year: String(selectedExperience.end_date).slice(0, 4)
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