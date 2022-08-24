import { connect } from "react-redux";
import EducationForm from "./education_form";
import { addEducation } from '../../../actions/education_actions';
import { closeModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        viewedUserId: ownProps.viewedPageId,
        education: {
            user_id: "",
            school: "",
            degree: "",
            field: "",
            start_date: "",
            end_date: "",
            activities: "",
            description: "",
            start_year: "",
            start_month: "",
            end_year: "",
            end_month: ""
        },
        formType: 'Add Education'
    }
};

const mapDispatchToProps = (dispatch) => ({
    educationFunction: (education) => dispatch(addEducation(education)),
    closeModal: () => dispatch(closeModal())
})

export default connect (mapStateToProps, mapDispatchToProps)(EducationForm);