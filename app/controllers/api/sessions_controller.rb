class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
      render :show
    else
      render json: ["Invalid Username or Password"], status: 422
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: {}
    else
      render(json: ["Nobody signed in"], status: 404)
    end
  end
end
