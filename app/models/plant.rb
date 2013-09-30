class Plant < ActiveRecord::Base
  attr_accessible :variety, :latin_name, :description, :maxDaysToGerm, :maxDaysToMaturity, :minDaysToGerm, :minDaysToMaturity, :days_til_pollination, :picture
  
  has_attached_file :picture, styles: {
    thumb: '100x100>',
    square: '200x200#',
    medium: '300x300>'
  }
  
  def self.search(search)
    if search
      find(:all, :conditions => ['lower(variety) LIKE ?', "%#{search.downcase}%"])
    else
      find(:all)
    end
  end
end
