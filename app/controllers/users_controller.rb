class UsersController < ApplicationController

  # before_action :authenticate_user!

  def index
    @users = User.all.order(created_at: :desc)
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    @articles = @user.articles
    @favorite_articles = @user.favorite_articles

    # render json: @user
    # render json: @user.articles
    respond_to do |format|
      # format.any
      format.json  { render :json => {
        :user => @user,
        :articles => @articles,
        :favorite_articles => @favorite_articles
      }}
    end

  end
end
