class Api::CommentsController < ApplicationController

    def index
        @comments = Comment.where(post_id: params[:post_id])
        render :index
    end

    def create
        @comment = Comment.new(comment_params)

        if @comment.save
            render :show
        else
            render json: @coment.errors.full_messages, status: 422
        end
    end

    def update
        @comment = Comment.find_by(id: params[:id])

        if @comment
            @comment.update(comment_params)
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])

        if @comment
            @comment.destroy
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:user_id, :post_id, :parent_comment_id, :body)
    end
end
