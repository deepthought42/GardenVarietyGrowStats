class ChangeNameToVarietiesInPlants < ActiveRecord::Migration
  def up
	rename_column :plants, :name, :variety
  end

  def down
  end
end
