Rails.application.routes.draw do
  resources :competitors
  resources :ticket_holders

  resources :competitions, only: [:index, :show, :create, :update, :destroy]
  get '/ongoing_competitions', to "competitions#ongoing_competitions"

  resources :events
  resources :users
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
