<!DOCTYPE html>
<html>


<meta http-equiv="content-type" content="text/html;charset=UTF-8" />

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Earnestmarketventures | Platform for Virtual Currencies That Is Straightforward, Secure, and Reliable
    </title>
    <meta
        content="Earnestmarketventures is a world-renowned manager of systematic investments. Our centralized research focuses on the creation of cutting-edge quantitative methods for identifying market opportunities and applies them in a structured way that produces effective exposures."
        name="description" />


    <link href="/public/css/wellness-cms.webflow.5eb1ff288.css" rel="stylesheet" type="text/css" />
    <link href="/public/css/bootstrap.css" rel="stylesheet" type="text/css" />
    <link href="/public/css/extra.css" rel="stylesheet" type="text/css" />
    <link href="/public/css/custom.css" rel="stylesheet" type="text/css" />
    <link rel="/stylesheet" href="../cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <link rel="/stylesheet" href="public/css/added/slider.css" />
    {{-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com?/bootstrap/4.5.2/css/bootstrap.min.css"> --}}


    <link rel="stylesheet" href="/public/css/added/sliderflex/slider.css" />

    <script src="/public/js/webfont.js" type="text/javascript"></script>
    <script type="text/javascript">
        WebFont.load({
            google: {
                families: ["Oswald:200,300,400,500,600,700",
                    "Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic",
                    "Lora:regular,italic,700,700italic", "Noto Serif:regular,italic"
                ]
            }
        });
    </script>
    <!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script><![endif]-->
    <script type="text/javascript">
        ! function(o, c) {
            var n = c.documentElement,
                t = " w-mod-";
            n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n
                .className += t + "touch")
        }(window, document);
    </script>
    <link href="images/index.html" rel="shortcut icon" type="image/x-icon" />
    <link href="images/index.html" rel="apple-touch-icon" />
    <style>
        .price-tab {
            display: none
        }




        .happy{
            position: relative;
            min-height: 100vh;
            margin: 0;
            padding: 0;
        }

        .whatsapp-button {
            position: fixed;
            bottom: 20px;
            left: 20px;
            z-index: 999;
        }

        .whatsapp-button img {
            width: 60px;
            /* Set the width of your WhatsApp icon */
            height: auto;
            border-radius: 50%;
            /* Optional: Add border-radius for a circular button */
        }

        /* Media query for responsiveness */
        @media (max-width: 768px) {
            .whatsapp-button {
                bottom: 10px;
                left: 10px;
            }

            .whatsapp-button img {
                width: 50px;
            }
        }
    </style>
</head>

<body>
    <nav class="navbar-default">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="{{ route('welcome') }}"><img src="images/logo.jpg"
                        width="200px" alt="" /></a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="{{ route('about') }}" class="navmenu">About</a></li>
                    <li><a href="{{ route('responsibility') }}" class="navmenu">Responsibility</a></li>
                    <li class="dropdown navmenu">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                            aria-haspopup="true" aria-expanded="false">Investment Products<span
                                class="caret"></span></a>
                        <ul class="dropdown-menu dropdown-lists">
                            <li><a href="{{ route('realestate') }}">Real Estate</a></li>
                            <li><a href="{{ route('stocks') }}">Stocks</a></li>
                            <li><a href="{{ route('structure') }}">Infrastructure</a></li>
                            <li><a href="{{ route('forex') }}">Forex trading</a></li>
                            <li><a href="{{ route('crypto') }}">Crypto asset</a></li>
                            <li><a href="{{ route('fixed') }}">Fixed income</a></li>
                            <li><a href="{{ route('multi') }}">Multi Assets</a></li>
                            <li><a href="{{ route('power') }}">Renewable Power</a></li>
                            <li><a href="{{ route('culture') }}">Agriculture</a></li>
                            <li><a href="{{ route('nfp') }}">NFP</a></li>
                        </ul>
                    </li>
                    <li class="dropdown navmenu">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                            aria-haspopup="true" aria-expanded="false">Planning Services<span class="caret"></span></a>
                        <ul class="dropdown-menu dropdown-lists">
                            <li><a href="{{ route('financial') }}">Financial Planning</a></li>
                            <li><a href="{{ route('retirement') }}">Retirement Planning</a></li>
                            <li><a href="{{ route('private') }}">Private Wealth Management</a></li>
                            <li><a href="{{ route('estate') }}">Estate Planning</a></li>
                            <li><a href="{{ route('longterm') }}">Long Term Care</a></li>
                            <li><a href="{{ route('business') }}">Business Services</a></li>
                            <li><a href="{{ route('oilgas') }}">Oil & Gas</a></li>
                        </ul>
                    </li>
                    <li><a href="{{ route('insights') }}" class="navmenu">Insights</a></li>
                    <li><a href="{{ route('register') }}" class="logs">Register</a></li>
                    <li><a href="{{ route('login') }}" class="logs">Sign In</a></li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>

    {{ $slot }}
    <footer class="footer-section">
        <div class="content-wrapper w-container">
            <div class="footer-form">
                <div class="row row-responsive"
                    style=" display:flex; width:100%; margin-bottom:10px; border-bottom: 0px !important">
                    <div class="col-sm-9">
                        <h4 class="title" style="color:white"><a href="index.html" class=""><img
                                    src="images/Earnestcryptoventures.png" width="200px" alt="" /></a>
                        </h4>
                        <p style="color:white">Earnest Market Ventures is more than just finance, it’s hope for an
                            average entrepreneur to stand, evolve.
                        </p>
                    </div>
                    <div class="col-sm-3">
                    </div>
                </div>

                <div class="row row-responsive2 style=" display:flex; width:100%;margin-bottom:10px; border-bottom: 0px
                    !important">
                    <div class="col-sm-5">
                        <h4 class="title" style="color:white">Useful Links</h4>
                        <div style="display: flex">
                            <div class="col-md-6">
                                <ul style="color:white">
                                    <li><a href="{{ route('about') }}">About Us</a></li>
                                    <li><a href="{{ route('responsibility') }}">Corporate responsibility</a> </li>
                                    <li><a href="{{ route('financial') }}">Planning services</a></li>
                                    {{-- <li><a href="contact.html">Contact Us</a></li> --}}
                                    {{-- <li><a href="faq.html">FAQs</a></li> --}}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <h4 class="title" style="color:white">Main Services</h4>
                        <ul style="color:white">
                            <li><a href="{{ route('crypto') }}">Cryptocurrency</a></li>
                            <li><a href="{{ route('realestate') }}">Real Estate</a></li>
                            <li><a href="{{ route('stocks') }}">Stock</a></li>
                            <li><a href="{{ route('fixed') }}">Fixed Income</a></li>
                            <li><a href="{{ route('multi') }}">Multi Assets</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3">
                        <h4 class="title" style="color:white">Contact Us</h4>
                        <ul style="color:white">
                            <!--<li>+1 (803) 398-3209</li>-->
                            <li>support@earnestmarketventures.com</li>
                            <!--<li></li>-->
                        </ul>
                    </div>
                </div>

            </div>
        </div>
        </div>

    </footer>

    <div style="position:fixed;bottom:25%;left:2%;z-index:999999;" id="gtranslate_wrapper">
        <!-- GTranslate: https://gtranslate.io/ -->
        <select onchange="doGTranslate(this);" class="notranslate" id="gtranslate_selector"
            aria-label="Website Language Selector">
            <option value="">Select Language</option>
            <option value="en|af">Afrikaans</option>
            <option value="en|sq">Albanian</option>
            <option value="en|am">Amharic</option>
            <option value="en|ar">Arabic</option>
            <option value="en|hy">Armenian</option>
            <option value="en|az">Azerbaijani</option>
            <option value="en|eu">Basque</option>
            <option value="en|be">Belarusian</option>
            <option value="en|bn">Bengali</option>
            <option value="en|bs">Bosnian</option>
            <option value="en|bg">Bulgarian</option>
            <option value="en|ca">Catalan</option>
            <option value="en|ceb">Cebuano</option>
            <option value="en|ny">Chichewa</option>
            <option value="en|zh-CN">Chinese (Simplified)</option>
            <option value="en|zh-TW">Chinese (Traditional)</option>
            <option value="en|co">Corsican</option>
            <option value="en|hr">Croatian</option>
            <option value="en|cs">Czech</option>
            <option value="en|da">Danish</option>
            <option value="en|nl">Dutch</option>
            <option value="en|en">English</option>
            <option value="en|eo">Esperanto</option>
            <option value="en|et">Estonian</option>
            <option value="en|tl">Filipino</option>
            <option value="en|fi">Finnish</option>
            <option value="en|fr">French</option>
            <option value="en|fy">Frisian</option>
            <option value="en|gl">Galician</option>
            <option value="en|ka">Georgian</option>
            <option value="en|de">German</option>
            <option value="en|el">Greek</option>
            <option value="en|gu">Gujarati</option>
            <option value="en|ht">Haitian Creole</option>
            <option value="en|ha">Hausa</option>
            <option value="en|haw">Hawaiian</option>
            <option value="en|iw">Hebrew</option>
            <option value="en|hi">Hindi</option>
            <option value="en|hmn">Hmong</option>
            <option value="en|hu">Hungarian</option>
            <option value="en|is">Icelandic</option>
            <option value="en|ig">Igbo</option>
            <option value="en|id">Indonesian</option>
            <option value="en|ga">Irish</option>
            <option value="en|it">Italian</option>
            <option value="en|ja">Japanese</option>
            <option value="en|jw">Javanese</option>
            <option value="en|kn">Kannada</option>
            <option value="en|kk">Kazakh</option>
            <option value="en|km">Khmer</option>
            <option value="en|ko">Korean</option>
            <option value="en|ku">Kurdish (Kurmanji)</option>
            <option value="en|ky">Kyrgyz</option>
            <option value="en|lo">Lao</option>
            <option value="en|la">Latin</option>
            <option value="en|lv">Latvian</option>
            <option value="en|lt">Lithuanian</option>
            <option value="en|lb">Luxembourgish</option>
            <option value="en|mk">Macedonian</option>
            <option value="en|mg">Malagasy</option>
            <option value="en|ms">Malay</option>
            <option value="en|ml">Malayalam</option>
            <option value="en|mt">Maltese</option>
            <option value="en|mi">Maori</option>
            <option value="en|mr">Marathi</option>
            <option value="en|mn">Mongolian</option>
            <option value="en|my">Myanmar (Burmese)</option>
            <option value="en|ne">Nepali</option>
            <option value="en|no">Norwegian</option>
            <option value="en|ps">Pashto</option>
            <option value="en|fa">Persian</option>
            <option value="en|pl">Polish</option>
            <option value="en|pt">Portuguese</option>
            <option value="en|pa">Punjabi</option>
            <option value="en|ro">Romanian</option>
            <option value="en|ru">Russian</option>
            <option value="en|sm">Samoan</option>
            <option value="en|gd">Scottish Gaelic</option>
            <option value="en|sr">Serbian</option>
            <option value="en|st">Sesotho</option>
            <option value="en|sn">Shona</option>
            <option value="en|sd">Sindhi</option>
            <option value="en|si">Sinhala</option>
            <option value="en|sk">Slovak</option>
            <option value="en|sl">Slovenian</option>
            <option value="en|so">Somali</option>
            <option value="en|es">Spanish</option>
            <option value="en|su">Sudanese</option>
            <option value="en|sw">Swahili</option>
            <option value="en|sv">Swedish</option>
            <option value="en|tg">Tajik</option>
            <option value="en|ta">Tamil</option>
            <option value="en|te">Telugu</option>
            <option value="en|th">Thai</option>
            <option value="en|tr">Turkish</option>
            <option value="en|uk">Ukrainian</option>
            <option value="en|ur">Urdu</option>
            <option value="en|uz">Uzbek</option>
            <option value="en|vi">Vietnamese</option>
            <option value="en|cy">Welsh</option>
            <option value="en|xh">Xhosa</option>
            <option value="en|yi">Yiddish</option>
            <option value="en|yo">Yoruba</option>
            <option value="en|zu">Zulu</option>
        </select>
        <style type="text/css">
            #goog-gt-tt {
                display: none !important;
            }

            .goog-te-banner-frame {
                display: none !important;
            }

            .goog-te-menu-value:hover {
                text-decoration: none !important;
            }

            .goog-text-highlight {
                background-color: transparent !important;
                box-shadow: none !important;
            }

            body {
                top: 0 !important;
            }

            #google_translate_element2 {
                display: none !important;
            }
        </style>

        <div id="google_translate_element2"></div>
        <script type="text/javascript">
            function googleTranslateElementInit2() {
                new google.translate.TranslateElement({
                    pageLanguage: 'en',
                    autoDisplay: false
                }, 'google_translate_element2');
            }
        </script>
        <script type="text/javascript" src="../translate.google.com/translate_a/element7876.js?cb=googleTranslateElementInit2">
        </script>


        <script type="text/javascript">
            function GTranslateGetCurrentLang() {
                var keyValue = document['cookie'].match('(^|;) ?googtrans=([^;]*)(;|$)');
                return keyValue ? keyValue[2].split('index.html')[2] : null;
            }

            function GTranslateFireEvent(element, event) {
                try {
                    if (document.createEventObject) {
                        var evt = document.createEventObject();
                        element.fireEvent('on' + event, evt)
                    } else {
                        var evt = document.createEvent('HTMLEvents');
                        evt.initEvent(event, true, true);
                        element.dispatchEvent(evt)
                    }
                } catch (e) {}
            }

            function doGTranslate(lang_pair) {
                if (lang_pair.value) lang_pair = lang_pair.value;
                if (lang_pair == '') return;
                var lang = lang_pair.split('|')[1];
                if (GTranslateGetCurrentLang() == null && lang == lang_pair.split('|')[0]) return;
                var teCombo;
                var sel = document.getElementsByTagName('select');
                for (var i = 0; i < sel.length; i++)
                    if (/goog-te-combo/.test(sel[i].className)) {
                        teCombo = sel[i];
                        break;
                    } if (document.getElementById('google_translate_element2') == null || document.getElementById(
                        'google_translate_element2').innerHTML.length == 0 || teCombo.length == 0 || teCombo.innerHTML.length ==
                    0) {
                    setTimeout(function() {
                        doGTranslate(lang_pair)
                    }, 500)
                } else {
                    teCombo.value = lang;
                    GTranslateFireEvent(teCombo, 'change');
                    GTranslateFireEvent(teCombo, 'change')
                }
            }
        </script>
    </div>
    {{--  --}}
    {{-- <script>
        AOS.init({
            duration: 800,
        });
    </script>
    <script>
        $(document).ready(function() {
            var lang = $("html").attr("lang");

            if ($("#homeFeed").length > 0) {
                setInterval(function() {
                    $.ajax({
                        type: "POST",
                        url: "../www.tmgm.com/inc/home-live-updates.php",
                        data: {
                            lang: lang
                        },
                        success: function(result) {
                            var result = $.parseJSON(result);
                            $("#Forex").html(result.forex);
                            $("#Indices").html(result.indices);
                            $("#Metals").html(result.metal);
                            $("#Commodities").html(result.commo);
                            $("#Crypto").html(result.crypto);
                        },
                    });
                }, 500);
            }

            if ($("#btmTbl1").length > 0) {
                setInterval(function() {
                    $.ajax({
                        type: "POST",
                        url: "../www.Astrostockfx/inc/forex-table-btm-1.php",
                        data: {
                            lang: lang
                        },
                        success: function(result) {
                            $("#btmTbl1").html(result);
                        },
                    });
                }, 500);
            }
            if ($("#btmTbl2").length > 0) {
                setInterval(function() {
                    $.ajax({
                        type: "POST",
                        url: "../www.tmgm.com/inc/forex-table-btm-2.php",
                        data: {
                            lang: lang
                        },
                        success: function(result) {
                            $("#btmTbl2").html(result);
                        },
                    });
                }, 500);
            }

            if ($("#btmTbl3").length > 0) {
                setInterval(function() {
                    $.ajax({
                        type: "POST",
                        url: "../www.tmgm.com/inc/forex-table-btm-3.php",
                        data: {
                            lang: lang
                        },
                        success: function(result) {
                            $("#btmTbl3").html(result);
                        },
                    });
                }, 500);
            }

            if ($("#forexCard").length > 0) {
                setInterval(function() {
                    $.ajax({
                        type: "POST",
                        url: "../www.tmgm.com/inc/forex-card.php",
                        data: {
                            lang: lang
                        },
                        success: function(result) {
                            $("#forexCard").html(result);
                        },
                    });
                }, 500);
            }

            if ($("#metalSingle").length > 0) {
                setInterval(function() {
                    $.ajax({
                        type: "POST",
                        url: "../www.tmgm.com/inc/metal-card.php",
                        data: {
                            lang: lang
                        },
                        success: function(result) {
                            $("#metalSingle").html(result);
                        },
                    });
                }, 500);
            }

            if ($("#energyCard").length > 0) {
                setInterval(function() {
                    $.ajax({
                        type: "POST",
                        url: "../www.tmgm.com/inc/energy-card.php",
                        data: {
                            lang: lang
                        },
                        success: function(result) {
                            $("#energyCard").html(result);
                        },
                    });
                }, 500);
            }

            if ($("#cyptoCard").length > 0) {
                setInterval(function() {
                    $.ajax({
                        type: "POST",
                        url: "../www.tmgm.com/inc/crypto-card.php",
                        data: {
                            lang: lang
                        },
                        success: function(result) {
                            $("#cyptoCard").html(result);
                        },
                    });
                }, 500);
            }
            if ($("#cryptoTable").length > 0) {
                setInterval(function() {
                    $.ajax({
                        type: "POST",
                        url: "../www.tmgm.com/inc/crypto-table.php",
                        data: {
                            lang: lang
                        },
                        success: function(result) {
                            $("#cryptoTable").html(result);
                        },
                    });
                }, 500);
            }

            if ($("#commoCard").length > 0) {
                setInterval(function() {
                    $.ajax({
                        type: "POST",
                        url: "../www.tmgm.com/inc/commo-card.php",
                        data: {
                            lang: lang
                        },
                        success: function(result) {
                            $("#commoCard").html(result);
                        },
                    });
                }, 500);
            }
            if ($("#indicesCard").length > 0) {
                setInterval(function() {
                    $.ajax({
                        type: "POST",
                        url: "../www.tmgm.com/inc/indices-card.php",
                        data: {
                            lang: lang
                        },
                        success: function(result) {
                            $("#indicesCard").html(result);
                        },
                    });
                }, 500);
            }

            if ($("#indicesTable").length > 0) {
                setInterval(function() {
                    $.ajax({
                        type: "POST",
                        url: "../www.tmgm.com/inc/indices-table.php",
                        data: {
                            lang: lang
                        },
                        success: function(result) {
                            $("#indicesTable").html(result);
                        },
                    });
                }, 500);
            }
        });
    </script> --}}
    {{-- <script type="text/javascript">
        window.$crisp = [];
        window.CRISP_WEBSITE_ID = "a384f35e-ad1c-42f5-afdb-3cc7d34dd1db";
        (function() {
            d = document;
            s = d.createElement("script");
            s.src = "../client.crisp.chat/l.html";
            s.async = 1;
            d.getElementsByTagName("head")[0].appendChild(s);
        })();
    </script> --}}

    <div class="mgm " style="display: none">
        <div class="txt" style="color: black">
            Someone from <b></b> just traded with
            <a href="javascript:void(0);" onclick="javascript:void(0);"></a>
        </div>
    </div>

    <style>
        .mgm {
            border-radius: 7px;
            position: fixed;
            z-index: 150;
            bottom: 420px;
            right: 50px;
            background: #fff;
            padding: 10px 27px;
            box-shadow: 0px 5px 13px 0px rgba(0, 0, 0, 0.3);
        }

        .mgm a {
            font-weight: 700;
            display: block;
            color: #f2d516;
        }

        .mgm a,
        .mgm a:active {
            transition: all 0.2s ease;
            color: #f2d516;
        }
    </style>
    <script data-cfasync="false" src="cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.html"></script>
    <script type="text/javascript">
        var listCountries = [
            "Brazil",
            "USA",
            "Germany",
            "France",
            "Italy",
            "United Kingdom",
            "Australia",
            "Iraq",
            "Canada",
            "Argentina",
            "Saudi Arabia",
            "Mexico",
            "USA",
            "South Africa",
            "Venezuela",
            "United Kingdom",
            "Sweden",
            "Brazil",
            "Germany",
            "Italy",
            "South Africa",
            "United Kingdom",
            "South Africa",
            "Greece",
            "Cuba",
            "South Africa",
            "Portugal",
            "Austria",
            "Brazil",
            "Panama",
            "Dubai",
            "USA",
            "Netherlands",
            "Switzerland",
            "Belgium",
            "Israel",
            "Cyprus",
        ];
        var listPlans = [
            "$500",
            "$1500",
            "$1000",
            "$10,000",
            "$2000",
            "$3000",
            "$4000",
            "$600",
            "$700",
            "$2500",
        ];
        interval = Math.floor(Math.random() * (40000 - 8000 + 1) + 8000);
        var run = setInterval(request, interval);

        function request() {
            clearInterval(run);
            interval = Math.floor(Math.random() * (40000 - 8000 + 1) + 8000);
            var country =
                listCountries[Math.floor(Math.random() * listCountries.length)];
            var plan = listPlans[Math.floor(Math.random() * listPlans.length)];
            var msg =
                "Someone from <b>" +
                country +
                '</b> just traded with <a href="javascript:void(0);" onclick="javascript:void(0);">' +
                plan +
                " .</a>";
            $(".mgm .txt").html(msg);
            $(".mgm").stop(true).fadeIn(100);
            window.setTimeout(function() {
                $(".mgm").stop(true).fadeOut(300);
            }, 6000);
            run = setInterval(request, interval);
        }
    </script>

    <div class="mgm" style="display: none">
        <div class="txt" style="color: #d4af37">
            Someone from <b></b> just made a withdrawal of
            <a href="javascript:void(0);" onclick="javascript:void(0);"></a>
        </div>
    </div>

    <style>
        .mgm {
            border-radius: 7px;
            position: fixed;
            z-index: 150;
            bottom: 420px;
            right: 50px;
            background: black;
            padding: 10px 27px;
            box-shadow: 0px 5px 13px 0px rgba(0, 0, 0, 0.3);
            border: 2px solid #ffc400;
        }

        .mgm a {
            font-weight: 700;
            display: block;
            color: #d4af37;
            /*#f2d516;*/
        }

        .mgm a,
        .mgm a:active {
            transition: all 0.2s ease;
            color: #d4af37;
            /*#f2d516;*/
        }
    </style>
    <script data-cfasync="false" src="cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min-2.html"></script>
    <script type="text/javascript">
        var listCountries = [
            "South Africa",
            "USA",
            "Germany",
            "France",
            "Italy",
            "United Kingdom",
            "Australia",
            "Iraq",
            "Canada",
            "Argentina",
            "Saudi Arabia",
            "Mexico",
            "USA",
            "South Africa",
            "Venezuela",
            "United Kingdom",
            "Sweden",
            "Brazil",
            "Germany",
            "Italy",
            "South Africa",
            "United Kingdom",
            "South Africa",
            "Greece",
            "Cuba",
            "South Africa",
            "Portugal",
            "Austria",
            "Brazil",
            "Panama",
            "South Africa",
            "South Africa",
            "Netherlands",
            "Switzerland",
            "Belgium",
            "Israel",
            "Cyprus",
        ];
        var listPlans = [
            "$7,835",
            "$3,231",
            "$2,500",
            "$1,500",
            "$10,000",
            "$20,000",
            "$3,000",
            "$4,000",
            "$7,650",
            "$8,427",
            "$6,962",
            "$5,704",
            "$27,340",
            "$41,530",
        ];
        interval = Math.floor(Math.random() * (40000 - 8000 + 1) + 8000);
        var run = setInterval(request, 9000);

        function request() {
            clearInterval(run);
            interval = Math.floor(Math.random() * (40000 - 8000 + 1) + 8000);
            var country =
                listCountries[Math.floor(Math.random() * listCountries.length)];
            var plan = listPlans[Math.floor(Math.random() * listPlans.length)];
            var msg =
                "Someone from <b>" +
                country +
                '</b> just made a withdrawal of <a href="javascript:void(0);" onclick="javascript:void(0);">' +
                plan +
                " </a>";
            $(".mgm .txt").html(msg);
            $(".mgm").stop(true).fadeIn(100);
            window.setTimeout(function() {
                $(".mgm").stop(true).fadeOut(300);
            }, 7000);
            run = setInterval(request, 60000);
        }
    </script>

    <!-- jQuery 1.9.1 -->
    <script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>

    <!-- Bootstrap JS -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    <!-- Bootstrap JS -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    {{-- <script src="/public/js/jquery-/3.5.1.min.dc5e7f18c8bf79.js" type="text/javascript"></script> --}}
    <script src="/public/js/webflow.069902445.js" type="text/javascript"></script>
    <script src="/public/js/recent.js" type="text/javascript"></script>
    <script src="/public/js/added/slider.js" type="text/javascript"></script>

    <script src="/public/css/added/sliderflex/slider.js" type="text/javascript"></script>
    <script src="../code.jquery.com/jquery-2.2.0.min.js" type="text/javascript"></script>
    <script src="../cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.js"></script>
    {{-- <script src="../maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script> --}}


    <script>
        var current = 1,
            slides = document.getElementsByClassName("w-pane");

        setInterval(function() {

            current++;

            $("#t-link" + current).trigger("click");

            if (current >= 3) {
                current = 0;

            }

        }, 20000);
    </script>

    <script>
        window.onload = function() {
            var el = document.getElementsByClassName("price-tab")
            for (i = 0; i < el.length; i++) {
                el[0].classList.add('active')
                if (el[i].classList.contains('active')) {
                    el[i].style.display = 'block'
                    el[i].classList.add('animate__animated', 'animate__fadeIn')
                }
            }
        }

        function selectPlan(plan) {
            var el = document.getElementsByClassName("price-tab")
            console.log(plan)
            for (i = 0; i < el.length; i++) {
                if (el[i].classList.contains(plan)) {
                    el[i].style.display = 'block'
                    el[i].classList.add('animate__animated', 'animate__fadeIn')
                } else {
                    el[i].style.display = 'none'
                }
            }
        }
    </script>
    <script src="//code.tidio.co/zzpqrv1axx266096dop3tkjpmrwb1l4e.js" async></script>

    {{-- <!-- jQuery 1.9.1 -->
    <script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>

    <!-- Bootstrap JS -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    <!-- Popper.js (Bootstrap 4 requires Popper.js) -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js"></script> --}}

    <div class="happy">
        <div class="whatsapp-button">
            <a href="https://wa.me/+13866019195 " target="_blank">
                <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="WhatsApp Icon">
            </a>
        </div>

    </div>

    <script src="script.js"></script>


</body>
