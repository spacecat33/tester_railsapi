class Competitor < ApplicationRecord
  belongs_to :user
  belongs_to :competition
end
