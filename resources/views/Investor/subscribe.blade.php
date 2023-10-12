<x-app-layout>

    <!-- main content -->
    <section class="content">
        <div class="container-fluid">

            <div class="row clearfix">


                {{-- @foreach ($payment as $payment) --}}
                    <div class="col-xl-3 col-lg-7 col-md-6 col-sm-12 mr-0">
                        <div class="card shadow-2xl">
                            <div class="body">
                                <div class="member-card verified text-left ">

                                    <p class="text-pink mb-0"><b class="h6">Available Balance</b></p>
                                    <p class="text-pink mt-3"><i class="h5">$ </i><span class="h5">{{ $user->balance }}</span></p>
                                    <p class="text-muted"> <b> </b></p>


                                </div>


                            </div>
                        </div>
                    </div>
                {{-- @endforeach --}}


            </div>
            <div class="body">
                <div class="row clearfix">

                    <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" class="form-control" required name="name"
                                    value="" placeholder="PROFITABLE TRADING SIGNALS AND CONSULTATION" readonly>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div class="d-sm-flex justify-content-between">
                <div class="dropdown">
                    <button class="btn btn-raised btn-primary" id="fundAccountBtn">Fund Account</button>
                    <div id="subscriptionDropdown" class="dropdown-menu">
                        <a class="dropdown-item" href="{{ route('investor.coin', ['amount' => 149]) }}">Monthly subscription = $149</a>
                        <a class="dropdown-item" href="{{ route('investor.coin', ['amount' => 299]) }}">3 months subscription = $299</a>
                        <a class="dropdown-item" href="{{ route('investor.coin', ['amount' => 558]) }}">6 months subscription = $558</a>
                        <a class="dropdown-item" href="{{ route('investor.coin', ['amount' => 799]) }}">Yearly subscription = $799</a>
                    </div>

                </div>
            </div>


        </div>
        <script>
            document.getElementById('fundAccountBtn').addEventListener('click', function(event) {
                event.stopPropagation(); // Prevents the document click event from immediately closing the dropdown

                var dropdown = document.getElementById('subscriptionDropdown');
                if (dropdown.style.display === 'none' || dropdown.style.display === '') {
                    dropdown.style.display = 'block';
                } else {
                    dropdown.style.display = 'none';
                }
            });

            // Close the dropdown menu if the user clicks outside of it
            document.addEventListener('click', function(event) {
                var dropdown = document.getElementById('subscriptionDropdown');
                if (event.target.closest('.dropdown') === null && event.target !== document.getElementById('fundAccountBtn')) {
                    dropdown.style.display = 'none';
                }
            });
        </script>


    </section>
    <!-- main content -->

</x-app-layout>
{{--  --}}
