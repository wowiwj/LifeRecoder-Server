<?php

namespace App\Models;

use App\Helpers\Traits\Commentable as CommentTrait;
use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{

    use CommentTrait;

    protected $fillable = ['title','content','mood_id'];

    public function photos()
    {
        return $this->hasMany(Photo::class);
    }


    /**
     * 获取该文章的所有标签
     */
    public function tags()
    {
        return $this->morphToMany(Tag::class,'taggable');
    }

    public function mood()
    {
        return $this->hasOne(Mood::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }


    public function topic()
    {
        return $this->belongsTo(Topic::class);
    }


}
