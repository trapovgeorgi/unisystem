<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGradesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('grades', function (Blueprint $table) {
            $table->id();
            $table->integer("grade");
            $table->boolean("verified");

            $table->foreignId('student_id')
                ->constrained("users")
                ->onUpdate('cascade')
                ->onDelete('cascade');

            $table->foreignId('teacher_id')
                ->constrained("users")
                ->onUpdate('cascade')
                ->onDelete('cascade');

            $table->foreignId('discipline_id')
                ->constrained()
                ->onUpdate('cascade')
                ->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('grades');
    }
}
