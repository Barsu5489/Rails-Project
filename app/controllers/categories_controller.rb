class CategoriesController < ApplicationController
    def index
        categories = Category.all
        render json: categories,  status: :ok
    end

    # def show
    #     category = find_category
    #     render json: category
    # end

    def show
        category = Category.find(params[:id])
        render json: category, include:[:jobs]
    end

end
