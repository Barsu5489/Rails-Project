class JobsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        jobs = Job.all
        render json: jobs, status: :ok
      end

      def show
        job = find_job
        render json: job
    end

      def find_job
        job = Job.find(params[:id])
    end

    def create
        job = Job.create!(job_params)
        render json: job, status: :created
    end


    def update
      job = Job.find_by(id: params[:id])
      job.update(job_params)
      render json: job, status: :accepted
  end

 
      
      private
      
      def job_params
        params.require(:job).permit(
          :title,
          :description,
          :requirements,
          :location,
          :salary,
          :date_posted,
          :user_id,
          :company_name,
          :company_phone,
          :experience,
          :company_logo,
          :category_ids # Note the use of plural form here
        )
      end

      def render_not_found_response
        render json: { error: "Job not found" }, status: :not_found
    end
end
