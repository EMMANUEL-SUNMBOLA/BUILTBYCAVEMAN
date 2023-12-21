// function putNav(id){
    const nav = document.querySelector('nav');
    nav.innerHTML = `        <div class="nav-big">
    <div class="left">
        <ul>
            <li><a href="index.html">home</a></li>
            <li><a href="work.html">work</a></li>
            <li><a href="about.html">about</a></li>
        </ul>
    </div>
    <div class="center">
        <h5>BUILT BY</h5>
        <img src="images/logo-plain@2x.png" alt="">
    </div>
    <div class="right">
        <ul>
            <li><a href="feed.html">feeds</a></li>
            <li><a href="job.html">jobs</a></li>
            <li><a href="contact.html">contact</a></li>
        </ul>
    </div>            
</div>
<div class="nav-sml">
        <img src="images/logo-plain@2x.png" alt="">
        <div class="pages">
            <p><a href="index.html">home</a></p>
            <p><a href="work.html">work</a></p>
            <p><a href="about.html">about</a></p>
            <p><a href="feed.html">feed</a></p>
            <p><a href="job.html">jobs</a></p>
            <p><a href="#">contact</a></p>
        </div>
</div>
</nav>`;
// }

const foot = document.querySelector('footer');
foot.innerHTML = '<hr><h4>we are proud to be reccomended by these fine folks:</h4><div class="partner"><p><i class="fa-brands fa-shopify">shopify</i> partners</p><p><i class="fa-brands fa-mailchimp">mailchimp</i><br>partners</p></div><h4>Copyright &:copy 2006-2089 <p><a href="https://builtbycaveman.netlify.app/">Built by Caveman</a></p> limited all rights reserved</h4><h4>registered in nigeria compay no.86848 </h4><h4><p><a href="#">Read the boring legal stuff</a></p></h4>';

const conn = document.getElementById('conn');
conn.innerHTML = '<a href="#"><div class="sub"><div class="icon" title="proposal planner"><i class="fa-solid fa-map"></i></div><h1>project planner</h1><p>Interested in working with us? Launch a proposal planner to get started</p><button>launch it</button></div></a><div id="sub"><div class="icon" title="Connect"><i class="fa-solid fa-message"></i></div><h1>connect</h1><p><a href="#" id="buffalink">hello@builtbybuffalo.com</a></p></div><a href="#"><div class="sub"><div class="icon" title="Get in touch"><i class="fa-solid fa-calendar"></i></div><h1>calendly</h1><p>Schedule a time to talk to us and get things moving.</p><button>book in</button></div></a>';


