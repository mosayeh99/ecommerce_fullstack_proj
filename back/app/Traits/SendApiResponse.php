<?php

namespace App\Traits;

use Illuminate\Http\JsonResponse;

trait SendApiResponse
{
    public function apiResponse($data, $msg, $success = true, $status = 200): JsonResponse
    {
        return response()->json([
            'data' => $data,
            'message' => $msg,
            'success' => $success
        ], $status);
    }
}
