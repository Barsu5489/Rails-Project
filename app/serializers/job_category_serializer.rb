class JobCategorySerializer < ActiveModel::Serializer
  attributes :id
  has_one :job
  has_one :category
end
