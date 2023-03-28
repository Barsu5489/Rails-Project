class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :requirements, :location, :salary, :date_posted
  has_one :company
end
