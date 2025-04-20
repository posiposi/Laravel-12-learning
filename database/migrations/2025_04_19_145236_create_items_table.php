<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('items', function (Blueprint $table) {
            $table->ulid('item_id')->primary()->comment('商品ID');
            $table->string('item_name')->comment('商品名');
            $table->boolean('stock')->default(true)->comment('在庫有無 true:在庫あり, false:在庫なし');
            $table->string('description')->nullable()->comment('商品説明');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('items');
    }
};
