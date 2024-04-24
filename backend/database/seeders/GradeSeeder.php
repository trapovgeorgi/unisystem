<?php

namespace Database\Seeders;

use App\Models\Grade;
use Illuminate\Database\Seeder;

class GradeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
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
      
    }
}
