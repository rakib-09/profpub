<?php

namespace Modules\Details\Entities;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Product extends Model
{
    use Searchable;

    protected $fillable = ["name","bangla_name","writer", "writer_bangla","publication","image","price","discount","ext_link","description"];

}