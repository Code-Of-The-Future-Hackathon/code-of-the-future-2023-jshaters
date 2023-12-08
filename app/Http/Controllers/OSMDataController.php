<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use Inertia\Response;

class OSMDataController extends Controller
{
    public function index()
    {
        $response = Http::asForm()->post('http://overpass-api.de/api/interpreter', [
            'data' => '
 
        [out:json];
(
  way["leisure"="park"](22.3805257504, 41.2344859889, 28.5580814959, 44.2349230007);
  way["leisure"="garden"](22.3805257504, 41.2344859889, 28.5580814959, 44.2349230007);
  way["landuse"="grass"](22.3805257504, 41.2344859889, 28.5580814959, 44.2349230007);
  way["landuse"="meadow"](22.3805257504, 41.2344859889, 28.5580814959, 44.2349230007);
  way["landuse"="forest"](22.3805257504, 41.2344859889, 28.5580814959, 44.2349230007);
);
out geom;
>;
    '
        ]);

        $data = $response->json();
        $result = $data['elements'];



        return Inertia::render('GreenSpacesMap', [
            'greenSpaces' => $result,
        ]);
    }
}
