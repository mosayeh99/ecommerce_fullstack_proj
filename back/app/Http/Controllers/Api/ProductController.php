<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Traits\SendApiResponse;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    use SendApiResponse;

    public function index()
    {
        $products = Product::all();
        return $this->apiResponse($products, 'Products Successfully');
    }

    public function store(Request $request): JsonResponse
    {
        $product = Product::create([
            'name' => $request->name,
        ]);

        return $this->apiResponse($product, 'Product Added Successfully');
    }
}
