<?php

use Illuminate\Database\Seeder;

class FavoriteTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        try{
            factory(\App\Models\Favorite::class,60)->create();
        }catch (Exception $e){}
    }
}
