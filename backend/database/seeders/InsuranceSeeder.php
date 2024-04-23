<?php

namespace Database\Seeders;

use App\Models\Insurance;
use Illuminate\Database\Seeder;

class InsuranceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Insurance::create([
            "year" => 2024,
            "month" => 1,
            "insurance_sum" => 886.35,
            "insurance" => 70.91,
            "student_id" => 1,
        ]);
        Insurance::create([
            "year" => 2024,
            "month" => 2,
            "insurance_sum" => 886.35,
            "insurance" => 70.91,
            "student_id" => 1,
        ]);
        Insurance::create([
            "year" => 2024,
            "month" => 3,
            "insurance_sum" => 702,
            "insurance" => 48.28,
            "student_id" => 1,
        ]);
        Insurance::create([
            "year" => 2024,
            "month" => 4,
            "insurance_sum" => 702,
            "insurance" => 48.28,
            "student_id" => 1,
        ]);
        Insurance::create([
            "year" => 2024,
            "month" => 5,
            "insurance_sum" => 702,
            "insurance" => 48.28,
            "student_id" => 1,
        ]);
        Insurance::create([
            "year" => 2024,
            "month" => 6,
            "insurance_sum" => 702,
            "insurance" => 48.28,
            "student_id" => 1,
        ]);
        Insurance::create([
            "year" => 2024,
            "month" => 7,
            "insurance_sum" => 639,
            "insurance" => 56.16,
            "student_id" => 1,
        ]);
        Insurance::create([
            "year" => 2024,
            "month" => 8,
            "insurance_sum" => 639,
            "insurance" => 56.16,
            "student_id" => 1,
        ]);
        Insurance::create([
            "year" => 2024,
            "month" => 9,
            "insurance_sum" => 639,
            "insurance" => 56.16,
            "student_id" => 1,
        ]);
        Insurance::create([
            "year" => 2024,
            "month" => 10,
            "insurance_sum" => 639,
            "insurance" => 56.16,
            "student_id" => 1,
        ]);
        Insurance::create([
            "year" => 2024,
            "month" => 11,
            "insurance_sum" => 520,
            "insurance" => 56.16,
            "student_id" => 1,
        ]);
        Insurance::create([
            "year" => 2024,
            "month" => 12,
            "insurance_sum" => 886.35,
            "insurance" => 56.16,
            "student_id" => 1,
        ]);
        Insurance::create([
            "year" => 2023,
            "month" => 1,
            "insurance_sum" => 520,
            "insurance" => 70.91,
            "student_id" => 1,
        ]);
        Insurance::create([
            "year" => 2023,
            "month" => 2,
            "insurance_sum" => 520,
            "insurance" => 70.91,
            "student_id" => 1,
        ]);
    }
}
