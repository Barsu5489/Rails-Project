class UsersController < ApplicationController
  before_action :set_user, only: [:show]
  
  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: :created
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end
    def index
        #get users
        render json: User.all, status: :ok
    end

    def show
        render json: @user, status: :ok
      end
    
      private
    
      def set_user
        @user = User.find(params[:id])
      end
    
      private
    
      def user_params
        params.require(:user).permit(:username, :first_name, :last_name, :email, :password, :password_confirmation)
      end
  
  
end
