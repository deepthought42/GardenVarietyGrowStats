class Plant < ActiveRecord::Base
  attr_accessible :variety, :latin_name, :description, :maxDaysToGerm, :maxDaysToMaturity, :minDaysToGerm, :minDaysToMaturity, :days_til_pollination
  
  has_attached_file :picture, styles: {
    thumb: '100x100>',
    square: '200x200#',
    medium: '300x300>'
  }
end
