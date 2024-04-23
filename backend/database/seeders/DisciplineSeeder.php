<?php

namespace Database\Seeders;

use App\Models\Discipline;
use Illuminate\Database\Seeder;

class DisciplineSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Discipline::create([
            "id" => 1,
            "name" => "Английски",
            "semester" => 1,
            "specialty_id" => 1,
        ]);
        Discipline::create([
            "id" => 2,
            "name" => "Математика 1",
            "semester" => 2,
            "specialty_id" => 1,
        ]);
        Discipline::create([
            "id" => 3,
            "name" => "Математика 2",
            "semester" => 3,
            "specialty_id" => 1,
        ]);
        Discipline::create([
            "id" => 4,
            "name" => "Математика 3",
            "semester" => 4,
            "specialty_id" => 1,
        ]);
        Discipline::create([
            "id" => 5,
            "name" => "ОС",
            "semester" => 5,
            "specialty_id" => 1,
        ]);
        Discipline::create([
            "id" => 6,
            "name" => "ПМУ",
            "semester" => 6,
            "specialty_id" => 1,
        ]);
        Discipline::create([
            "id" => 7,
            "name" => "ПС",
            "semester" => 6,
            "specialty_id" => 1,
        ]);
    }
}
