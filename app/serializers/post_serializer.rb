class PostSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :title,
    :description,
    :create_on
  )

  def create_on
    object.created_at
  end
end
