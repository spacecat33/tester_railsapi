class CreateCompetitions < ActiveRecord::Migration[6.1]
  def change
    create_table :competitions do |t|
      t.string :name
      t.string :arena
      t.string :discipline
      t.integer :level
      t.datetime :starts_at
      t.datetime :ends_at
      t.belongs_to :event, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
