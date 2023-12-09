<?php

namespace App\Http\Controllers;

use App\Models\GreenSpace;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use Inertia\Response;

class Cluster
{
    public $points = [];
    public function addPoint($point)
    {
        $this->points[] = $point;
    }
}
class OSMDataController extends Controller
{

    public function index()
    {


        $data = GreenSpace::all();





        return Inertia::render('GreenSpacesMap', [
            'greenSpaces' => $data,
        ]);
    }
}