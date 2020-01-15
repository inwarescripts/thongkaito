<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

class AdminTableSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		DB::table('admin')->where("id", 1)->delete();
		DB::table('admin')->insert([
			'id' => 1,
			'name' => 'Supper admin',
			'email' => 'demo.test@gmail.com',
			'password' => bcrypt("123456a@"),
            'authority' => 'superAdmin',
            'status' => 'active',
            'last_logged_at' => Carbon::now(),
			'created_at' => Carbon::now(),
			'updated_at' => Carbon::now()
		]);
	}
}
