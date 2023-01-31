class CompetitionsController < ApplicationController
    def index
        render json: Competition.all
    end
end
