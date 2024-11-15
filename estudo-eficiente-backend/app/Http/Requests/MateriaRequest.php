<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MateriaRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'codigo_materia' => 'required|integer|max:5|unique:materias,codigo_materia',
            'nome_materia' => 'required|string',
            'tipo_materia_codigo' => 'required|integer|max:3'
        ];
    }

    public function messages()
    {
        return [
            'codigo_materia.required' => 'O código da matéria é obrigatório',
            'codigo_materia.integer' => 'O código só pode ser números inteiros',
            'codigo_materia.unique' => 'O código do qual você está tentando criar já existe',
            'codigo_materia.max' => 'só é permitido no máximo 5 caracteres',
            'nome_materia.required' => 'O nome da matéria é obrigatório',
            'tipo_materia_codigo.required' => 'O tipo da matéria é obrigatório',
            'tipo_materia_codigo.integer' => 'O código só pode ser números inteiros'
        ];
    }
}
