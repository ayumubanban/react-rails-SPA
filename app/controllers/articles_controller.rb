class ArticlesController < ApplicationController
  before_action :set_article, only: [:show, :update, :destroy]
  # *　ログインユーザー制限一時解除
  # before_action :authenticate_user!, except: [:is_logged_in]

  # GET /articles
  # GET /articles.json
  def index
    @articles = Article.all
    # render "index", :formats => [:json]
    render json: @articles
  end

  # GET /articles/1
  # GET /articles/1.json
  def show
    # render "show", :formats => [:json], :handlers => [:jbuilder]

    @favorites = @article.favorites
    # @current_user_id = current_user.id

    # render json: @article

    respond_to do |format|
      # format.any
      format.json  { render :json => {
        :article => @article,
        :favorites => @favorites,
        :current_user => current_user
      }}
    end
  end

  # POST /articles
  # POST /articles.json
  def create
    @article = Article.new(article_params)
    @article.user_id = current_user.id
    @article.username = current_user.name

    if @article.save
      render "show", :formats => [:json], :handlers => [:jbuilder], status: :created, location: @article
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /articles/1
  # PATCH/PUT /articles/1.json
  def update
    if @article.update(article_params)
      render "show", :formats => [:json], :handlers => [:jbuilder], status: :ok, location: @article
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  # DELETE /articles/1
  # DELETE /articles/1.json
  def destroy
    @article.destroy
  end

  # GET /articles/is_logged_in
  # def is_logged_in
  #   if user_signed_in?
  #     is_logged_in = {"is_logged_in" => true}
  #     render :json => is_logged_in
  #   else
  #     is_logged_in = {"is_logged_in" => false}
  #     render :json => is_logged_in
  #   end
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_article
      @article = Article.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def article_params
      params.require(:article).permit(:title, :content)
    end
end
