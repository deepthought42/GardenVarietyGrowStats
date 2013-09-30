# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130929224454) do

  create_table "mushrooms", :force => true do |t|
    t.string   "variety"
    t.string   "latin_name"
    t.string   "difficulty"
    t.text     "description"
    t.string   "substrate"
    t.integer  "spawn_time_min"
    t.integer  "spwan_time_max"
    t.integer  "fruit_time_min"
    t.integer  "fruit_time_max"
    t.float    "price_per_ounce"
    t.datetime "created_at",           :null => false
    t.datetime "updated_at",           :null => false
    t.text     "growth_notes"
    t.string   "picture_file_name"
    t.string   "picture_content_type"
    t.integer  "picture_file_size"
    t.datetime "picture_updated_at"
  end

  create_table "plants", :force => true do |t|
    t.string   "variety"
    t.integer  "minDaysToGerm"
    t.integer  "maxDaysToGerm"
    t.integer  "minDaysToMaturity"
    t.integer  "maxDaysToMaturity"
    t.datetime "created_at",                         :null => false
    t.datetime "updated_at",                         :null => false
    t.string   "latin_name"
    t.integer  "days_til_pollination"
    t.text     "description"
    t.integer  "optimum_soil_temp_low"
    t.integer  "optimum_germination_soil_temp_high"
    t.string   "picture_file_name"
    t.string   "picture_content_type"
    t.integer  "picture_file_size"
    t.datetime "picture_updated_at"
  end

  add_index "plants", ["variety", "latin_name"], :name => "index_plants_on_variety_and_latin_name"

end
