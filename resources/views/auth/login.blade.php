{{-- <x-guest-layout>
    <!-- Session Status -->
    <x-auth-session-status class="mb-4" :status="session('status')" />

    <form method="POST" action="{{ route('login') }}">
        @csrf

        <!-- Email Address -->
        <div>
            <x-input-label for="email" :value="__('Email')" />
            <x-text-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autofocus autocomplete="username" />
            <x-input-error :messages="$errors->get('email')" class="mt-2" />
        </div>

        <!-- Password -->
        <div class="mt-4">
            <x-input-label for="password" :value="__('Password')" />

            <x-text-input id="password" class="block mt-1 w-full"
                            type="password"
                            name="password"
                            required autocomplete="current-password" />

            <x-input-error :messages="$errors->get('password')" class="mt-2" />
        </div>

        <!-- Remember Me -->
        <div class="block mt-4">
            <label for="remember_me" class="inline-flex items-center">
                <input id="remember_me" type="checkbox" class="rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800" name="remember">
                <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">{{ __('Remember me') }}</span>
            </label>
        </div>

        <div class="flex items-center justify-end mt-4">
            @if (Route::has('password.request'))
                <a class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800" href="{{ route('password.request') }}">
                    {{ __('Forgot your password?') }}
                </a>
            @endif

            <x-primary-button class="ml-3">
                {{ __('Log in') }}
            </x-primary-button>
        </div>
    </form>
</x-guest-layout> --}}
{{-- <!DOCTYPE html>
<html lang="eng">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by   -->

<head>
    <!-- Standard Meta -->
    <meta charset="utf-8" />
    <meta name="keywords" content="make money online, portfolio management stock, forex, cryptocurrency" />
    <meta name="author" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#FCB42D" />
    <!-- Site Properties -->
    <title>Login - Exquisitecryptoventures</title>
    <!-- critical preload -->
    <link rel="preload" href="/js/vendors/uikit.min.js" as="script" />
    <link rel="preload" href="/css/vendors/uikit.min.css" as="style" />
    <link rel="preload" href="/css/style.css" as="style" />
    <!-- icon preload -->
    <link rel="preload" href="fonts/fa-brands-400.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="fonts/fa-solid-900.woff2" as="font" type="font/woff2" crossorigin />
    <!-- font preload -->
    <link rel="preload" href="fonts/archivo-v9-latin-regular.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="fonts/archivo-v9-latin-300.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="fonts/archivo-v9-latin-700.woff2" as="font" type="font/woff2" crossorigin />
    <!-- Favicon and apple icon -->
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    <link rel="apple-touch-icon-precomposed" href="apple-touch-icon.html" />
    <!-- css -->
    <link rel="stylesheet" href="/css/vendors/uikit.min.css" />
    <link rel="stylesheet" href="/css/style.css" />
</head>

<body>
    <!-- preloader begin -->
    <div class="in-loader">
        <div></div>
        <div></div>
        <div></div>
    </div>
    <!-- preloader end -->
    <main>

        <!-- section content begin -->
        <div class="uk-section  uk-padding-remove-vertical">
            <div class="uk-container uk-container-expand">
                <div class="uk-grid" data-uk-height-viewport="expand: true">
                    <div class="uk-width-3-5@m uk-background-cover uk-background-center-right uk-visible@m uk-box-shadow-xlarge"
                        style="background-image: url(img/in-signin-image.jpg)"></div>
                    <div class="uk-width-expand@m uk-flex uk-flex-middle">
                        <div class="uk-grid uk-flex-center">
                            <div class="uk-width-3-5@m">
                                <div class="uk-text-center in-padding-horizontal@s">

                                    <!-- logo begin -->
                                    <a class="uk-logo" href="index.html">
                                        <img src="images/vitalitycryptos.png" data-src="images/vitalitycryptos.png"
                                            alt="logo" width="146" height="39" data-uk-img />
                                    </a>
                                    <!-- logo end -->
                                    <p class="uk-text-lead uk-margin-small-top uk-margin-medium-bottom"></p>
                                    @foreach ($errors->all() as $err)
                                    <label for="edit page"></label>
                                    <p class="text-danger text-center">{{ $err }}</p>
                                @endforeach

                                    <!-- login form begin -->
                                    <form class="uk-grid uk-form" method="POST" action="{{ route('login') }}">@csrf
                                        <div class="uk-margin-small uk-width-1-1 uk-inline">
                                            <span class="uk-form-icon uk-form-icon-flip fas fa-envelope fa-sm"></span>
                                            <input class="uk-input uk-border-rounded" name="email" id="email"
                                                type="email" placeholder="Email Address" value="" required
                                                autofocus />
                                        </div>
                                        <div class="uk-margin-small uk-width-1-1 uk-inline">
                                            <span class="uk-form-icon uk-form-icon-flip fas fa-lock fa-sm"></span>
                                            <input class="uk-input uk-border-rounded" id="password" name="password"
                                                value="" type="password" placeholder="Password" required />
                                            <input name="status" type="hidden" value="active" />
                                        </div>
                                        <div class="uk-margin-small uk-width-auto uk-text-small">
                                            <label><input class="uk-checkbox uk-border-rounded" type="checkbox" name="remember" id="remember_me" />
                                                Remember me</label>
                                        </div>
                                        <div class="uk-margin-small uk-width-expand uk-text-small">
                                            <label class="uk-align-right uk-margin-small-left"><a class="uk-link-reset"
                                                    href=" {{ route( 'password.request')}}">Forgot password?</a></label>
                                        </div>
                                        <div class="uk-margin-small uk-width-1-1">
                                            <button
                                                class="uk-button uk-width-1-1 uk-button-primary uk-border-rounded uk-float-left">
                                                Login
                                            </button>
                                        </div>
                                    </form>
                                    <!-- login form end -->
                                    <p style="display: none" class="uk-heading-line">
                                        <span>Or login with</span>
                                    </p>
                                    <div style="display: none" class="uk-margin-medium-bottom">
                                        <a class="uk-button uk-button-small uk-border-rounded in-brand-google"
                                            href="#"><i
                                                class="fab fa-google uk-margin-small-right"></i>Google</a>
                                        <a class="uk-button uk-button-small uk-border-rounded in-brand-facebook"
                                            href="#"><i
                                                class="fab fa-facebook-f uk-margin-small-right"></i>Facebook</a>
                                    </div>
                                    <span class="uk-text-small">Don't have an account?
                                        <a class="uk-button uk-button-text" href="{{route('register')}}">Create
                                            Account</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- section content end -->
    </main>
    <!-- javascript -->
    <script src="/js/vendors/uikit.min.js"></script>
    <script src="/js/vendors/utilities.min.js"></script>
    <script src="/js/config-theme.js"></script>
</body>


</html> --}}

<!DOCTYPE html>
<html lang="en" class="dark">


<!-- Mirrored from supertrixfx.com/user/login.php by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 06 Mar 2023 10:06:03 GMT -->
<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->

<head>
    <!-- Meta tags  -->
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />

    <title>Sky Stream Exchange </title>
    <link rel="icon" type="image/png" href="logobroker.png" />

    <!-- CSS Assets -->
    <link rel="stylesheet" href="/user/css/app.css" />

    <!-- Javascript Assets -->
    <script src="/user/js/app.js" defer></script>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com/" />
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap"
        rel="stylesheet" />

    <link rel="stylesheet" href="../../cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        integrity="sha512-c42qTSw/wPZ3/5LBzD+Bw5f7bSF2oxou6wEb+I/lqeaKV5FDIfMvvRp772y4jcJLKuGUOpbJMdg/BTl50fJYAw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="../../cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.1.9/sweetalert2.min.css"
        integrity="sha512-cyIcYOviYhF0bHIhzXWJQ/7xnaBuIIOecYoPZBgJHQKFPo+TOBA+BY1EnTpmM8yKDU4ZdI3UGccNGCEUdfbBqw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="../../cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.1.9/sweetalert2.all.min.js"
        integrity="sha512-IZ95TbsPTDl3eT5GwqTJH/14xZ2feLEGJRbII6bRKtE/HC6x3N4cHye7yyikadgAsuiddCY2+6gMntpVHL1gHw=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>

<body x-data class="is-header-blur" x-bind="$store.global.documentBody">




    <!-- App preloader-->
    <div class="app-preloader fixed z-50 grid h-full w-full place-content-center bg-slate-50 dark:bg-navy-900">
        <div class="app-preloader-inner relative inline-block h-48 w-48"></div>
    </div>

    <!-- Page Wrapper -->
    <div id="root" class="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900" x-cloak>
        <div class="fixed top-0 hidden p-6 lg:block lg:px-12">
            <a href="#" class="flex items-center space-x-2">
                <img src="logobroker.png" alt="logo" width='30%;' />
                <p class="text-xl font-semibold  text-slate-700 dark:text-navy-100">

                </p>
            </a>
        </div>
        <div class="hidden w-full place-items-center lg:grid">
            <div class="w-full max-w-lg p-6">
                <img class="w-full" x-show="!$store.global.isDarkModeEnabled"
                    src="/user/images/illustrations/dashboard-check.svg" alt="image" />
                <img class="w-full" x-show="$store.global.isDarkModeEnabled"
                    src="/user/images/illustrations/dashboard-check-dark.svg" alt="image" />
            </div>
        </div>
        <main class="flex w-full flex-col items-center bg-white dark:bg-navy-700 lg:max-w-md">
            <div class="flex w-full max-w-sm grow flex-col justify-center p-5">
                <div class="text-center">
                    <img class="mx-auto h-16 w-16 lg:hidden" src="logobroker.png" alt="logo" />
                    <div class="mt-4">
                        <h2 class="text-2xl font-semibold text-slate-600 dark:text-navy-100">
                            Welcome Back
                        </h2>
                        <p class="text-slate-400 dark:text-navy-300">
                            Please sign in to continue
                        </p>
                    </div>
                    <div>
                        @foreach ($errors->all() as $err)
                            <label for="edit page"></label>
                            <p class="text-danger text-center">{{ $err }}</p>
                        @endforeach
                    </div>
                </div>
                <div class="mt-16">
                    <form action="{{ route('login') }}" method="post">@csrf
                        <label class="block">
                            <span>Email:</span>
                            <span class="relative mt-1.5 flex">
                                <input
                                    class="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                                    placeholder="Enter Username" id="email" type="text" name="email" required />
                                <span
                                    class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5 transition-colors duration-200" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>
                            </span>
                        </label>
                        <label class="mt-4 block">
                            <span>Password:</span>
                            <span class="relative mt-1.5 flex">
                                <input
                                    class="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                                    placeholder="Enter Password" id="password" type="password" name="password" required />
                                <span
                                    class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5 transition-colors duration-200" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </span>
                            </span>
                        </label>
                        <div class="mt-4 flex items-center justify-between space-x-2">
                            <label class="inline-flex items-center space-x-2">
                                <input
                                    class="form-checkbox is-outline h-5 w-5 rounded border-slate-400/70 bg-slate-100 before:bg-primary checked:border-primary hover:border-primary focus:border-primary dark:border-navy-500 dark:bg-navy-900 dark:before:bg-accent dark:checked:border-accent dark:hover:border-accent dark:focus:border-accent"
                                    type="checkbox" name="remember" id="remember_me"/>
                                <span class="line-clamp-1">Remember me</span>
                            </label>
                            <a href=" {{ route( 'password.request')}}"
                                class="text-xs text-slate-400 transition-colors line-clamp-1 hover:text-slate-800 focus:text-slate-800 dark:text-navy-300 dark:hover:text-navy-100 dark:focus:text-navy-100">Forgot
                                Password?</a>
                        </div>
                        <button
                            class="btn mt-10 h-10 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                            type="submit" name="sub-login">
                            Log In
                        </button>
                    </form>
                    <div class="mt-4 text-center text-xs+">
                        <p class="line-clamp-1">
                            <span>Dont have Account?</span>

                            <a class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
                                href="{{ route ('register')}}">Create account</a>
                        </p>
                    </div>

                </div>
            </div>

        </main>
    </div>

    <!--
        This is a place for Alpine.js Teleport feature
        @see https://alpinejs.dev/directives/teleport
      -->
    <div id="x-teleport-target"></div>
    <script>
        window.addEventListener("DOMContentLoaded", () => Alpine.start());
    </script>
</body>

<!-- Mirrored from supertrixfx.com/user/login.php by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 06 Mar 2023 10:06:34 GMT -->

</html>
