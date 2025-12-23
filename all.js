let all_links = document.querySelectorAll(".content .all_links a ");
let section = document.querySelector(".livedemo");
all_links.forEach((e) => {
    e.onclick = function(event) {
        event.preventDefault();
        if (e.id === "one") {
            section.innerHTML = `
              <div class="row">
               <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/Logo.jpg" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">John Doe</h5>
                                            <a href="https://omar-rehann.github.io/John-Doe/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/urban.png" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Urban</h5>
                                            <a href="https://omar-rehann.github.io/urban/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/cv (2).jpg" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">CV</h5>
                                            <a href="https://omar-rehann.github.io/CV/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/metup.png" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Met-Up</h5>
                                            <a href="https://omar-rehann.github.io/Met-Up/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/multi.png" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Multi Profile</h5>
                                            <a href="https://omar-rehann.github.io/Multi-Porfile/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/leon.png" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Loen Template</h5>
                                            <a href="https://omar-rehann.github.io/Loen-Template/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/hawk.png" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Hawk Design</h5>
                                            <a href="https://omar-rehann.github.io/Hawk-Design/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/dash.jpg" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">DashBoard</h5>
                                            <a href="https://omar-rehann.github.io/Dashborad/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>

                            </div>
            
        
            `
        } else if (e.id == "two") {

            section.innerHTML = `
              <div class="row">
              <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/ress.png" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Resturant</h5>
                                            <a href="https://omar-rehann.github.io/Resturant/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>

                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/footcap.png" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Foot Cap</h5>
                                            <a href="https://omar-rehann.github.io/Foot-Cap/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>

                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/insustral.jpg" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Industral</h5>
                                            <a href="https://omar-rehann.github.io/Industal/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/carservies.png" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Car -Services</h5>
                                            <a href="https://omar-rehann.github.io/Car-Services/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/eduction.jpg" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Eduction</h5>
                                            <a href="https://omar-rehann.github.io/Eduction/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/elisa.png" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Elisa</h5>
                                            <a href="https://omar-rehann.github.io/Elisa/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/gym.png" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Gym</h5>
                                            <a href="https://omar-rehann.github.io/Gym/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/unika.jpg" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Unika</h5>
                                            <a href="https://omar-rehann.github.io/Unika/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/photo.jpg" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Lugx</h5>
                                            <a href="https://omar-rehann.github.io/Lugx/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                 <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/start.png" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">flex Start</h5>
                                            <a href="https://omar-rehann.github.io/Flex-Start/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/study.jpg" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Online Study</h5>
                                            <a href="https://omar-rehann.github.io/Online-study/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                  

                            </div>
                            
            
            `
        } else if (e.id == "three") {

            section.innerHTML = `
                 <div class="row">
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/shoes.png" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Dynamic Collection</h5>
                                            <a href="https://omar-rehann.github.io/Dynamic-Collection/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                
                               
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/digital.png" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Digital Marketing</h5>
                                            <a href="https://omar-rehann.github.io/Digital-Marketing/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/shopy.png" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">ShopyKart</h5>
                                            <a href="https://omar-rehann.github.io/ShopyKart/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/markey.png" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Grocery Mart</h5>
                                            <a href="https://omar-rehann.github.io/Grocery-Mart/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/crud.png" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">CRUD</h5>
                                            <a href="https://omar-rehann.github.io/Crud-Applction/" class="btn">Live Demo</a>
                                        </div>
                                    </div>
                                    

                                </div>
                                  <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/api.jpeg" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Api Github</h5>
                                            <a href="https://omar-rehann.github.io/Github-Clone/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                   <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/warther.jpeg" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Weather</h5>
                                            <a href="https://omar-rehann.github.io/Weather-App/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                 <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/gemni.png" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Gemni Ai </h5>
                                            <a href="https://omar-rehann.github.io/Gemni-Ai/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                   <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/cava.png" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Cave Ecommerce </h5>
                                            <a href="https://omar-rehann.github.io/Cava-Ecommerce/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/elec.png" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Electronic Mart</h5>
                                            <a href="https://omar-rehann.github.io/Electonic-Mart/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/vq.png" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">V1 E-Commerce </h5>
                                            <a href="https://omar-rehann.github.io/V1/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                 <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/inote.png" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">INote Company</h5>
                                            <a href="https://omar-rehann.github.io/INote-Company/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>




                            </div>
            `
        } else if (e.id == "four") {
            section.innerHTML = `
             <div class="row">
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/hungman.jpeg" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Hungman</h5>
                                            <a href="https://omar-rehann.github.io/Hungman-Game/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/gusess.jpeg" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Gusses Word</h5>
                                            <a href="https://omar-rehann.github.io/Gusses-Word/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>

                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/memory.jpeg" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Memory Game</h5>
                                            <a href="https://omar-rehann.github.io/Memory-Game/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/todlo.jpeg" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">ToDoList</h5>
                                            <a href="https://omar-rehann.github.io/Todolist/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/speed.jpeg" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Typing Speed</h5>
                                            <a href="https://omar-rehann.github.io/Typing-Speed/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/tic.jpeg" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Tic Tac Toe</h5>
                                            <a href="https://omar-rehann.github.io/Tic-Tac-Toe/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>

                            </div>


`
        } else if (e.id == "five") {
            section.innerHTML = `
               <div class="row">
                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/drink.png" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Drink Water</h5>
                                            <a href="https://omar-rehann.github.io/Drink-Water/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/ver.png" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Verfiy Account</h5>
                                            <a href="https://omar-rehann.github.io/Verfiy-Account/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>

                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/te.jpeg" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Football Team</h5>
                                            <a href="https://omar-rehann.github.io/Football-Team/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                             
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/stopwatch.jpeg" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Stop Watch</h5>
                                            <a href="https://omar-rehann.github.io/Stop-Watch/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>

                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/notebad.jpeg" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Note Bad</h5>
                                            <a href="https://omar-rehann.github.io/Note-Bad/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/calc.jpeg" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Calculator</h5>
                                            <a href="https://omar-rehann.github.io/Calculator/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/speed.jpeg" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Generate Password</h5>
                                            <a href="https://omar-rehann.github.io/Generate-Password/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                 <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/startbacks.png" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">StarBacks</h5>
                                            <a href="https://omar-rehann.github.io/StarBacks/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/adidas.png" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Adidas</h5>
                                            <a href="https://omar-rehann.github.io/Adidas/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/iphone.png" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Iphone</h5>
                                            <a href="https://omar-rehann.github.io/Iphone/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                 <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/temo.jpeg" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Convert Temperture</h5>
                                            <a href="https://omar-rehann.github.io/Convert-Temperture/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/clender.jpeg" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Clender</h5>
                                            <a href="https://omar-rehann.github.io/Clender/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/digital.jpeg" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Digital clock</h5>
                                            <a href="https://omar-rehann.github.io/Digital-Clock/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/coun.jpeg" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Api Countery</h5>
                                            <a href="https://omar-rehann.github.io/Api-countery/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>
                              
                                  <div class="col-md-6 col-lg-4">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/quiz.png" style="width: 100%;height: 200px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Quiz App</h5>
                                            <a href="https://omar-rehann.github.io/Quiz-App/" class="btn">Live Demo</a>
                                        </div>
                                    </div>

                                </div>

                            </div>
            
            `
        } else if (e.id == "six") {
            section.innerHTML = `
                <div class="row">
                <div class="col-md-6">
                <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/porfiloo.png" style="width: 100%; alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title"> Personal Portfilo</h5>
                                            <a href="https://omar-rehann.github.io/Portfilo-react/" class="btn">Live Demo</a>
                                        </div>
                                    </div>
               </div>
              
               <div class="col-md-6 ">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/cavareact.png" style="width: 100%;" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Cave Ecommerce </h5>
                                            <a href="https://omar-rehann.github.io/Ecommerce-Website/" class="btn">Live Demo</a>
                                        </div>
                                    </div>
                 
            </div>
             <div class="col-md-6 ">
                                    <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/vq.png" style="width: 100%;height: 225px;" class="card-img-top rounded" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Ecom-Hub </h5>
                                            <a href="https://omar-rehann.github.io/Ecom-Hub/" class="btn">Live Demo</a>
                                        </div>
                                    </div>
                 
            </div>
             <div class="col-md-6">
                <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/youtube.png" style="width: 100%; alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Youtube Clone</h5>
                                            <a href="https://omar-rehann.github.io/Youtube-Clone/" class="btn">Live Demo</a>
                                        </div>
                                    </div>
               </div>
                <div class="col-md-6">
                <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/inote.png" style="width: 100%; alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">INote Company</h5>
                                            <a href="https://omar-rehann.github.io/INotee-Company/" class="btn">Live Demo</a>
                                        </div>
                                    </div>
               </div>
             <div class="col-md-6">
                <div class="card mt-2" style="width: 100%;">
                                        <img src="imgproject/medical.png" style="width: 100%; alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">Medical Website</h5>
                                            <a href="https://omar-rehann.github.io/Medical-Website/" class="btn">Live Demo</a>
                                        </div>
                                    </div>
               </div>

            
            `
        } else if (e.id == "seven") {
            section.innerHTML = `
                <div class="row">
                <div class="col-md-6 mt-5 col-lg-6">
                    <div class="icon mt-5 mb-5">
                        <div class="icon text-center">
                        <img src="online.png" class="w-100 rounded ">
                        </div>
                    </div>
                </div>
                  <div class="col-md-6 mt-5 col-lg-6">
                        <div class="icon mt-5 mb-5">
                            <div class="icon text-center">
                            <img src="img/o1.png" class="w-100 rounded ">
                            </div>
                        </div>
                  </div>
                     <div class="col-md-6 mt-5 col-lg-6">
                        <div class="icon mt-5 mb-5">
                            <div class="icon text-center">
                            <img src="img/o2.png" class="w-100 rounded ">
                            </div>
                        </div>
                  </div>
                     <div class="col-md-6 mt-5 col-lg-6">
                        <div class="icon mt-5 mb-5">
                            <div class="icon text-center">
                            <img src="img/o3.png" class="w-100 rounded ">
                            </div>
                        </div>
                  </div>
                     <div class="col-md-6 mt-5 col-lg-6">
                        <div class="icon mt-5 mb-5">
                            <div class="icon text-center">
                            <img src="img/o4.png" class="w-100 rounded ">
                            </div>
                        </div>
                  </div>
                     <div class="col-md-6 mt-5 col-lg-6">
                        <div class="icon mt-5 mb-5">
                            <div class="icon text-center">
                            <img src="img/s1.png" class="w-100 rounded ">
                            </div>
                        </div>
                  </div>
            </div>
            
            `
        } else {
            section.innerHTML = `
              <div class="row">
                                <div class="col-md-12">
                                    <div class="text mt-5 mb-5 text-center">
                                        <h2 class="text-light">Choose One Link Please <i class="fa-solid fa-hand-point-up fa-beat-fade" style="margin-left: 20px;"></i></h2>
                                    </div>
                                </div>
                            </div>
            
            `

        }

    }

})