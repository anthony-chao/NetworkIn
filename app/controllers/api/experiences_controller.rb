class Api::ExperiencesController < ApplicationController

    def index
        @experiences = Experience.where(user_id: params[:user_id])
        render :index
    end

    def create
        @experience = Experience.new(experience_params)

        if @experience.save
            render :show
        else
            render json: @experience.errors.full_messages, status: 422
        end
    end

    def update
        @experience = Experience.find_by(id: params[:id])

        if @experience
            @experience.update(experience_params)
            render :show
        else
            render json: @experience.errors.full_messages, status: 422
        end
    end

    def destroy
        @experience = Experience.find_by(id: params[:id])

        if @experience
            @experience.destroy
            render :show
        else
            render json: @experience.errors.full_messages, status: 422
        end
    end

    private
    
    def experience_params
        params.require(:experience).permit(:user_id, :title, :company_name, :location, :start_date, :end_date, :description)
    end

end
