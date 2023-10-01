{{-- <!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>:: Exquisite crypto ventures | Platform for Virtual Currencies That Is Straightforward, Secure, and Reliable
    </title>
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="/asset/plugins/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <!-- Custom Css -->
    <link rel="stylesheet" href="/asset/css/main.css">

    <link rel="stylesheet" href="/asset/css/themes/all-themes.css" />
</head>

<body class="theme-blush">



    <!--Side menu and right menu -->
    <section>
        <!-- Left Sidebar -->
        <aside id="leftsidebar" class="sidebar">
            <!-- User Info -->
            <div class="user-info">
                <div class="admin-image"> <img src="assets/images/random-avatar7.jpg" alt=""> </div>
                <div class="admin-action-info">
                    <h3></h3>
                    <ul>

                    </ul>
                </div>
            </div>
            <!-- #User Info -->
            <!-- Menu -->
            <div class="menu">
                <ul class="list">

                    <li class="active open"><a href="{{ route('Admin.dashboard') }}"><i
                                class="zmdi zmdi-home"></i><span>Dashboard</span></a></li>
                    <li>
                    </li>
                    <li><a href="{{ route('admin.show') }}"><i class="zmdi zmdi-account"></i><span>Investors</span>
                        </a>

                    </li>

                    <li><a href="{{ route('investor.add') }}"><i class="zmdi zmdi-account-add"></i><span>Add-Coin</span>
                        </a>

                    </li>
                    <li><a href="{{ route('investment.add') }}"><i
                                class="zmdi zmdi-account-add"></i><span>Add-Investment</span> </a>

                    </li>

                    <li><a href="{{ route ('logout')}}"><i
                        class="zmdi zmdi-city-alt"></i><span>Logout</span> </a>

            </li>

                </ul>
            </div>
            <!-- #Menu -->
        </aside>
        <!-- #END# Left Sidebar -->
        <!-- Right Sidebar -->
        <aside id="rightsidebar" class="right-sidebar">
            <ul class="nav nav-tabs tab-nav-right" role="tablist">
                <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#skins">Skins</a></li>
                <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#chat">Chat</a></li>
                <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#settings">Setting</a></li>
            </ul>
            <div class="tab-content">
                <div role="tabpanel" class="tab-pane in active in active" id="skins">
                    <ul class="demo-choose-skin">
                        <li data-theme="red">
                            <div class="red"></div><span>Red</span>
                        </li>
                        <li data-theme="purple">
                            <div class="purple"></div><span>Purple</span>
                        </li>
                        <li data-theme="blue">
                            <div class="blue"></div><span>Blue</span>
                        </li>
                        <li data-theme="cyan">
                            <div class="cyan"></div><span>Cyan</span>
                        </li>
                        <li data-theme="green">
                            <div class="green"></div><span>Green</span>
                        </li>
                        <li data-theme="deep-orange">
                            <div class="deep-orange"></div><span>Deep Orange</span>
                        </li>
                        <li data-theme="blue-grey">
                            <div class="blue-grey"></div><span>Blue Grey</span>
                        </li>
                        <li data-theme="black">
                            <div class="black"></div><span>Black</span>
                        </li>
                        <li data-theme="blush" class="active">
                            <div class="blush"></div><span>Blush</span>
                        </li>
                    </ul>
                </div>
                <div role="tabpanel" class="tab-pane" id="chat">
                    <div class="demo-settings">
                        <div class="search">
                            <div class="input-group">
                                <div class="form-line">
                                    <input type="text" class="form-control" placeholder="Search..." required
                                        autofocus>
                                </div>
                            </div>
                        </div>
                        <h6>Recent</h6>
                        <ul>
                            <li class="online">
                                <div class="media">
                                    <a role="button" tabindex="0"> <img class="media-object "
                                            src="assets/images/xs/avatar1.jpg" alt=""> </a>
                                    <div class="media-body">
                                        <span class="name">Claire Sassu</span> <span class="message">Can you share
                                            the...</span> <span class="badge badge-outline status"></span>
                                    </div>
                                </div>
                            </li>
                            <li class="online">
                                <div class="media"> <a role="button" tabindex="0"> <img class="media-object "
                                            src="assets/images/xs/avatar2.jpg" alt=""> </a>
                                    <div class="media-body">
                                        <span class="name">Maggie jackson</span> <span class="message">Can you share
                                            the...</span> <span class="badge badge-outline status"></span>
                                    </div>
                                </div>
                            </li>
                            <li class="online">
                                <div class="media"> <a role="button" tabindex="0"> <img class="media-object "
                                            src="assets/images/xs/avatar3.jpg" alt=""> </a>
                                    <div class="media-body">
                                        <span class="name">Joel King</span> <span class="message">Ready for the
                                            meeti...</span> <span class="badge badge-outline status"></span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <h6>Contacts</h6>
                        <ul>
                            <li class="offline">
                                <div class="media"> <a role="button" tabindex="0"> <img class="media-object "
                                            src="assets/images/xs/avatar4.jpg" alt=""> </a>
                                    <div class="media-body">
                                        <span class="name">Joel King</span> <span
                                            class="badge badge-outline status"></span>
                                    </div>
                                </div>
                            </li>
                            <li class="online">
                                <div class="media"> <a role="button" tabindex="0"> <img class="media-object "
                                            src="assets/images/xs/avatar1.jpg" alt=""> </a>
                                    <div class="media-body">
                                        <span class="name">Joel King</span> <span
                                            class="badge badge-outline status"></span>
                                    </div>
                                </div>
                            </li>
                            <li class="offline">
                                <div class="media"> <a class="pull-left " role="button" tabindex="0"> <img
                                            class="media-object " src="assets/images/xs/avatar2.jpg" alt="">
                                    </a>
                                    <div class="media-body">
                                        <span class="name">Joel King</span> <span
                                            class="badge badge-outline status"></span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div role="tabpanel" class="tab-pane" id="settings">
                    <div class="demo-settings">
                        <p>GENERAL SETTINGS</p>
                        <ul class="setting-list">
                            <li>
                                <span>Report Panel Usage</span>
                                <div class="switch">
                                    <label><input type="checkbox" checked><span class="lever"></span></label>
                                </div>
                            </li>
                            <li>
                                <span>Email Redirect</span>
                                <div class="switch">
                                    <label><input type="checkbox"><span class="lever"></span></label>
                                </div>
                            </li>
                        </ul>
                        <p>SYSTEM SETTINGS</p>
                        <ul class="setting-list">
                            <li>
                                <span>Notifications</span>
                                <div class="switch">
                                    <label><input type="checkbox" checked><span class="lever"></span></label>
                                </div>
                            </li>
                            <li>
                                <span>Auto Updates</span>
                                <div class="switch">
                                    <label><input type="checkbox" checked><span class="lever"></span></label>
                                </div>
                            </li>
                        </ul>
                        <p>ACCOUNT SETTINGS</p>
                        <ul class="setting-list">
                            <li>
                                <span>Offline</span>
                                <div class="switch">
                                    <label><input type="checkbox"><span class="lever"></span></label>
                                </div>
                            </li>
                            <li>
                                <span>Location Permission</span>
                                <div class="switch">
                                    <label><input type="checkbox" checked><span class="lever"></span></label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
        <!-- #END# Right Sidebar -->

    </section>
    <!--Side menu and right menu -->
    {{ $slot }}

    {{-- <div class="color-bg"></div> --}}

<!-- Jquery Core Js -->
<script src="/asset/bundles/libscripts.bundle.js"></script>
<script src="/asset/bundles/vendorscripts.bundle.js"></script>
<script src="/asset/bundles/morphingsearchscripts.bundle.js"></script>
<script src="/asset/plugins/jquery-sparkline/jquery.sparkline.min.js"></script>
<script src="/asset/plugins/chartjs/Chart.bundle.min.js"></script>
<script src="/asset/bundles/mainscripts.bundle.js"></script>
<script src="/asset/js/pages/charts/sparkline.min.js"></script>
<script src="/asset/js/pages/index.js"></script>
</body>



<!-- Simplicity is an acquired taste. - Katharine Gerould -->
<!DOCTYPE html>
<html>

<!-- Mirrored from thememakker.com/templates/swift/university/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 15 Dec 2022 14:22:29 GMT -->

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>:: Sky Stream Exchange ::</title>
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="/asset/plugins/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="/https://fonts.googleapis.com/icon?family=Material+Icons">
    <!-- Custom Css -->
    <link rel="stylesheet" href="/asset/css/main.css">

    <link rel="stylesheet" href="/asset/css/themes/all-themes.css" />

</head>

<body class="theme-blush">


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
                <img class="rounded-circle" src="asset/images/sm/avatar1.jpg" alt=""/>
                <h3>Sara Soueidan</h3>
            </a>
            <a class="media-object" href="#">
                <img class="rounded-circle" src="asset/images/sm/avatar2.jpg" alt=""/>
                <h3>Rachel Smith</h3>
            </a>
            <a class="media-object" href="#">
                <img class="rounded-circle" src="asset/images/sm/avatar3.jpg" alt=""/>
                <h3>Peter Finlan</h3>
            </a>
            <a class="media-object" href="#">
                <img class="rounded-circle" src="asset/images/sm/avatar4.jpg" alt=""/>
                <h3>Patrick Cox</h3>
            </a>
            <a class="media-object" href="#">
                <img class="rounded-circle" src="asset/images/sm/avatar5.jpg" alt=""/>
                <h3>Tim Holman</h3>
            </a>
        </div>
        <div class="column">
            <h2>Popular</h2>
            <a class="media-object" href="#">
                <img class="rounded-circle" src="asset/images/sm/avatar5.jpg" alt=""/>
                <h3>Sara Soueidan</h3>
            </a>
            <a class="media-object" href="#">
                <img class="rounded-circle" src="asset/images/sm/avatar4.jpg" alt=""/>
                <h3>Rachel Smith</h3>
            </a>
            <a class="media-object" href="#">
                <img class="rounded-circle" src="asset/images/sm/avatar3.jpg" alt=""/>
                <h3>Peter Finlan</h3>
            </a>
            <a class="media-object" href="#">
                <img class="rounded-circle" src="asset/images/sm/avatar2.jpg" alt=""/>
                <h3>Patrick Cox</h3>
            </a>
            <a class="media-object" href="#">
                <img class="rounded-circle" src="asset/images/sm/avatar1.jpg" alt=""/>
                <h3>Tim Holman</h3>
            </a>
        </div>
        <div class="column">
            <h2>Recent</h2>
            <a class="media-object" href="#">
                <img class="rounded-circle" src="asset/images/sm/avatar1.jpg" alt=""/>
                <h3>Sara Soueidan</h3>
            </a>
            <a class="media-object" href="#">
                <img class="rounded-circle" src="asset/images/sm/avatar2.jpg" alt=""/>
                <h3>Rachel Smith</h3>
            </a>
            <a class="media-object" href="#">
                <img class="rounded-circle" src="asset/images/sm/avatar3.jpg" alt=""/>
                <h3>Peter Finlan</h3>
            </a>
            <a class="media-object" href="#">
                <img class="rounded-circle" src="asset/images/sm/avatar4.jpg" alt=""/>
                <h3>Patrick Cox</h3>
            </a>
            <a class="media-object" href="#">
                <img class="rounded-circle" src="asset/images/sm/avatar5.jpg" alt=""/>
                <h3>Tim Holman</h3>
            </a>
        </div>
    </div>
    <!-- /morphsearch-content -->
    <span class="morphsearch-close"></span>
</div>

<!-- Top Bar -->
<nav class="navbar clearHeader">
    <div class="col-12">
        <div class="navbar-header"> <a href="javascript:void(0);" class="bars"></a> <a class="navbar-brand" href="index.html">Swift University</a> </div>
        <ul class="nav navbar-nav navbar-right">
            <!-- Notifications -->
            <li class="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button"><i class="zmdi zmdi-notifications"></i> <span class="label-count">7</span> </a>
                <ul class="dropdown-menu">
                    <li class="header">NOTIFICATIONS</li>
                    <li class="body">
                        <ul class="menu">
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="icon-circle bg-light-green"><i class="zmdi zmdi-account-add"></i></div>
                                    <div class="menu-info">
                                        <h4>12 new members joined</h4>
                                        <p> <i class="material-icons">access_time</i> 14 mins ago </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="icon-circle bg-cyan"><i class="zmdi zmdi-shopping-cart-plus"></i></div>
                                    <div class="menu-info">
                                        <h4>4 sales made</h4>
                                        <p> <i class="material-icons">access_time</i> 22 mins ago </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="icon-circle bg-red"><i class="zmdi zmdi-delete"></i></div>
                                    <div class="menu-info">
                                        <h4><b>Nancy Doe</b> deleted account</h4>
                                        <p> <i class="material-icons">access_time</i> 3 hours ago </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="icon-circle bg-orange"><i class="zmdi zmdi-edit"></i></div>
                                    <div class="menu-info">
                                        <h4><b>Nancy</b> changed name</h4>
                                        <p> <i class="material-icons">access_time</i> 2 hours ago </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="icon-circle bg-blue-grey"><i class="zmdi zmdi-comment-alt-text"></i></div>
                                    <div class="menu-info">
                                        <h4><b>John</b> commented your post</h4>
                                        <p> <i class="material-icons">access_time</i> 4 hours ago </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="icon-circle bg-light-green"><i class="zmdi zmdi-refresh-alt"></i></div>
                                    <div class="menu-info">
                                        <h4><b>John</b> updated status</h4>
                                        <p> <i class="material-icons">access_time</i> 3 hours ago </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="icon-circle bg-purple"><i class="zmdi zmdi-settings"></i></div>
                                    <div class="menu-info">
                                        <h4>Settings updated</h4>
                                        <p> <i class="material-icons">access_time</i> Yesterday </p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="footer"> <a href="javascript:void(0);">View All Notifications</a> </li>
                </ul>
            </li>
            <!-- #END# Notifications -->
            <!-- Tasks -->
            <li class="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button"><i class="zmdi zmdi-flag"></i><span class="label-count">9</span> </a>
                <ul class="dropdown-menu">
                    <li class="header">TASKS</li>
                    <li class="body">
                        <ul class="menu tasks">
                            <li>
                                <a href="javascript:void(0);">
                                    <h4> Task 1 <small>32%</small> </h4>
                                    <div class="progress">
                                        <div class="progress-bar bg-pink" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 32%"> </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <h4>Task 2 <small>45%</small> </h4>
                                    <div class="progress">
                                        <div class="progress-bar bg-cyan" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 45%"> </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <h4>Task 3 <small>54%</small> </h4>
                                    <div class="progress">
                                        <div class="progress-bar bg-teal" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 54%"> </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <h4> Task 4 <small>65%</small> </h4>
                                    <div class="progress">
                                        <div class="progress-bar bg-orange" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 65%"> </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="footer"> <a href="javascript:void(0);">View All Tasks</a> </li>
                </ul>
            </li>
            <!-- #END# Tasks -->
            <li><a href="javascript:void(0);" class="js-right-sidebar" data-close="true"><i class="zmdi zmdi-settings"></i></a></li>
        </ul>
    </div>
</nav>
<!-- #Top Bar --> --}}

    <!--Side menu and right menu -->
    <section>
        <!-- Left Sidebar -->
        <aside id="leftsidebar" class="sidebar">
            <!-- User Info -->
            <div class="user-info">
                <div class="admin-image"> <img src="asset/images/random-avatar7.jpg" alt=""> </div>
                <div class="admin-action-info"> <span>Welcome</span>
                    <h3>{{ Auth::user()->name }}
                    </h3>
                    <ul>

                        <li><a href="javascript:void(0);" class="js-right-sidebar" data-close="true"><i
                                    class="zmdi zmdi-settings"></i></a></li>
                        <li><a data-placement="bottom" title="log out" href="{{ route('logout') }}"><i
                                    class="zmdi zmdi-sign-in"></i></a></li>
                    </ul>
                </div>
            </div>
            <!-- #User Info -->
            <!-- Menu -->
            <div class="menu">
                <ul class="list">
                    <li class="header">MAIN NAVIGATION</li>
                    <li class="active open"><a href="{{ route('Admin.dashboard') }}"><i
                                class="zmdi zmdi-home"></i><span>Dashboard</span></a></li>
                    </li>
                    <li><a href="{{ route('admin.show') }}" class=""><i
                                class="zmdi zmdi-account"></i><span>Investors</span> </a>
                        {{-- <ul class="ml-menu">
                            <li><a href="professors.html">All Professors</a></li>
                            <li><a href="add-professors.html">Add professors</a></li>
                            <li><a href="profile.html">professors Profile</a></li>
                        </ul> --}}
                    </li>
                    <li><a href="{{ route('investor.add') }}" class=""><i
                                class="zmdi zmdi-accounts-outline"></i><span>Add-Coin</span> </a>
                        {{-- <ul class="ml-menu">
                            <li><a href="students.html">All Students</a></li>
                            <li><a href="add-students.html">Add Students</a></li>
                            <li><a href="students-profile.html">Students Profile</a></li>
                            <li><a href="students-invoice.html">Students Invoice</a></li>
                        </ul> --}}
                    </li>

                    <li><a href="{{ route('investment.add') }}" class=""><i
                                class="zmdi zmdi-graduation-cap"></i><span>Add-Investment</span> </a>
                        {{-- <ul class="ml-menu">
                            <li><a href="courses.html">All Courses</a></li>
                            <li><a href="add-courses.html">Add Courses</a></li>
                            <li><a href="courses-info.html">Courses Info</a></li>
                        </ul> --}}
                    </li>
                    {{-- <li><a href="{{ route('admin.key') }}" class=""><i
                                class=" zmdi zmdi-sign-in zmdi zmdi-swap-alt"></i><span>Phrase</span> </a>

                    </li> --}}
                    <li><a href="{{ route ('admin.payment')}}" class=""><i
                                class=" zmdi zmdi-sign-in zmdi zmdi-mood"></i><span>Withdrawals</span> </a>

                    </li>
                    <li><a href="{{ route('logout') }}" class=""><i
                                class=" zmdi zmdi-sign-in"></i><span>Logout</span> </a>

                    </li>

                </ul>
            </div>
            <!-- #Menu -->
        </aside>
        <!-- #END# Left Sidebar -->
        <!-- Right Sidebar -->
        <aside id="rightsidebar" class="right-sidebar">
            <ul class="nav nav-tabs tab-nav-right" role="tablist">
                <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#skins">Skins</a></li>
            </ul>
            <div class="tab-content">
                <div role="tabpanel" class="tab-pane in active in active" id="skins">
                    <ul class="demo-choose-skin">
                        <li data-theme="red">
                            <div class="red"></div><span>Red</span>
                        </li>
                        <li data-theme="purple">
                            <div class="purple"></div><span>Purple</span>
                        </li>
                        <li data-theme="blue">
                            <div class="blue"></div><span>Blue</span>
                        </li>
                        <li data-theme="cyan">
                            <div class="cyan"></div><span>Cyan</span>
                        </li>
                        <li data-theme="green">
                            <div class="green"></div><span>Green</span>
                        </li>
                        <li data-theme="deep-orange">
                            <div class="deep-orange"></div><span>Deep Orange</span>
                        </li>
                        <li data-theme="blue-grey">
                            <div class="blue-grey"></div><span>Blue Grey</span>
                        </li>
                        <li data-theme="black">
                            <div class="black"></div><span>Black</span>
                        </li>
                        <li data-theme="blush" class="active">
                            <div class="blush"></div><span>Blush</span>
                        </li>
                    </ul>
                </div>

            </div>
        </aside>
        <!-- #END# Right Sidebar -->
    </section>

    <!--Side menu and right menu -->

</html>
