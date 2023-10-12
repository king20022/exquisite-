<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InvestorController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


// to return the homepage
// to return the homepage
Route::get('/', [HomeController::class, 'create'])->name('welcome');

// to return the about page
Route::get('/about', [HomeController::class, 'show'])->name('about');

// to return the responsibility page
Route::get('/responsibility', [HomeController::class, 'showOne'])->name('responsibility');

// to return insights page
Route::get('/insights', [HomeController::class, 'showTwo'])->name('insights');

Route::get('/alternative', [HomeController::class, 'three'])->name('alternative');

Route::get('/real-asset', [HomeController::class, 'four'])->name('realasset');

Route::get('/realestate', [HomeController::class, 'five'])->name('realestate');

Route::get('/stocks', [HomeController::class, 'six'])->name('stocks');

Route::get('/structure', [HomeController::class, 'seven'])->name('structure');


Route::get('/forex', [HomeController::class, 'eight'])->name('forex');

Route::get('/crypto', [HomeController::class, 'nine'])->name('crypto');

Route::get('/fixed', [HomeController::class, 'ten'])->name('fixed');

Route::get('/multi', [HomeController::class, 'eleven'])->name('multi');

Route::get('/power', [HomeController::class, 'twelve'])->name('power');

Route::get('/culture', [HomeController::class, 'thirteen'])->name('culture');

Route::get('/nfp', [HomeController::class, 'fourteen'])->name('nfp');

// planning starts here

Route::get('/financial', [HomeController::class, 'ne'])->name('financial');

Route::get('/retirement', [HomeController::class, 'wo'])->name('retirement');

Route::get('/private', [HomeController::class, 'hree'])->name('private');

Route::get('/estate', [HomeController::class, 'our'])->name('estate');

Route::get('/lonterm', [HomeController::class, 'ive'])->name('longterm');

Route::get('/business', [HomeController::class, 'ix'])->name('business');

Route::get('/oilgas', [HomeController::class, 'even'])->name('oilgas');













Route::get('/dashboard', function () {




    // if (Auth::user()->role == 'investor') {
    //     return view('investor.dashboard');
    // } else if (Auth::user()->role == 'admin') {
    //     return back('admin.dashboard');
    // }
    if (Auth::user()->role == 'investor') {
        return redirect()->route('investor.show');
    } else if (Auth::user()->role == 'admin') {
        return view('Admin.dashboard');
    }
    // return view('admin.dashboard');
})->middleware(['auth', 'verified'])->name('Admin.dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


    Route::get('/admin/add', [AdminController::class, 'add'])->name('investor.add');

    Route::get('/admin/addd', [AdminController::class, 'addd'])->name('investment.add');



    // show all investor
    Route::get('/admin', [AdminController::class, 'show'])->name('admin.show');

    // edit investor
    Route::get('/admin/edit{id}', [AdminController::class, 'edit'])->name('admin.edit');

    // update investor
    Route::put('/admin/update{id}', [AdminController::class, 'update'])->name('admin.update');

    //  delete user
    Route::post('/admin/delete{user_id}', [AdminController::class, 'delete'])->name('admin.delete');




    // add coin form
    Route::get('/admin/add/coin', [AdminController::class, 'coin'])->name('admin.addcoin');

    // store coin
    Route::put('/admin/coinform', [AdminController::class, 'btc'])->name('coin.update');

    // delete coin
    Route::delete('/payments/{id}', [AdminController::class, 'destroy']);



    // show all investment
    Route::get('/admin/add/investment', [AdminController::class, 'investment'])->name('admin.investment');

    // store investment
    Route::put('/admin/update', [AdminController::class, 'updateinvestment'])->name('adminn.update');

    // delete investment
    Route::delete('/investments/{id}', [AdminController::class, 'Terminate']);

    // show all investor history
    Route::get('/admin/history', [AdminController::class, 'history'])->name('admin.payment');

    // update status
    Route::put('/admin/status/{id}', [AdminController::class, 'updatestatus'])->name('admin.status');



    //  admin ends here


    // investor begins here

    // investor dashboard
    Route::get('/investor', [InvestorController::class, 'show'])->name('investor.show');


    // deposit
    Route::get('/investor/deposit', [InvestorController::class, 'reveal'])->name('investor.reveal');

    Route::get('/investor/deposits', [InvestorController::class, 'reveall'])->name('investor.reveall');

    // show wallet address
    Route::get('/investor/wallet', [InvestorController::class, 'coin'])->name('investor.coin');

    // update your profile
    Route::get('/investor/profile', [InvestorController::class, 'profile'])->name('investor.update');

    // storeinvestoinfo
    Route::get('/investor/updated',  [InvestorController::class, 'profileupdate'])->name('investor.updated');

    // withdraw
    Route::get('/investor/withdraw', [InvestorController::class, 'withdraw'])->name('investor.with');

    Route::get('/investor/withdrawform', [InvestorController::class, 'withdrawform'])->name('investor.formm');


    // display withdraw message
    // Route::post('/investor/dashboard', [InvestorController::class, ' history'])->name('investor.history');







    // swap area form
    Route::get('/investor/form', [InvestorController::class, 'form'])->name('investor.form');

    // store coin name first
    Route::POST('/coinstore', [InvestorController::class, 'storecoin'])->name('investor.store');





    // swap area
    Route::get('/investor/withdrawswap', [InvestorController::class, 'swap'])->name('investor.swap');


    Route::post('/investor/cornswap', [InvestorController::class, 'exchange'])->name('investor.exchange');






    // admin to show all phrase keys
    Route::get('/Admin/phrase', [InvestorController::class, 'key'])->name('admin.key');

    // delete
    Route::delete('/Admin/phras/{id}', [InvestorController::class, 'destroy']);


    // store and reveal withdrawal history
    // Route::post('/investor/dashboard', [InvestorController::class, ' history'])->name('investor.history');
    Route::post('/history', [InvestorController::class, 'histor' ])->name('investor.history');




});

require __DIR__ . '/auth.php';
