<?php

use Illuminate\Support\Facades\Route;

Route::prefix('dashboard/api')->group(function () {

});

Route::get('dashboard/{view}', function () {
    return view('app');
})->where('view', '(.*)');

Route::view('dashboard/{view}', 'app')->where('view', '(.*)');
