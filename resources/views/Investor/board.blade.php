<x-app-layout>
    <!-- main content -->
    <section class="content home">
        <div class="container-fluid">
            <div class="block-header mb-0">
                <div class="d-sm-flex justify-content-between">

                    <!-- TradingView Widget BEGIN -->
                    <div class="tradingview-widget-container">
                        <div class="tradingview-widget-container__widget"></div>
                        <div class="tradingview-widget-copyright"><a href="#" rel="noopener" target="_blank"><span
                                    class="blue-text"></span></a>
                        </div>
                        <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
                            {
                                "symbols": [{
                                        "proName": "FOREXCOM:SPXUSD",
                                        "title": "S&P 500"
                                    },
                                    {
                                        "proName": "FOREXCOM:NSXUSD",
                                        "title": "US 100"
                                    },
                                    {
                                        "proName": "FX_IDC:EURUSD",
                                        "title": "EUR/USD"
                                    },
                                    {
                                        "proName": "BITSTAMP:BTCUSD",
                                        "title": "Bitcoin"
                                    },
                                    {
                                        "proName": "BITSTAMP:ETHUSD",
                                        "title": "Ethereum"
                                    }
                                ],
                                "showSymbolLogo": true,
                                "colorTheme": "dark",
                                "isTransparent": false,
                                "displayMode": "adaptive",
                                "locale": "en"
                            }
                        </script>
                    </div>
                    <!-- TradingView Widget END -->



                </div>
            </div>
            <div class="row clearfix top-report row-deck">
                <div class="col-lg-12 col-sm-6 col-md-6">
                    <div class="card bg-primary">
                        <div class="body">

                            <p class="text-pink">Welcome back, <span
                                    class="font-weight-bold text-uppercase display-6 bg-light">{{ Auth::user()->name }}</span>
                            </p>
                            <span class="text-small"><b>Available balance</b></span>


                            <h3 class="font-weight-bold h3 pr-5"><i class="dollar h-2">$ </i>{{ $user->balance }} </h3>



                        </div>
                    </div>
                </div>



            </div>

            <div class="row clearfix top-report row-deck">
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="card">

                        <div class="body ">
                            <p class=" text-pink mb-1 h-6 text-body"><b>Profit</b></p>

                            <h3 class=" ">{{ $user->profit }}</h3>
                            <i class=" h5 mt-0"><b>$</b></i>


                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="card">
                        <div class="body">
                            <p class="mb-1 text-body"><b>Balance</b></p>

                            <h3>{{ $user->balance }}</h3>
                            <i class=" h5"><b>$</b></i>


                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="card">
                        <div class="body">
                            <p class="mb-1 text-body"><b>Bonus</b></p>

                            <h3>{{ $user->bonus }}</h3>
                            <i class="h5"><b>$</b></i>


                        </div>
                    </div>
                </div>

            </div>

            <div class="row clearfix">
                <div class="col-lg-7 col-md-6 col-sm-6">
                    <div class="card">


                        <div class="body Trading">
                            {{-- <!-- TradingView Widget BEGIN -->
                            <div class="tradingview-widget-container">
                                <div id="tradingview_d2037"></div>
                                <div class="tradingview-widget-copyright"><a href="$" rel="noopener"
                                        target="_blank"><span class="blue-text">
                                </div>
                                <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
                                <script type="text/javascript">
                                    new TradingView.widget({
                                        "width": 510,
                                        "height": 600,
                                        "symbol": "NASDAQ:AAPL",
                                        "interval": "1",
                                        "timezone": "America/Los_Angeles",
                                        "theme": "dark",
                                        "style": "0",
                                        "locale": "en",
                                        "toolbar_bg": "#f1f3f6",
                                        "enable_publishing": false,
                                        "allow_symbol_change": true,
                                        "studies": [
                                            "STD;Arnaud%1Legoux%1Moving%1Average"
                                        ],
                                        "container_id": "tradingview_d2037"
                                    });
                                </script>
                            </div>
                            <!-- TradingView Widget END --> --}}
                            <!-- TradingView Widget BEGIN -->

                            <!-- TradingView Widget END -->
                        </div>


                    </div>
                </div>
                <div class="col-lg-5 col-md-6 col-sm-6">
                    <div class="card">


                        <div class="body View">
                            <!-- TradingView Widget BEGIN -->
                            
                            <!-- TradingView Widget END -->

                        </div>
                    </div>

                </div>
    </section>
    <!-- main content -->

    <div class="color-bg"></div>

</x-app-layout>
{{--  --}}
