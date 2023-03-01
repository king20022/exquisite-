<x-app-layout>
    <!-- main content -->
    <section class="content home">
        <div class="container-fluid">
            <div class="block-header">
                <div class="d-sm-flex justify-content-between">
                    <div>
                        <h2>Dashboard</h2>
                        <small class="text-muted">Welcome to Swift application</small>
                    </div>
                    <div>
                        <a href="#" class="btn btn-raised btn-defualt">Download Report</a>
                        <a href="#" class="btn btn-raised btn-primary">Export</a>
                    </div>
                </div>
            </div>

            <div class="row clearfix top-report row-deck">
                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="card">
                        <div class="body">
                            <h3>1,100</h3>
                            <p class="text-muted">New Admission</p>
                            <div class="progressbar-xs progress-rounded progress-striped progress ng-isolate-scope">
                                <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="68"
                                    aria-valuemin="0" aria-valuemax="100" style="width: 68%;"></div>
                            </div>
                            <span class="text-small">10% higher than last month</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="card">
                        <div class="body">
                            <h3>60,800</h3>
                            <p class="text-muted">Total Students</p>
                            <div class="progressbar-xs progress-rounded progress-striped progress ng-isolate-scope">
                                <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="68"
                                    aria-valuemin="0" aria-valuemax="100" style="width: 68%;"></div>
                            </div>
                            <span class="text-small">4% higher than last month</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="card">
                        <div class="body">
                            <h3>12,521</h3>
                            <p class="text-muted">Master</p>
                            <div class="progressbar-xs progress-rounded progress-striped progress ng-isolate-scope">
                                <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="68"
                                    aria-valuemin="0" aria-valuemax="100" style="width: 68%;"></div>
                            </div>
                            <span class="text-small">4% higher than last month</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="card">
                        <div class="body">
                            <h3>$ 24,500</h3>
                            <p class="text-muted">Total Earnings(Years)</p>
                            <div class="progressbar-xs progress-rounded progress-striped progress ng-isolate-scope">
                                <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="68"
                                    aria-valuemin="0" aria-valuemax="100" style="width: 68%;"></div>
                            </div>
                            <span class="text-small">15% higher than last month</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row clearfix">
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="card">
                        <div class="header">
                            <h2>University Earnings</h2>
                            <ul class="header-dropdown">
                                <li class="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle"
                                        data-toggle="dropdown" role="button" aria-haspopup="true"
                                        aria-expanded="false"><i class="zmdi zmdi-more-vert"></i></a>
                                    <ul class="dropdown-menu pull-right">
                                        <li><a href="javascript:void(0);">Action</a></li>
                                        <li><a href="javascript:void(0);">Another action</a></li>
                                        <li><a href="javascript:void(0);">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="body">
                            <canvas id="line_chart" height="150"></canvas>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="card">
                        <div class="header">
                            <h2>Student Passing</h2>
                            <ul class="header-dropdown">
                                <li class="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle"
                                        data-toggle="dropdown" role="button" aria-haspopup="true"
                                        aria-expanded="false"> <i class="zmdi zmdi-more-vert"></i> </a>
                                    <ul class="dropdown-menu pull-right">
                                        <li><a href="javascript:void(0);">Action</a></li>
                                        <li><a href="javascript:void(0);">Another action</a></li>
                                        <li><a href="javascript:void(0);">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="body">
                            <canvas id="bar_chart" height="150"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row clearfix">
                <div class="col-sm-12 col-md-4 col-lg-4">
                    <div class="card">
                        <div class="header">
                            <h2>Science<small>All Earnings are in million $</small></h2>
                            <ul class="header-dropdown">
                                <li class="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle"
                                        data-toggle="dropdown" role="button" aria-haspopup="true"
                                        aria-expanded="false"><i class="zmdi zmdi-more-vert"></i></a>
                                    <ul class="dropdown-menu pull-right">
                                        <li><a href="javascript:void(0);">Action</a></li>
                                        <li><a href="javascript:void(0);">Another action</a></li>
                                        <li><a href="javascript:void(0);">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="body">
                            <div class="stats-report">
                                <div class="stat-item">
                                    <h5>Overall</h5>
                                    <b class="col-indigo">7,000</b>
                                </div>
                                <div class="stat-item">
                                    <h5>2016</h5>
                                    <b class="col-indigo">2,000</b>
                                </div>
                                <div class="stat-item">
                                    <h5>2017</h5>
                                    <b class="col-indigo">5,000</b>
                                </div>
                            </div>

                            <div class="sparkline" data-type="line" data-spot-Radius="3"
                                data-highlight-Spot-Color="rgb(63, 81, 181)" data-highlight-Line-Color="#222"
                                data-min-Spot-Color="rgb(233, 30, 99)" data-max-Spot-Color="rgb(63, 81, 181)"
                                data-spot-Color="rgb(63, 81, 181, 0.7)" data-offset="90" data-width="100%"
                                data-height="150px" data-line-Width="1" data-line-Color="rgb(63, 81, 181, 0.7)"
                                data-fill-Color="rgba(63, 81, 181, 0.3)"> 6,1,3,3,6,3,2,2,8,2 </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4">
                    <div class="card">
                        <div class="header">
                            <h2>Income Analysis <small>18% High then last month</small></h2>
                            <ul class="header-dropdown">
                                <li class="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle"
                                        data-toggle="dropdown" role="button" aria-haspopup="true"
                                        aria-expanded="false"><i class="zmdi zmdi-more-vert"></i></a>
                                    <ul class="dropdown-menu pull-right">
                                        <li><a href="javascript:void(0);">Action</a></li>
                                        <li><a href="javascript:void(0);">Another action</a></li>
                                        <li><a href="javascript:void(0);">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="body">
                            <div class="stats-report">
                                <div class="stat-item">
                                    <h5>Overall</h5>
                                    <b class="col-blue-grey">80.40%</b>
                                </div>
                                <div class="stat-item">
                                    <h5>Montly</h5>
                                    <b class="col-blue-grey">13.00%</b>
                                </div>
                                <div class="stat-item">
                                    <h5>Day</h5>
                                    <b class="col-blue-grey">9.50%</b>
                                </div>
                            </div>
                            <div class="sparkline" data-type="bar" data-width="97%" data-height="150px"
                                data-bar-Width="10" data-bar-Spacing="7" data-bar-Color="rgb(96, 125, 139)">
                                6,7,8,9,10,5,13,18,21,7,9,11,12,5 </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4">
                    <div class="card">
                        <div class="header">
                            <h2>Income Analysis <small>18% High then last month</small></h2>
                            <ul class="header-dropdown">
                                <li class="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle"
                                        data-toggle="dropdown" role="button" aria-haspopup="true"
                                        aria-expanded="false"><i class="zmdi zmdi-more-vert"></i></a>
                                    <ul class="dropdown-menu pull-right">
                                        <li><a href="javascript:void(0);">Action</a></li>
                                        <li><a href="javascript:void(0);">Another action</a></li>
                                        <li><a href="javascript:void(0);">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="body">
                            <div class="stats-report">
                                <div class="stat-item">
                                    <h5>Overall</h5>
                                    <b class="col-black">84.60%</b>
                                </div>
                                <div class="stat-item">
                                    <h5>Montly</h5>
                                    <b class="col-black">15.40%</b>
                                </div>
                                <div class="stat-item">
                                    <h5>Day</h5>
                                    <b class="col-black">5.10%</b>
                                </div>
                            </div>
                            <div class="sparkline-pie text-center">6,4,8</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row clearfix row-deck">
                <div class="col-lg-4 col-md-12 col-sm-12">
                    <div class="card">
                        <div class="header">
                            <h2>Exam Toppers</h2>
                            <ul class="header-dropdown">
                                <li class="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle"
                                        data-toggle="dropdown" role="button" aria-haspopup="true"
                                        aria-expanded="false"><i class="zmdi zmdi-more-vert"></i></a>
                                    <ul class="dropdown-menu pull-right">
                                        <li><a href="javascript:void(0);">Action</a></li>
                                        <li><a href="javascript:void(0);">Another action</a></li>
                                        <li><a href="javascript:void(0);">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="body table-responsive">
                            <table class="table table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Charts</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Dean Otto</td>
                                        <td>
                                            <span class="sparkbar">5,8,6,3,5,9,2</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>K. Thornton</td>
                                        <td>
                                            <span class="sparkbar">10,8,9,3,5,8,5</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Jack Bird</td>
                                        <td>
                                            <span class="sparkbar">10,8,1,3,3,8,7</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Hughe L.</td>
                                        <td>
                                            <span class="sparkbar">2,8,9,8,5,1,5</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Jack Bird</td>
                                        <td>
                                            <span class="sparkbar">1,8,2,3,9,8,5</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Hughe L.</td>
                                        <td>
                                            <span class="sparkbar">10,8,1,3,2,8,5</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 col-sm-12">
                    <div class="card activities">
                        <div class="header">
                            <h2>Activities</h2>
                            <ul class="header-dropdown">
                                <li class="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle"
                                        data-toggle="dropdown" role="button" aria-haspopup="true"
                                        aria-expanded="false"> <i class="zmdi zmdi-more-vert"></i> </a>
                                    <ul class="dropdown-menu pull-right">
                                        <li><a href="javascript:void(0);" class=" waves-effect waves-block">Action</a>
                                        </li>
                                        <li><a href="javascript:void(0);" class=" waves-effect waves-block">Another
                                                action</a></li>
                                        <li><a href="javascript:void(0);" class=" waves-effect waves-block">Something
                                                else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="body" id="timeline">
                            <div class="timeline-body">
                                <div class="timeline m-border">
                                    <div class="timeline-item">
                                        <div class="item-content">
                                            <div class="text-small">Just now</div>
                                            <p>It is a long established.</p>
                                        </div>
                                    </div>
                                    <div class="timeline-item border-info">
                                        <div class="item-content">
                                            <div class="text-small">11:30</div>
                                            <p>There are many variations</p>
                                        </div>
                                    </div>
                                    <div class="timeline-item border-warning border-l">
                                        <div class="item-content">
                                            <div class="text-small">10:30</div>
                                            <p>Contrary to popular belief </p>
                                        </div>
                                    </div>
                                    <div class="timeline-item border-warning">
                                        <div class="item-content">
                                            <div class="text-small">3 days ago</div>
                                            <p>vacation</p>
                                        </div>
                                    </div>
                                    <div class="timeline-item border-danger">
                                        <div class="item-content">
                                            <div class="text--muted">Thu, 10 Mar</div>
                                            <p>Contrary to popular belief</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 col-sm-12">
                    <div class="card">
                        <div class="header">
                            <h2>Attendance</h2>
                            <ul class="header-dropdown">
                                <li class="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle"
                                        data-toggle="dropdown" role="button" aria-haspopup="true"
                                        aria-expanded="false"><i class="zmdi zmdi-more-vert"></i></a>
                                    <ul class="dropdown-menu pull-right">
                                        <li><a href="javascript:void(0);" class=" waves-effect waves-block">Action</a>
                                        </li>
                                        <li><a href="javascript:void(0);" class=" waves-effect waves-block">Another
                                                action</a></li>
                                        <li><a href="javascript:void(0);" class=" waves-effect waves-block">Something
                                                else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="body">
                            <ul class="basic-list">
                                <li class="pt-0">Mark Otto <span class="float-right label-danger label">21%</span>
                                </li>
                                <li>Jacob Thornton <span class="float-right label-purple label">50%</span></li>
                                <li>Jacob Thornton<span class="float-right label-success label">90%</span></li>
                                <li>M. Arthur <span class="float-right label-info label">75%</span></li>
                                <li>Jacob Thornton <span class="float-right label-warning label">60%</span></li>
                                <li class="pb-0">M. Arthur <span class="float-right label-success label">91%</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row clearfix">
                <!-- Task Info -->
                <div class="col-sm-12 col-md-12">
                    <div class="card">
                        <div class="header">
                            <h2>TASK INFOS</h2>
                            <ul class="header-dropdown">
                                <li class="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle"
                                        data-toggle="dropdown" role="button" aria-haspopup="true"
                                        aria-expanded="false"><i class="zmdi zmdi-more-vert"></i></a>
                                    <ul class="dropdown-menu pull-right">
                                        <li><a href="javascript:void(0);">Action</a></li>
                                        <li><a href="javascript:void(0);">Another action</a></li>
                                        <li><a href="javascript:void(0);">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="body">
                            <div class="table-responsive">
                                <table class="table table-hover dashboard-task-infos">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Task</th>
                                            <th>Status</th>
                                            <th>Professors</th>
                                            <th>Progress</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Task A</td>
                                            <td><span class="label bg-green">Doing</span></td>
                                            <td>John Doe</td>
                                            <td>
                                                <div class="progress m-b-0">
                                                    <div class="progress-bar bg-green" role="progressbar"
                                                        aria-valuenow="62" aria-valuemin="0" aria-valuemax="100"
                                                        style="width: 62%"></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Task B</td>
                                            <td><span class="label bg-blue">To Do</span></td>
                                            <td>John Doe</td>
                                            <td>
                                                <div class="progress m-b-0">
                                                    <div class="progress-bar bg-blue" role="progressbar"
                                                        aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"
                                                        style="width: 40%"></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Task C</td>
                                            <td><span class="label bg-light-blue">On Hold</span></td>
                                            <td>John Doe</td>
                                            <td>
                                                <div class="progress m-b-0">
                                                    <div class="progress-bar bg-light-blue" role="progressbar"
                                                        aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"
                                                        style="width: 72%"></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Task D</td>
                                            <td><span class="label bg-orange">Wait Approvel</span></td>
                                            <td>John Doe</td>
                                            <td>
                                                <div class="progress m-b-0">
                                                    <div class="progress-bar bg-orange" role="progressbar"
                                                        aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"
                                                        style="width: 95%"></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Task E</td>
                                            <td><span class="label bg-red">Suspended</span></td>
                                            <td>John Doe</td>
                                            <td>
                                                <div class="progress m-b-0">
                                                    <div class="progress-bar bg-red" role="progressbar"
                                                        aria-valuenow="87" aria-valuemin="0" aria-valuemax="100"
                                                        style="width: 87%"></div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- #END# Task Info -->
            </div>
            <div class="row clearfix row-deck">
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card">
                        <img src="assets/images/puppy-1.jpg" class="img-fluid card-img-top" alt=" /">
                        <div class="body thumbnail">
                            <div class="caption">
                                <h3>UI UX Design Course</h3>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <a href="javascript:void(0);" class="btn btn-raised waves-effect btn-sm"
                                    role="button">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card">
                        <img src="assets/images/puppy-2.jpg" class="img-fluid card-img-top" alt=" /">
                        <div class="body thumbnail">
                            <div class="caption">
                                <h3>Magento Certification</h3>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <a href="javascript:void(0);" class="btn btn-raised waves-effect btn-sm"
                                    role="button">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card">
                        <img src="assets/images/puppy-3.jpg" class="img-fluid card-img-top" alt=" /">
                        <div class="body thumbnail">
                            <div class="caption">
                                <h3>iOS Application Course</h3>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <a href="javascript:void(0);" class="btn btn-raised g-bg-blush2 waves-effect btn-sm"
                                    role="button">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card">
                        <img src="assets/images/puppy-1.jpg" class="img-fluid card-img-top" alt=" /">
                        <div class="body thumbnail">
                            <div class="caption">
                                <h3>Java Course</h3>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <a href="javascript:void(0);" class="btn btn-raised waves-effect btn-sm"
                                    role="button">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- main content -->

    <div class="color-bg"></div>

</x-app-layout>
{{--  --}}
