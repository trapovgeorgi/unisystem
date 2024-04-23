<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            "id" => 1,
            "api_token" => Str::random(80),
            "name" => "Иван Иванов",
            "role" => "student",
            "facnum" => "121221000",
            "egn" => "0000000000",
            "mail" => "iivanov@tu-sofia.bg",
            "semester" => "6",
            "eqd" => "Бакалавър",
            "eqd_type" => "Редовно",
            "state" => "Действащ",
            "group_id" => 44,
        ]);
        User::create([
            "id" => 2,
            "api_token" => Str::random(80),
            "name" => "Петър Петров",
            "role" => "teacher",
            "facnum" => "000000001",
            "egn" => "0000000000",
            "mail" => "ppetrov@tu-sofia.bg",
        ]);
    }
}
