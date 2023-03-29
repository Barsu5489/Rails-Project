class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :location, :salary, :date_posted, :created_at, :updated_at
  belongs_to :user
  has_many :categories

  def categories
    object.categories.pluck(:name)
  end
end
