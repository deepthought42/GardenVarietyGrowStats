class AddDescriptionToPlants < ActiveRecord::Migration
  def change
    add_column :plants, :description, :text
  end
end
