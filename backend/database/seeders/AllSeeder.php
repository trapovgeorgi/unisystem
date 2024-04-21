<?php

namespace Database\Seeders;

use App\Models\Discipline;
use App\Models\Faculty;
use App\Models\Grade;
use App\Models\Group;
use App\Models\Specialty;
use App\Models\Stream;
use App\Models\User;
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
        //Disciplines
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

        Stream::create([
            "id" => 9,
            "faculty_id" => 1,
        ]);
        Group::create([
            "id" => 44,
            "specialty_id" => 1,
            "stream_id" => 9,
        ]);

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

        //Grades
        Grade::create([
            "id" => 1,
            "grade" => 3,
            "verified" => true,
            "student_id" => 1,
            "teacher_id" => 2,
            "discipline_id" => 1,
        ]);
        Grade::create([
            "id" => 2,
            "grade" => 6,
            "verified" => true,
            "student_id" => 1,
            "teacher_id" => 2,
            "discipline_id" => 2,
        ]);
        Grade::create([
            "id" => 3,
            "grade" => 5,
            "verified" => true,
            "student_id" => 1,
            "teacher_id" => 2,
            "discipline_id" => 3,
        ]);
        Grade::create([
            "id" => 4,
            "grade" => 4,
            "verified" => true,
            "student_id" => 1,
            "teacher_id" => 2,
            "discipline_id" => 4,
        ]);
        Grade::create([
            "id" => 5,
            "grade" => 3,
            "verified" => false,
            "student_id" => 1,
            "teacher_id" => 2,
            "discipline_id" => 5,
        ]);
        Grade::create([
            "id" => 6,
            "grade" => 6,
            "verified" => true,
            "student_id" => 1,
            "teacher_id" => 2,
            "discipline_id" => 6,
        ]);
        Grade::create([
            "id" => 7,
            "grade" => 5,
            "verified" => false,
            "student_id" => 1,
            "teacher_id" => 2,
            "discipline_id" => 7,
        ]);
    }
}
