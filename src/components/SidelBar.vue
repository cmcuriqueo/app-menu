<script>

    import Home from './Home.vue'
    export default {
        name: 'SidelBar',
        props:['sidelBarStatus'],
        components: {
            Home
        }
    }
</script>
<template>

    <div class="wrapper">

        <!-- Sidebar  -->
        <nav id="sidebar" :class="sidelBarStatus">
 
            <ul class="list-unstyled components">
                <h4 style="color: #58789c;margin-left: 35px;"><b>Menu General</b></h4>
                <li>
                    <a href="#">Agenda</a>
                </li>
                <li>
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Direccion de Finanzas</a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="#direccionFinanzas" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Tesoreria</a>
                            <ul class="collapse list-unstyled" id="direccionFinanzas">
                                <li>
                                    <a href="#">Consultas De Pagos A Beneficiarios</a>
                                </li>
                            </ul>
                            
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="#">Page 1</a>
                        </li>
                        <li>
                            <a href="#">Page 2</a>
                        </li>
                        <li>
                            <a href="#">Page 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Portfolio</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>

           
        </nav>

        <!-- Page Content  -->
        <div id="content">


            
            <Home></Home>
        </div>
    </div>
</template>



<style scoped>
    ul.list-unstyled>li {
        color:#000;
    }


    a,
    a:hover,
    a:focus {
        color: inherit;
        text-decoration: none;
        transition: all 0.3s;
    }
    
    .navbar {
        padding: 15px 10px;
        background: #fff;
        border: none;
        border-radius: 0;
        margin-bottom: 40px;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    }
    
    .navbar-btn {
        box-shadow: none;
        outline: none !important;
        border: none;
    }
    
    .line {
        width: 100%;
        height: 1px;
        border-bottom: 1px dashed #ddd;
        margin: 40px 0;
    }
    
    /* ---------------------------------------------------
        SIDEBAR STYLE
    ----------------------------------------------------- */
    
    .wrapper {
        display: flex;
        width: 100%;
        align-items: stretch;
    }
    
    #sidebar {
        min-width: 250px;
        max-width: 250px;
        background: linear-gradient(90deg, rgba(177,203,215,1) 0%, rgba(207,224,232,1) 50%, rgba(253,253,254,1) 100%);
        color: #fff;
        transition: all 0.3s;
    }
    
    #sidebar.active {
        margin-left: -250px;
    }
    
    #sidebar .sidebar-header {
        background: #6d7fcc;
    }
    
    #sidebar ul.components {
        padding: 20px 0;
        background: linear-gradient(90deg, rgba(177,203,215,1) 0%, rgba(207,224,232,1) 50%, rgba(253,253,254,1) 100%);
    
    }
    
    #sidebar ul p {
        color: #fff;
        padding: 10px;
    }
    
    #sidebar ul li a {
        padding: 10px;
        font-size: 1.1em;
        display: block;
    }
    
    #sidebar ul li a:hover {
        color: #ffffff;
        background: #58789c;
    }
    
    #sidebar ul li.active>a,
    a[aria-expanded="true"] {
        color: #fff;
        background: #1c4f88;
    }
    
    a[data-toggle="collapse"] {
        position: relative;
    }
    
    .dropdown-toggle::after {
        display: block;
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
    }
    
    ul ul a {
        font-size: 0.9em !important;
        padding-left: 30px !important;
        background: #5a799eb4;
    }
    
    ul.CTAs {
        padding: 20px;
    }
    
    ul.CTAs a {
        text-align: center;
        font-size: 0.9em !important;
        display: block;
        border-radius: 5px;
        margin-bottom: 5px;
    }
    
    a.download {
        background: #fff;
        color: #7386D5;
    }
    
    a.article,
    a.article:hover {
        background: #6d7fcc !important;
        color: #fff !important;
    }
    
    /* ---------------------------------------------------
        CONTENT STYLE
    ----------------------------------------------------- */
    
    #content {
        width: 100%;
        min-height: 100vh;
        transition: all 0.3s;
    }
    
    /* ---------------------------------------------------
        MEDIAQUERIES
    ----------------------------------------------------- */
    
    @media (max-width: 768px) {
        #sidebar {
            margin-left: -250px;
        }
        #sidebar.active {
            margin-left: 0;
        }
        #sidebarCollapse span {
            display: none;
        }
    }
    </style>