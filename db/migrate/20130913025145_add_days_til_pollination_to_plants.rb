class AddDaysTilPollinationToPlants < ActiveRecord::Migration
  def change
    add_column :plants, :days_til_pollination, :integer
  end
end
