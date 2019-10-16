class FavoritesController < ApplicationController
  # * before_action :authenticate_user!はひとまず保留。ほんまにいるんかどうかはわからんので

  def create
    @favorite = current_user.favorites.build(article_id: params[:article_id])
    if @favorite.save
      render json: @favorite
    else
      render json: @favorite.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @favorite = Favorite.find_by(article_id: params[:article_id], user_id: current_user.id)
    @favorite.destroy
  end

  def tmp
    @favorite = Favorite.find_by(article_id: params[:article_id])
    render json: @favorite
  end
end
