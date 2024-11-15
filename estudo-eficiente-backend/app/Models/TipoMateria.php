<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipoMateria extends Model
{
    use HasFactory;

    protected $fillable = [
        'tipo_materia_codigo',
        'tipo_materia_nome',
    ];
}
