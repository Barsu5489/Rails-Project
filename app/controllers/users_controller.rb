class UsersController < ApplicationController
  # before_action :set_user, only: [:show]
  
  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

   # DELETE /users/:id
   def destroy
    user = User.find(params[:id])
    user.destroy
    app_response(message: "User deleted successfully", status: :ok, data: user)
  end
  
#reset password
  def reset_password
    user = User.find_by(email: params[:email])
    user.update!(password: params[:password])
    session[:user_id] = user.id
    render json: user, status: :created
  end
  
  def index
    # get/users
    render json: User.all, status: :ok
  end

  def show
    user = User.find_by(id: params[:id])
    if user
      render json: user, status: :ok
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end
  
    
  private
    
  def set_user
    @user = User.find(params[:id])
  end
    

  def user_params
    params.permit(:username, :first_name, :last_name, :email, :password)
  end
  
end
