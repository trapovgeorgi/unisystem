<?php

namespace Database\Seeders;

use App\Models\Sport;
use Illuminate\Database\Seeder;

class SportSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Sport::create([
            "name" => "Футбол",
            "quantity" => 10,
            "teacher_id" => 2,
        ]);
        Sport::create([
            "name" => "Баскетбол",
            "quantity" => 10,
            "teacher_id" => 2,
        ]);
    }
}
