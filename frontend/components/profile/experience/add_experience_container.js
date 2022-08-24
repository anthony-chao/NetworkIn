import { connect } from "react-redux";
import ExperienceForm from "./experience_form";
import { addExperience } from '../../../actions/experience_actions';
import { closeModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        viewedUserId: ownProps.viewedPageId,
        experience: {
            user_id: "",
            title: "",
            company_name: "",
            location: "",
            start_date: "",
            end_date: "",
            description: "",
            start_year: "",
            start_month: "",
            end_year: "",
            end_month: ""
        },
        formType: 'Add Experience'
    }
};

const mapDispatchToProps = (dispatch) => ({
    experienceFunction: (experience) => dispatch(addExperience(experience)),
    closeModal: () => dispatch(closeModal())
})

export default connect (mapStateToProps, mapDispatchToProps)(ExperienceForm);