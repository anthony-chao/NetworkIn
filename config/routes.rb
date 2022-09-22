Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update] do
      resources :educations, only: [:index]
      resources :experiences, only: [:index]
    end
    resource :session, only: [:create, :destroy]

    resources :experiences, only: [:create, :update, :destroy]
    resources :educations, only: [:create, :update, :destroy]

    resources :posts, only: [:index, :create, :update, :destroy]
    resources :likes, only: [:create, :destroy]
  end

  root to: "static_pages#root"

end
