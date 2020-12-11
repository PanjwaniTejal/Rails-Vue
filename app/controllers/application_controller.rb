class ApplicationController < ActionController::Base
  # skip_before_action :verify_authenticity_token
  # Rails routes not match any routs in routs.rb then it call vue_application action
  # As well as it called vue_application.html.erb from layout
  def vue_application
    render inline: '', layout: 'vue_application'
  end
end
