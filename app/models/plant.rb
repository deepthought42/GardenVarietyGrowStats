class Plant < ActiveRecord::Base
  attr_accessible :maxDaysToGerm, :maxDaysToMaturity, :minDaysToGerm, :minDaysToMaturity, :name
end
