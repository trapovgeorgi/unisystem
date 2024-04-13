<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string("name", 255);
            $table->string("facnum", 9);
            $table->string("egn", 10);
            $table->string("mail", 255);
            $table->enum("eqd", ["Бакалавър", "Магистър", "Доктор"]);
            $table->enum("eqd_type", ["Редовно", "Задочно"]);
            $table->enum("state", ["Действащ", "Прекъснал"]);

            $table->foreignId('group_id')
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
        Schema::dropIfExists('students');
    }
}
