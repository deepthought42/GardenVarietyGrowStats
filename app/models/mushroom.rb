class Mushroom < ActiveRecord::Base
  attr_accessible :description, :difficulty, :fruit_time_max, :fruit_time_min, :latin_name, :price_per_ounce, :spawn_time_min, :spwan_time_max, :substrate, :variety, :growth_notes, :picture
  
  has_attached_file :picture, styles: {
    thumb: '100x100>',
    square: '200x200#',
    medium: '300x300>'
  },
  :storage => :s3,
  :s3_credentials => "#{RAILS_ROOT}/config/s3.yml",
  :path => ":attachment/:id/:style.:extension"
end
