class Api::EducationsController < ApplicationController

    def index
        @educations = Education.where(user_id: params[:user_id])
        render :index
    end

    def create
        @education = Education.new(education_params)

        if @education.save
            render :show
        else
            render json: @education.errors.full_messages, status: 422
        end
    end

    def update
        @education = Education.find_by(id: params[:id])

        if @education
            @education.update(education_params)
            render :show
        else
            render json: @education.errors.full_messages, status: 422
        end
    end

    def destroy
        @education = Education.find_by(id: params[:id])

        if @education
            @education.destroy
            render :show
        else
            render json: @education.errors.full_messages, status: 422
        end
    end

    private
    
    def education_params
        params.require(:education).permit(:user_id, :school, :degree, :field, :start_date, :end_date, :activities, :description)
    end

end
