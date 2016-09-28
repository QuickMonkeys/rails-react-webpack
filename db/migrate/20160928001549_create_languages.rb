class CreateLanguages < ActiveRecord::Migration[5.0]
  def change
    create_table :languages do |t|
      t.integer :year
      t.string :name
      t.string :developer_company

      t.timestamps
    end
  end
end
