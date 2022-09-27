class Api::ConnectionsController < ApplicationController

    def index
        @connections = Connection.all
        render :index
    end

    def create
        @connection = Connection.new(connection_params)

        if @connection.save
            render :show
        else
            render json: @connection.errors.full_messages, status: 422
        end
    end

    def update
        @connection = Connection.find_by(id: params[:id])

        if @connection
            @connection.update(connection_params)
            render :show
        else
            render json: @connection.errors.full_messages, status: 422
        end
    end

    def destroy
        @connection = Connection.find_by(id: params[:id])

        if @connection
            @connection.destroy
            render :show
        else
            render json: @connection.errors.full_messages, status: 422
        end
    end

    private
    
    def connection_params
        params.require(:connection).permit(:connector_id, :connectee_id, :accepted)
    end

end
