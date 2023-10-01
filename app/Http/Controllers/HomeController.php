<?php

namespace App\Http\Controllers;

use App\Models\Investment;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function create()
    {

        $investment = Investment::all();
        return view('welcome', compact('investment'));
        // return view('welcome');
    }

    public function show()
    {
        return view ('about');
    }

    public function showOne()
    {
        return view ('responsibility');
    }

    public function showTwo()
    {
        return view ('insights');
    }

    public function three()
    {

        return view ('alternative');
    }


    public function four()
    {

        return view ('real-asset');
    }

    public function five()
    {

        return view ('investment.realestate');
    }

    public function six()
    {

        return view ('investment.stocks');
    }

    public function seven()
    {

        return view ('investment.infrastructure');
    }

    public function eight()
    {

        return view ('investment.forextrading');
    }

    public function nine()
    {

        return view ('investment.cryptoasset');
    }


    public function ten()
    {

        return view ('investment.fixedincome');
    }

    public function eleven()
    {

        return view ('investment.multiasset');
    }

    public function twelve()
    {

        return view ('investment.renewablepower');
    }

    public function thirteen()
    {

        return view ('investment.agriculture');
    }

    public function fourteen()
    {

        return view ('investment.nfp');
    }


    // planning
    public function ne()
    {

        return view ('planning.financial');
    }


    public function wo()
    {

        return view ('planning.retirement');
    }


    public function hree()
    {

        return view ('planning.private');
    }


    public function our()
    {

        return view ('planning.estate');
    }

    public function ive()
    {

        return view ('planning.longterm');
    }


    public function ix()
    {

        return view ('planning.business');
    }


    public function even()
    {

        return view ('planning.oilgas');
    }



}
