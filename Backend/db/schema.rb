# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_01_31_152345) do

  create_table "competitions", force: :cascade do |t|
    t.string "name"
    t.string "arena"
    t.string "discipline"
    t.integer "level"
    t.datetime "starts_at"
    t.datetime "ends_at"
    t.integer "event_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["event_id"], name: "index_competitions_on_event_id"
    t.index ["user_id"], name: "index_competitions_on_user_id"
  end

  create_table "competitors", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "competition_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["competition_id"], name: "index_competitors_on_competition_id"
    t.index ["user_id"], name: "index_competitors_on_user_id"
  end

  create_table "events", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.datetime "starts_at"
    t.datetime "ends_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ticket_holders", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "event_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["event_id"], name: "index_ticket_holders_on_event_id"
    t.index ["user_id"], name: "index_ticket_holders_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.text "bio"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "competitions", "events"
  add_foreign_key "competitions", "users"
  add_foreign_key "competitors", "competitions"
  add_foreign_key "competitors", "users"
  add_foreign_key "ticket_holders", "events"
  add_foreign_key "ticket_holders", "users"
end
