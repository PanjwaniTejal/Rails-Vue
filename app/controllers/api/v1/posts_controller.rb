class Api::V1::PostsController < ApplicationController
  def index
    @posts = Post.all
    # data = ActiveModelSerializers::SerializableResource.new(@posts, serializer: PostSerializer).to_json
    # render json: PostSerializer.new(@posts)to_json
    render json: @posts
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end

  def create
    @post = Post.new(post_params)
    @post.save

    @posts = Post.all
    render json: @posts
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy

    @posts = Post.all
    render json: @posts
  end

  private

  def post_params
    {
      title: params[:title],
      description: params[:description]
    }
  end
end
