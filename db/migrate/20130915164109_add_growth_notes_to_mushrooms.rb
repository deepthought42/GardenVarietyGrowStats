class AddGrowthNotesToMushrooms < ActiveRecord::Migration
  def change
    add_column :mushrooms, :growth_notes, :text
  end
end
