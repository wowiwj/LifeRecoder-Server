<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(MoodsTableSeeder::class);
        $this->call(TagsTableSeeder::class);
        $this->call(GalliriesTableSeeder::class);
        $this->call(PhotosTableSeeder::class);
    }
}
