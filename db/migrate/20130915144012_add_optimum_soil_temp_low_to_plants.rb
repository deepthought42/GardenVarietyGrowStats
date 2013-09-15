class AddOptimumSoilTempLowToPlants < ActiveRecord::Migration
  def change
    add_column :plants, :optimum_soil_temp_low, :integer
  end
end
