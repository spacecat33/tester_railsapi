class EventsController < ApplicationController
    def index
        # render json: { message: "Please see all events below:" }
        render json: Event.all
    end

    def show 
        event = Event.find(params[:id]) #find only takes in :id value however findby can use other values including attributes.
        render json: event, status: :ok
    
    rescue ActiveRecord::RecordNotFound => error #consider putting this in application controller so that all controllers can use it
        # byebug
        render json: {message: error.message} #rescue block does not need an 'end'
    
    end

    private

    def event_params
    end
end
