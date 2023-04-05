class User < ApplicationRecord
    has_many :ticket_holders
    has_many :events, through: :ticket_holders
    has_many :created_events, class_name: "Event"

    has_many :competitors
    has_many :competitions, through: :competitors
    
end
