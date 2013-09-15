class Mushroom < ActiveRecord::Base
  attr_accessible :description, :difficulty, :fruit_time_max, :fruit_time_min, :latin_name, :price_per_ounce, :spawn_time_min, :spwan_time_max, :substrate, :variety
end
