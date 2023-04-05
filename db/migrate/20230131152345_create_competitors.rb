class CreateCompetitors < ActiveRecord::Migration[6.1]
  def change
    create_table :competitors do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :competition, null: false, foreign_key: true

      t.timestamps
    end
  end
end
