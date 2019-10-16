Rails.application.routes.draw do
  # get 'users/index'
  # get 'users/show'
  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    registrations: "auth/registrations"
  }

  scope "/api" do
    resources :articles do
      get "is_logged_in", :on => :collection
    end
    resources :users
  end
end
