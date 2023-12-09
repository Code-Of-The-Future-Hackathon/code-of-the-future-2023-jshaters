<?php

namespace App\Http\Controllers;

use App\Models\GreenSpace;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
    public function sort(Request $request)
    {

        $lat = $request->lat;
        $lon = $request->lon;

        $data = DB::table('green_spaces')
            ->select('id', 'lat', 'lon', 'leisure')
            ->selectRaw(
                '(6371 * acos(cos(radians(?)) * cos(radians(lat)) * cos(radians(lon) - radians(?)) + sin(radians(?)) * sin(radians(lat)))) AS distance',
                [$lat, $lon, $lat]
            )
            ->orderBy('distance', 'ASC')
            ->take(25)
            ->get();

        return $data;


        /*   return Inertia::render('GreenSpacesMap', [
              'greenSpaces' => $data,
          ]); */
    }

}