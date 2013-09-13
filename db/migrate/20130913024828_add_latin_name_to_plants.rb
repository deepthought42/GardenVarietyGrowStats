class AddLatinNameToPlants < ActiveRecord::Migration
  def change
    add_column :plants, :latin_name, :string
  end
end
