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
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->string('avatar_img', 50)->nullable();
            $table->enum('sex', array('', 'male', 'female', 'other'))->default('');
            $table->string('phone', 20)->nullable();
            $table->date('date_of_birth')->nullable();
            $table->string('city', 100)->nullable();
            $table->string('address', 100)->nullable();
            $table->enum('status', array('active', 'deleted'))->default('active');
            $table->dateTime('last_logged_at')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
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
