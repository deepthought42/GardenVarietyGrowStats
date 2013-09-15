class CreateMushrooms < ActiveRecord::Migration
  def change
    create_table :mushrooms do |t|
      t.string :variety
      t.string :latin_name
      t.string :difficulty
      t.text :description
      t.string :substrate
      t.integer :spawn_time_min
      t.integer :spwan_time_max
      t.integer :fruit_time_min
      t.integer :fruit_time_max
      t.precision :price_per_ounce

      t.timestamps
    end
  end
end
