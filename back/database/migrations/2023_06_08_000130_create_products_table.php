<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->constrained();
            $table->string('slug');
            $table->json('name');
            $table->json('description');
            $table->double('price', 8, 2);
            $table->double('discount', 8, 2);
            $table->json('sizes');
            $table->json('color');
            $table->string('group_code')->nullable();
            $table->string('sleeve');
            $table->string('fit');
            $table->string('meta_title');
            $table->text('meta_keyword');
            $table->text('meta_description');
            $table->enum('is_featured', [0, 1])->default(0);
            $table->enum('status', [0, 1])->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
