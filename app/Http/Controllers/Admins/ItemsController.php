<?php

namespace App\Http\Controllers\Admins;

use App\Http\Controllers\Controller;
use App\Models\Item;
use App\Traits\UploadPhoto;
use Illuminate\Http\Request;

class ItemsController extends Controller
{

    use UploadPhoto;

    public function addItem(Request $request, $id)
    {

        // import from trait(UploadPhoto)
        $fileName = $this->uploadPhoto($request->get('photo'), 'images/items');
        $items = Item::create([
            'name' => $request->get('name'),
            'description' => $request->get('description'),
            'status' => $request->get('status'),
            'price' => $request->get('price'),
            'date' => now(),
            'approve' => 1,
            'photoUrl' => $fileName,
            'admin_id' => $id
        ]);

        return response()->json(compact('items'));
    }
}
