<?php

namespace Database\Seeders;

use App\Models\Discipline;
use App\Models\Faculty;
use App\Models\Grade;
use App\Models\Group;
use App\Models\Specialty;
use App\Models\Stream;
use App\Models\Student;
use App\Models\Teacher;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class AllSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Faculty::create([
            "id" => 1,
            "name" => "ФКСТ"
        ]);
        Specialty::create([
            "id" => 1,
            "name" => "КСИ",

            "faculty_id" => 1
        ]);
        Teacher::create([
            "id" => 1,
            "name" => "Господин Господинов"
        ]);
        Discipline::create([
            "id" => 1,
            "name" => "ПМУ",
            "semester" => 6,
            "specialty_id" => 1,
        ]);
        Stream::create([
            "id" => 9,
            "faculty_id" => 1,
        ]);
        Group::create([
            "id" => 44,
            "specialty_id" => 1,
            "stream_id" => 9,
        ]);

        Student::create([
            "id" => 1,
            "api_token" => Str::random(80),
            "name" => "Студент Студенов",
            "facnum" => "111111111",
            "egn" => "0000000000",
            "mail" => "s.s@s",
            "semester" => "6",
            "eqd" => "Бакалавър",
            "eqd_type" => "Редовно",
            "state" => "Действащ",
            "group_id" => 44,
        ]);

        Grade::create([
            "id" => 1,
            "grade" => 6,
            "verified" => true,
            "student_id" => 1,
            "teacher_id" => 1,
        ]);
    }
}
