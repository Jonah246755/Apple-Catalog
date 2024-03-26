<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Hash;

use App\Calculator;
use App\dog;
use App\animals;

class Pagecontroller extends Controller
{
    function change(Request $request)
    {
        $dana = new dog($request->ras ?? '', 'Hond');
        $dana->setName($request->dogname ?? '');
        
        return view('welcome', [
            
            'dana' => $dana,
        ]);
    }

    function addAcc(Request $request)
    {
        \App\Models\loginModel::create([
    
            'Name' =>  $request->Naam,   
            'Password' => Hash::make($request->Password),
            //hierin wordt de doorgestuurde data in de database zelf gezet onder de goede catagorieen
        ]);

        return redirect('/');
    }

    function login(Request $request)
    {
        $person = \App\Models\loginModel::where('Name' , $request->Naam)->first();

        if(Hash::check($request->Password, $person->Password))
        {
            return view('main', [                
                    'Naam' => $person->Name,
                    'Password' => $request->Password, 
                    'fout' => "false",                
                ]
            );
        }
            return view('welcome', [
                'fout' => "true",
            ]);
    
    
        
    }

    public function performCalculation(Request $request)
    {
        $calculator = new Calculator();

        $a = $request->input('a');
        $b = $request->input('b');

        $sum = $calculator->add($a, $b);
        $difference = $calculator->subtract($a, $b);
        $product = $calculator->multiply($a, $b);
        $quotient = $calculator->divide($a, $b);

        return view('calculator', compact('sum', 'difference', 'product', 'quotient'));
    }
}
