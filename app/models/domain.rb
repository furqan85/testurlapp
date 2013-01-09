class Domain < ActiveRecord::Base
  attr_accessible :url

  validates_presence_of :url

  def self.names
    names = self.all.map{|d| d.url}
    names.reverse()
  end

end
