class JobCategoriesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    def create
        job_category=JobCategory.create!(job_category_params)
        render json: job_category.job, status: :created
    end
    
    private
    def job_category_params
        params.permit(:job_id, :category_id)
    end

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end
end
