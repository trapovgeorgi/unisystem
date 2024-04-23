<?php

namespace Database\Seeders;

use App\Models\Event;
use Carbon\Carbon;
use DateTime;
use Illuminate\Database\Seeder;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Event::create([
            "id" => 1,
            "title" => "Защита на проект по ПМУ",
            "start" => Carbon::create("2024", 4, 25, 7, 30),
            "end" => Carbon::create("2024", 4, 25, 19, 30),
        ]);

        Event::create([
            "id" => 2,
            "title" => "Защита на проект по ФЕЕП",
            "start" => Carbon::create("2024", 4, 25, 11, 30),
            "end" => Carbon::create("2024", 4, 25, 14, 30),
        ]);

        Event::create([
            "id" => 3,
            "title" => "Изпит по ФЕЕП",
            "start" => Carbon::create("2024", 4, 26, 7, 30),
            "end" => Carbon::create("2024", 4, 26, 19, 30),
        ]);

        Event::create([
            "id" => 4,
            "title" => "Изпит по ПС",
            "start" => Carbon::create("2024", 5, 11, 7, 30),
            "end" => Carbon::create("2024", 5, 11, 19, 30),
        ]);

        Event::create([
            "id" => 5,
            "title" => "Резултати за стипендии",
            "start" => Carbon::create("2024", 5, 25, 7, 30),
            "end" => Carbon::create("2024", 5, 25, 7, 30),
        ]);
    }
}
