Rails.application.routes.draw do
  root 'home#index'
  # get 'home/get_data'

  namespace :api do
    namespace :v1 do
      resources :posts
    end
  end
  get '/*path', to: 'application#vue_application',
                format: false,
                constraints: ->(req) do
                  req.path.exclude? 'rails/active_storage'
                end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
