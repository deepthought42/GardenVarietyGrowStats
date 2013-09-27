class AddPictureToPlants < ActiveRecord::Migration
  def change
    add_attachment :plants, :picture
  end
end
