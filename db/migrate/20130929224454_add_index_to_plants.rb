class AddIndexToPlants < ActiveRecord::Migration
  def change
    add_index :plants, [:variety, :latin_name]
  end
end
