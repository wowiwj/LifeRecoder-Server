<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

// 参考链接
//http://stackoverflow.com/questions/34496720/change-faker-locale-in-laravel-5-2
$localFaker = \Faker\Factory::create('zh_CN');
/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Models\User::class, function (Faker\Generator $faker) use($localFaker) {
    static $password;


    return [
        'nickname' => $localFaker->name,
        'email' => $localFaker->unique()->safeEmail,
        'mobile' => $localFaker->unique()->phoneNumber,
        'avatar' => $localFaker->imageUrl('400','400'),
        'last_login_time' => $localFaker->dateTimeBetween('-1 years','now'),
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});


$factory->define(App\Models\Tag::class, function (Faker\Generator $faker) use($localFaker) {

    return [
        'name' => $localFaker->name,
        'bio' => $localFaker->sentence,
    ];
});

$factory->define(App\Models\Gallery::class, function (Faker\Generator $faker) use($localFaker) {


    $user_id =  \App\Models\User::pluck('id')->random();


    return [
        'user_id' => $user_id,
        'title' => $localFaker->sentence,
        'content' => $localFaker->sentence,
    ];
});


$factory->define(App\Models\Photo::class, function (Faker\Generator $faker) use($localFaker) {

    $gallery_id =  \App\Models\Gallery::pluck('id')->random();
    return [
        'gallery_id' => $gallery_id,
        'name' => $localFaker->name,
        'path' => $localFaker->imageUrl(),
        'thumbnail_path' =>$localFaker->imageUrl(400,400),
        'description' => $localFaker->sentence
    ];
});

$factory->define(App\Models\Topic::class, function (Faker\Generator $faker) use($localFaker) {
    return [
        'name' => $localFaker->name,
        'bio' => $localFaker->sentence,
    ];
});

$factory->define(App\Models\Comment::class, function (Faker\Generator $faker) use($localFaker) {

    $user_id =  \App\Models\User::pluck('id')->random();
    $gallery_id =  \App\Models\Gallery::pluck('id')->random();

    $type = ['galleries', 'articles'];
    return [

        'user_id' => $user_id,
        'commentable_type' => $type[mt_rand(0,0)],
        'commentable_id' => $gallery_id,
        'body' => $faker->paragraph,
    ];
});

$factory->define(App\Models\Favorite::class, function (Faker\Generator $faker) use($localFaker) {

    $user_id =  \App\Models\User::pluck('id')->random();
    $gallery_id =  \App\Models\Gallery::pluck('id')->random();
    $type = ['galleries', 'articles'];
    return [
        'user_id' => $user_id,
        'favorited_type' => $type[mt_rand(0,0)],
        'favorited_id' => $gallery_id
    ];
});


$factory->define(App\Models\Vote::class, function (Faker\Generator $faker) use($localFaker) {

    $user_id =  \App\Models\User::pluck('id')->random();
    $comment_id =  \App\Models\Comment::pluck('id')->random();
    $type = ['comments'];
    return [
        'user_id' => $user_id,
        'voted_type' => $type[mt_rand(0,0)],
        'voted_id' => $comment_id
    ];
});








