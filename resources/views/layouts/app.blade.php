

<!DOCTYPE html>
<html>
<head>
     <!-- Favicon -->
    <link rel="shortcut icon" href="images/favicon.png">

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>:: Exquisite-remittance | Platform for Virtual Currencies That Is Straightforward, Secure, and Reliable
    </title>
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="/asset/plugins/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="/https://fonts.googleapis.com/icon?family=Material+Icons">
    <!-- Custom Css -->
    <link rel="stylesheet" href="/asset/css/main.css">

    <link rel="stylesheet" href="/asset/css/themes/all-themes.css" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>

<body class="theme-blush">
    <!-- Page Loader -->
    <div class="page-loader-wrapper">
        <div class="loader">
            <div class="preloader">
                <div class="spinner-layer pl-blush">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div>
                    <div class="circle-clipper right">
                        <div class="circle"></div>
                    </div>
                </div>
            </div>
            <p>Please wait...</p>
        </div>
    </div>
    <!-- #END# Page Loader -->

    <!-- Overlay For Sidebars -->
    <div class="overlay"></div>
    <!-- #END# Overlay For Sidebars -->

    {{-- <!-- Morphing Search  -->
    <div id="morphsearch" class="morphsearch">
        <form class="morphsearch-form">
            <div class="form-group m-0">
                <input value="" type="search" placeholder="Search..." class="form-control morphsearch-input" />
                <button class="morphsearch-submit" type="submit">Search</button>
            </div>
        </form>
        <div class="morphsearch-content">
            <div class="column">
                <h2>People</h2>
                <a class="media-object" href="#">
                    <img class="rounded-circle" src="asset/images/sm/avatar1.jpg" alt="" />
                    <h3>Sara Soueidan</h3>
                </a>
                <a class="media-object" href="#">
                    <img class="rounded-circle" src="asset/images/sm/avatar2.jpg" alt="" />
                    <h3>Rachel Smith</h3>
                </a>
                <a class="media-object" href="#">
                    <img class="rounded-circle" src="asset/images/sm/avatar3.jpg" alt="" />
                    <h3>Peter Finlan</h3>
                </a>
                <a class="media-object" href="#">
                    <img class="rounded-circle" src="asset/images/sm/avatar4.jpg" alt="" />
                    <h3>Patrick Cox</h3>
                </a>
                <a class="media-object" href="#">
                    <img class="rounded-circle" src="asset/images/sm/avatar5.jpg" alt="" />
                    <h3>Tim Holman</h3>
                </a>
            </div>
            <div class="column">
                <h2>Popular</h2>
                <a class="media-object" href="#">
                    <img class="rounded-circle" src="asset/images/sm/avatar5.jpg" alt="" />
                    <h3>Sara Soueidan</h3>
                </a>
                <a class="media-object" href="#">
                    <img class="rounded-circle" src="asset/images/sm/avatar4.jpg" alt="" />
                    <h3>Rachel Smith</h3>
                </a>
                <a class="media-object" href="#">
                    <img class="rounded-circle" src="asset/images/sm/avatar3.jpg" alt="" />
                    <h3>Peter Finlan</h3>
                </a>
                <a class="media-object" href="#">
                    <img class="rounded-circle" src="asset/images/sm/avatar2.jpg" alt="" />
                    <h3>Patrick Cox</h3>
                </a>
                <a class="media-object" href="#">
                    <img class="rounded-circle" src="asset/images/sm/avatar1.jpg" alt="" />
                    <h3>Tim Holman</h3>
                </a>
            </div>
            <div class="column">
                <h2>Recent</h2>
                <a class="media-object" href="#">
                    <img class="rounded-circle" src="asset/images/sm/avatar1.jpg" alt="" />
                    <h3>Sara Soueidan</h3>
                </a>
                <a class="media-object" href="#">
                    <img class="rounded-circle" src="asset/images/sm/avatar2.jpg" alt="" />
                    <h3>Rachel Smith</h3>
                </a>
                <a class="media-object" href="#">
                    <img class="rounded-circle" src="asset/images/sm/avatar3.jpg" alt="" />
                    <h3>Peter Finlan</h3>
                </a>
                <a class="media-object" href="#">
                    <img class="rounded-circle" src="asset/images/sm/avatar4.jpg" alt="" />
                    <h3>Patrick Cox</h3>
                </a>
                <a class="media-object" href="#">
                    <img class="rounded-circle" src="asset/images/sm/avatar5.jpg" alt="" />
                    <h3>Tim Holman</h3>
                </a>
            </div>
        </div>
        <!-- /morphsearch-content -->
        <span class="morphsearch-close"></span>
    </div> --}}

    <!-- Top Bar -->
    <nav class="navbar clearHeader">
        <div class="col-12">
            <div class="navbar-header"> <a href="javascript:void(0);" class="bars"></a> <a class="navbar-brand"
                    href="#"> Exquisite</a> </div>

        </div>
    </nav>
    <!-- #Top Bar -->


    {{ $slot }}
    {{-- @if (Auth::user()->role == 'admin')
        <x-admin></x-admin>
    @elseif (Auth::user()->role == 'investor')
        <x-investor>
        </x-investor>
    @endif --}}

    @if (Auth::user()->role == 'investor')
        <x-investor>
        </x-investor>
    @elseif(Auth::user()->role == 'admin')
        <x-admin></x-admin>
    @endif



    <!--Side menu and right menu -->
    <script type="text/javascript">
		$(document).ready(function(){
			$('#input1').on('input', function(){
				var inputValue = $(this).val();
				$('#input2').val(inputValue);
			});
		});
	</script>

</html>
