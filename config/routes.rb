Rails.application.routes.draw do
  resources :job_categories
  resources :categories
  resources :jobs, only: [:create, :update, :show, :destroy, :index]
  resources :users, only: [:create, :update, :show, :destroy, :index]
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
  post "/register", to: "users#create"
  #get "/users", to: "users#show"
  get "/jobs/users/:id", to: "jobs#userjobs"
  post "users/login", to: "sessions#create"
  delete "users/logout", to: "sessions#destroy"
  get "user/me", to: "users#show"
  patch "/jobs/:id", to: "jobs#update_jobs"
  
  post '/jobs', to: 'jobs#create'
end

