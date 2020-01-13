<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;
    protected $primaryKey = 'user_id';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    const STATUS_UNVERIFITED = 'unverified';

    const IDENTIFICATION_UPLOAD_PATH = "img/upload/identification";
    const PROFILE_UPLOAD_PATH = "img/upload/profile";
    const UPLOAD_AVATAR = 'avatar';
    const DATE_MIN = 1920;
    const DATE_DEFAULT = 2000;

    const LOCATION_JP = 'jp';
    const LOCATION_OUTSIDE = 'outside';

    protected $guarded = array();

    public function getUserStatusAttribute()
    {
        $status_map = [
            'unverified' => '仮登録',
            'active' => '有効',
            'limitation' => '規制中',
            'suspended' => '利用停止',
            'banned' => '強制退会',
            'withdrew' => '退会',
            'deleted' => '削除',

        ];
        return $status_map[$this->status];
    }

    public function getUserGenderAttribute()
    {
        $gender_map = [
            'male' => '男',
            'female' => '女',
            'other' => 'その他',
        ];
        if ($this->sex)
            return $gender_map[$this->sex];
        else
            return $this->sex;
    }

    public function getUserAgeAttribute()
    {
        return \Carbon\Carbon::parse($this->date_of_birth)->age;
    }

    public function prefecture()
    {
        return $this->hasOne('App\Models\Prefecture', 'prefectures_id', 'prefectures');
    }

    public function verification()
    {
        return $this->hasOne(Verification::class, 'verifications_id', 'verification_id');
    }

    public function charge()
    {
        return $this->hasmany(ChargeHistory::class, 'user_id', 'user_id');
    }

    public function latest_charge()
    {
        return $this->charge()->latest('purchase_date');
    }

    public function settings()
    {
        return $this->hasOne(UserSetting::class, 'id', 'user_setting_id')
            ->withDefault(function () {
                return new UserSetting();
            });
    }

    public function getChargeTotalAttribute()
    {
        if (count($this->payment)) {
            $total = 0;
            foreach ($this->payment as $pm) {
                if ($pm->status == 'success')
                    $total += $pm->charge_amount;
            }
            if ($total) return number_format($total);
        } else {
            return '0';
        }
    }

    public function getChargeExpiredAttribute()
    {
        if (count($this->payment)) {
            $total = 0;
            foreach ($this->payment as $pm) {
                if ($pm->status == 'revocation')
                    $total += $pm->charge_amount;
            }
            return number_format($total);
        } else {
            return '0';
        }
    }

    public function getChargeBalanceAttribute()
    {
        if (count($this->payment)) {
            $last_balance = intval($this->payment->last()->balance_amount);
            return number_format($last_balance);
        } else {
            return '0';
        }
    }

    //bypass larastan error due to findOrFail function's phpdoc return Model, not User class
    public function scopeFindFail($query, $id)
    {
        return $query->findOrFail($id);
    }

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

}
