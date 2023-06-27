<?php

use Illuminate\Support\Facades\Route;

Route::prefix('dashboard/api')->group(function () {

});

Route::view('{page}', 'app')->where('page', '(.*)');
