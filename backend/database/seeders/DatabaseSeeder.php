<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            FacultySeeder::class,
            SpecialtySeeder::class,
            DisciplineSeeder::class,
            StreamSeeder::class,
            GroupSeeder::class,
            UserSeeder::class,
            GradeSeeder::class,
            EventSeeder::class,
            InsuranceSeeder::class,
            SportSeeder::class,
            GrantRequestSeeder::class,
            DormSeeder::class,
        ]);
    }
}
