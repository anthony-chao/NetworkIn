class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    def update
        @user = User.find_by(id: params[:id])
        render :edit
    end

    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name, :headline, :location_country, :location_city)
    end
end

