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
  delete '/users/:id', to: 'users#destroy'
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "user/me", to: "users#show"
  put "/jobs/:id", to: "jobs#update_jobs"
  patch '/reset_password', to: 'users#reset_password'
  post '/jobs', to: 'jobs#create'
  delete '/jobs/:id', to: 'jobs#destroy'
end

