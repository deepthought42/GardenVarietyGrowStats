class AddOptimumGerminationSoilTempHighToPlants < ActiveRecord::Migration
  def change
    add_column :plants, :optimum_germination_soil_temp_high, :integer
  end
end
