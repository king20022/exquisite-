<?php

namespace App\Http\Controllers;

use App\Models\Investment;
use App\Models\Payment;
use App\Models\User;
use App\Models\Withdrawal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class AdminController extends Controller
{


    public function add()

    {
        $payment = Payment::all();
        return view('Admin.addcoin', compact('payment'));
    }

    public function addd()
    {
        $investment = Investment::all();
        return view('Admin.addinvestment', compact('investment'));
    }




    public function show()
    {
        $user = User::orderby('id', 'desc')->get();
        return view('Admin.investors', compact('user'));
    }



    public function edit($id)
    {

        $user = User::findOrFail($id);
        return view('Admin.profile', compact('user'));
    }




    public function update(Request $request, $id)
    {

        $user = User::findOrFail($id);

        $validatedData = $request->validate([
            'profit' => 'required|string|max:255',
            'bonus' => 'required|string|max:255',
            'balance' => 'required|string|max:255' . $user->id,
        ]);

        $user->update($validatedData);

        return redirect()->back()->with('success', 'Investor details updated successfully.');
    }



    public function delete($user_id)
    {
        // $user = User::findOrFail($user_id); // Retrieve the user record from the database

        // if (!$user) {
        //     abort(404);
        // }
        // $user->delete(); // Delete the user record

        // // return redirect()->back()->with('success', 'Investor details deleted successfully.');

        // // return redirect()->route('Admin.show')->with('success', 'Investor has been deleted.'); // Redirect back to the user list page with a success message
        // return redirect()->back()->with('success', 'Investor details updated successfully.');

        // Retrieve the authenticated user
        $authenticatedUser = Auth::user();

        // Check if the authenticated user is an admin
        if (!$authenticatedUser || $authenticatedUser->role !== 'admin') {
            abort(403, 'Unauthorized action.'); // HTTP 403 Forbidden
        }

        // Retrieve the user record from the database
        $user = User::findOrFail($user_id);

        if (!$user) {
            abort(404, 'User not found.'); // HTTP 404 Not Found
        }

        // Prevent admin from deleting their own account
        if ($user->role === 'admin') {
            abort(403, 'Admins cannot be deleted.'); // HTTP 403 Forbidden
        }

        // Delete the user account
        $user->delete();

        // Redirect or return a response indicating successful deletion
        return redirect()->back()->with('success', 'User account deleted successfully.');
    }









    public function coin()
    {

        return view('Admin.coinform');
    }




    public function btc(Request $request)
    {

        $payment = new Payment;
        $payment->network = $request->input('network');
        $payment->name = $request->input('name');
        $payment->address = $request->input('address');
        $payment->save();;
        return redirect()->route('investor.add');
    }



    public function destroy($id)
    {

        // Delete the payment from the database.
        Payment::destroy($id);

        // Redirect the user back to the payments list page.
        // return view('Admin.addcoin');
        return redirect()->back()->with('success', 'Investor details deleted successfully.');
    }


    public function investment()
    {
        return view('Admin.investmentform');
    }




    public function updateinvestment(Request $request)
    {
        $investment = new Investment;
        $investment->plan = $request->plan;
        $investment->amount = $request->amount;
        $investment->profit = $request->profit;
        $investment->duration = $request->duration;
        $investment->save();


        return redirect()->route('investment.add')->with('success', 'Investment added successfully.');
    }




    public function Terminate($id)
    {

        // Delete the payment from the database.
        Investment::destroy($id);

        // Redirect the user back to the payments list page.
        // return view('Admin.addcoin');
        return redirect()->back()->with('success', 'Investment details deleted successfully.');
    }

    public function history()
    {


        // $payment = Payment::all();
        // return view('Admin.addcoin', compact('payment'));
        // $withdrawal = Withdrawal::all();
        $withdrawal = Withdrawal::with('user')->get();
        return view('Admin.history', compact('withdrawal'));
    }


    public function updatestatus(Request $request, $id)
    {
        $withdrawal = Withdrawal::find($id);
        $withdrawal->status = $request->input('status');
        $withdrawal->save();

        // return redirect()->back();
        return redirect()->route('admin.payment');
    }
}
