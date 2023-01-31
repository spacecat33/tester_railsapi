class User < ApplicationRecord
    has_many :ticket_holders
    has_many :events, through: :ticket_holders
end
