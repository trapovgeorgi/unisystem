<?php

namespace Database\Seeders;

use App\Models\Dorm;
use Illuminate\Database\Seeder;

class DormSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Dorm::create([
            "block" => 4,
            "number" => 421,
        ]);
        Dorm::create([
            "block" => 4,
            "number" => 423,
        ]);
        Dorm::create([
            "block" => 4,
            "number" => 428,
        ]);
        Dorm::create([
            "block" => 3,
            "number" => 328,
        ]);Dorm::create([
            "block" => 3,
            "number" => 312,
        ]);
    }
}
