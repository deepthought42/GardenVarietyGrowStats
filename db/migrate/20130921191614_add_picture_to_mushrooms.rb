class AddPictureToMushrooms < ActiveRecord::Migration
  def change
	 add_attachment :mushrooms, :picture
  end
end
