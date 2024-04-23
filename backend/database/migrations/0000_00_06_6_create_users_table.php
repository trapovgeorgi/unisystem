<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();

            $table->string('api_token', 80)
                ->unique()
                ->nullable()
                ->default(null);

            $table->text('push_token')
                ->nullable()
                ->default(null);

            $table->string("name", 255);
            $table->string("facnum", 9);
            $table->string("egn", 10);
            $table->string("mail", 255);
            $table->integer("semester")->nullable();
            $table->enum("eqd", ["Бакалавър", "Магистър", "Доктор"])->nullable();
            $table->enum("eqd_type", ["Редовно", "Задочно"])->nullable();
            $table->enum("state", ["Действащ", "Прекъснал"])->nullable();
            $table->enum("role", ["student", "teacher"])->nullable();

            $table->foreignId('group_id')
                ->nullable()
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
        Schema::dropIfExists('users');
    }
}
