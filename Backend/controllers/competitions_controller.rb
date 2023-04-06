class CompetitionsController < ApplicationController
    def index
        render json: Competition.all, status: :ok
    end

    def create
        competition = Competition.create(competition_params)
        render json: competition, status: :created
    end

    def update
        competition = Competition.find(params[:id])
        competition.update(competition_params)

    rescue ActiveRecord::RecordNotFound => error #consider putting this in application controller so that all controllers can use it
        # byebug
        render json: {message: error.message} #rescue block does not need an 'end'
    
    end

    def destroy
        competition = Competition.find(params[:id])
        competition.destroy
        head :no_content
    rescue ActiveRecord::RecordNotFound => error #consider putting this in application controller so that all controllers can use it
        # byebug
        render json: {message: error.message} #rescue block does not need an 'end'
    
    end

    def ongoing_competitions
        # competitions = Competition.where(ends_at: #date same as today or future)
    end

    private

    def competition_params
        #return only the competitions that haven't taken place yet
        params.permit(:name, :arena, :discipline, :level, :starts_at, :ends_at)
        
    end
end
