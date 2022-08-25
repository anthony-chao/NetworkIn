class Api::PostsController < ApplicationController

    def index
        @posts = Post.all.order(:id)
        render :index
    end

    def create
        @post = Post.new(post_params)

        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def update
        @post = Post.find_by(id: params[:id])

        if @post
            @post.update(post_params)
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy
        @post = Post.find_by(id: params[:id])

        if @post
            @post.delete
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def post_params
        params.require(:post).permit(:user_id, :body, :created_at)
    end

end
