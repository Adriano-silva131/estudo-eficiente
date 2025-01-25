<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Materia extends Model
{
    use HasFactory;

    protected $fillable = [ 
        'codigo_materia',
        'nome_materia',
        'tipo_materia_id',
    ];

    public function tipo_materia() 
    {
        return $this->belongsTo(TipoMateria::class, 'tipo_materia_id');
    }
    
}
