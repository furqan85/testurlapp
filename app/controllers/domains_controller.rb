class DomainsController < ApplicationController
  def index
    @domains = Domain.names
  end

  def sync
    list = params[:domains]
    domainNames = list.split(',')
    unless domainNames.blank?
      for domain in domainNames do
        newDomain = Domain.create(:url=>"#{domain}")
      end
    end
    render :nothing => true
  end

end
