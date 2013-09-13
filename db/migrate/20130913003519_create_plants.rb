class CreatePlants < ActiveRecord::Migration
  def change
    create_table :plants do |t|
      t.string :name
      t.integer :minDaysToGerm
      t.integer :maxDaysToGerm
      t.integer :minDaysToMaturity
      t.integer :maxDaysToMaturity

      t.timestamps
    end
  end
end
