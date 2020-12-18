<?php

namespace App\Http\Controllers\Admins;

use App\Http\Controllers\Controller;
use App\Models\Item;
use App\Traits\UploadPhoto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ItemsController extends Controller
{

    use UploadPhoto;

    public function addItem(Request $request, $id)
    {

        $rules = [
            'name' => 'required|string|min:4|max:25',
            'description' => 'required|string|min:4|max:100',
            'status' => 'required|numeric',
            'price' => 'required|string',
            'photo' => 'required|image|mimes:jpg,jpeg,gif,png|max:14048'
        ];

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return response()->json(['error at validation'], 400);
        }

        // import from trait(UploadPhoto)
        $fileName = $this->uploadPhoto($request->file('photo'), 'images/items');

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
