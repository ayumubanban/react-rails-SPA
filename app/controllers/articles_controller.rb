class ArticlesController < ApplicationController
  before_action :set_article, only: [:show, :update, :destroy]
  before_action :authenticate_user!

  # GET /articles
  # GET /articles.json
  def index
    @articles = Article.all
    render "index", :formats => [:json], :handlers => [:jbuilder]
  end

  # GET /articles/1
  # GET /articles/1.json
  def show
    render "show", :formats => [:json], :handlers => [:jbuilder]
  end

  # POST /articles
  # POST /articles.json
  def create
    @article = Article.new(article_params)

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
