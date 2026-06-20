<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Tenant;

class TenantController extends Controller
{
    public function index()
    {
        return response()->json(
            Tenant::select('id', 'name')->get()
        );
    }
}