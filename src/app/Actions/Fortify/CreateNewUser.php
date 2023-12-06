<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
    public function create(array $input)
    {
        Validator::make($input, [
            'login_id' => ['required', 'string', 'max:22', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'user_name' => ['required', 'string', 'max:40'],
            'user_type_id' => ['required', 'integer', 'exists:user_types,id'],
            'group_id' => ['required', 'integer', 'exists:groups,id'],
        ])->validate();
    
        return User::create([
            'login_id' => $input['login_id'],
            'password' => Hash::make($input['password']),
            'user_name' => $input['user_name'],
            'user_type_id' => $input['user_type_id'],
            'group_id' => $input['group_id'],
        ]);
    }
}
