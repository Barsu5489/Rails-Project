class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.string :title
      t.text :description
      t.text :requirements
      t.string :location
      t.decimal :salary
      t.date :date_posted
      t.integer :user_id

      t.timestamps
    end
  end
end
