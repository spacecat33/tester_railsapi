class Competition < ApplicationRecord
  belongs_to :event
  belongs_to :user

  has_many :competitors
  has_many :attendees, through: :competitors, source: :user
end
