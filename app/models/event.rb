class Event < ApplicationRecord
    has_many :competitions
    has_many :ticket_holders
    has_many :users, through: :ticket_holders
end