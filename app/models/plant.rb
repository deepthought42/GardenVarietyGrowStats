class Plant < ActiveRecord::Base
  attr_accessible :variety, :latin_name, :description, :maxDaysToGerm, :maxDaysToMaturity, :minDaysToGerm, :minDaysToMaturity, :days_til_pollination
end
