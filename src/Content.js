import React from 'react';

function Content() {

    return (

        <div>
            <section className=''>
                <div id='carouselExamonly' class="carrousal slide" data-ride="carouse">
                    <div className='caraousa-inner'>
                        <div className='caraosal-item active'>
                            <img className='d-block w-100' src=' https://akm-img-a-in.tosshub.com/indiatoday/images/story/202103/jason-leung-cruS1hymaVQ-unspla_1200x768.jpeg?RfeDJxtRLY0HTxNTUnuCX9AAMg2PKf1e&size=1200:675' alt='first slide ' style={{ heght: "50px", width: "50px" }} />
                        </div>
                        <br></br>

                        <div className='caraosal-item active'>
                            <img className='d-block w-100' src=' https://i.gadgets360cdn.com/large/iPhone_camera_1615895489376.jpg' alt='second slide ' style={{ heght: "auto" }} />
                        </div>

                        <br></br>

                        <div className='caraosal-item active'>
                            <img className='d-block w-100' src='https://images.dailyobjects.com/marche/assets/images/homepage/desktop/Shop-By-Apple-Desktop.jpg?tr=cm-pad_crop,w-412,dpr-2 ' alt='third slide ' style={{ heght: "auto" }} />
                        </div>
                    </div>

                </div>
            </section>

            <section class="bg-light" id="about">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-12">
                            <h3 class="text-center mt-4 text-secondary">Know about us in react js </h3>
                        </div>
                    </div>

                    <div class="row">
                        <p class=" mt-4 mb-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                            like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </div>
                </div>
            </section>

            <section class="" id="destinations">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-12">
                            <h3 class="text-center mt-4 text-secondary">Favourite Destinations</h3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 mb-5">
                            <div class="card mt-4">
                                <img class="card-img-top" src="https://media.istockphoto.com/photos/fuji-japan-in-spring-picture-id876560704?k=20&m=876560704&s=612x612&w=0&h=ESL0O5Msbqh0jEs382NM_gh-2lRAvmA4QEgWZDvYffQ=" alt="" />
                                <div class="card-body">
                                    <h4 class="card-title text-secondary">Japan</h4>
                                    <p class="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                                </div>
                                <div class="card-footer">
                                    <a href="#" class="btn btn-primary">Find Out More!</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 mb-5">
                            <div class="card mt-4">
                                <img class="card-img-top" src="https://media.istockphoto.com/photos/mt-fuji-and-tokyo-skyline-picture-id893365942?s=612x612" alt="" />
                                <div class="card-body">
                                    <h4 class="card-title text-secondary">Tokyo</h4>
                                    <p class="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                                </div>
                                <div class="card-footer">
                                    <a href="#" class="btn btn-primary">Find Out More!</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 mb-5">
                            <div class="card mt-4">
                                <img class="card-img-top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAz1BMVEX/mTISiAf///8OiAD/m0L/+/bu+OwviSoAAIAAAHUAAH0AAHMAAHsAAGoAAHcAAG3u7vgAAF7g4O/09Pmfn8TJyeKbm83Y2OsYGIGlpcj6+v7v7/fi4vAAAFm9vd6vr9V8fKxPT5ORkbdfX58zM4+2ttJSUptpaaYaGoeIiLyMjLo4OI6VlcA1NYW/v9bS0ugkJIY+PpFxcakAAJOFhb2IiLJHR5MqKn9dXaFDQ45ycqxqaqkQEHZfX5IYGH2rq8kQEINMTKN1dbxERKYmJphqQlGuAAAFWUlEQVR4nO2b61OjOhiHe3Ju4Q4RGrnUWtullnZBXe1lV8W9/P9/0yboqtOXL+dL2Dnze2YaKaEzL48JeRNgNAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4j/wFjhn9DY4ZMXDM7+AkaS/miyf+tJhftMnQwbDhneQfSt/xXZtrbFdtlx/ygWMa1olcPvovOnzrdetxKQeNakgnYu+7nY1Tm1+uqtUlt087M66/FwPGNZyTk8pydbNYb6T86MRMstj5KOVmrZuLa1Ung0U2mBO5ttSpu7ZTs4aFDWNjxppQbdeO7SpZ1nqwDjSUk9SxuR1UydV1zsaZ3vNNF9mY5ddXSRWoWicdKLaBnKwc1WtmYdh9mRa6/K6LYtrtCcOZ6kHOapjghnFyY+kRpmRJ1z+SSpefdFF1+YlMWKkPsG4GiW4QJ5WjRph10DJ223Wb7tT561Z2y1gbrNVo5FRDhDeEk1grESe6xySx3nGl+5CjPuFVV68bS3EitJR4gPgGcCJVxzkVomshbKkTkTt9NfXUJ71ThVh2NZkQp6r7DDD6mHeSL9Tlc5vl4y4BaWaqqHURqc+s1kWjK07GebZVF+KF+UzfvJOVz20e5Cxfdmc7b3XLKVg+yVmhW0U717t1bR6oI33zg49xJ6rn2LOtEsHCnb6MyChk2S5lYiJYustYGMnXunarhmTzvce4k9LlznNawopAn+68ZGy7Zckk0X9YqZuJDIrnQ0KHu6XpEE07aXzubsKXVZImUBtyMlWDc3EWnRVq6J1OlKckaJ4PSMKNy/3GcIymnexd7jasuX0+z1rnKHsrb7x2Gk1br8mtvc5N6q5WH9Wo4/eGYzTsJPT1TFgNtJvnNZLU2zDpLYVVqnZSWmLpSbbxuomOXG7UcK1nyX5oNkjDTlp1hXW2ekse5jo1qbzPbOuJ5TqbZOul8Lbss6eTVzE/dNK2aq5otWaDNOzk2rav65eMI450wvbF22fWbeGr/MQvbq1s733RaVv0ksDmtf6J2SANOwm49Zath4fJXLJ9NBX3xUNohw/FvZhGeybnk8Nbd4ktHpgN0qyTRDkRyfh1dT51vDJLIxHHVf2jruJYRGlWeq8rJ0k7ToRyYnY136wT9T+/kiwrVjeLi1qqS2i49Hwhd+JcVl8reS52UvjeUjWSTNYXi5tVkTF59b5tmcCskzub2123yIp4Zu3KqhHy/D4Vd+mj7/qP6Z1I78+laKpyZ83iQk8Tw4P6zZ3RKM062XPOnV+5ukgPgWfdFMXFeep0tzGc9PyiKG4sLzikvxbupa4ym6GYdbLg9uX7VVbRlgv/YSMf+TOPcvPgL8r2/Z2M9NLmC6NRGnWSPXFr8/otF8nZ9EzN+urKf3HiV7WaEaq9iXhbIthY/CkzGaZZJ1w5keNv3z9xx5sooiiaRPaPr/aLE/frDzvq9io8h3/6/m0slRP+P3aCdkLB9YSCcYeC/ISCPJaC+U4PmBdTsH5CwTobBeuxPWDdnoL7Oz3gPiAF94t7wHMFFDx/0gOeU+oBz7P1gOcee8DzsT3gOeoe8Lx9D3gvowe8v9MH3vPqA+8D9hH2vDdqeAmJMLQTDd4v/v0Z/QOOGf0Ljhn9CY4Z/QGOgRMKnFDghAInFDihwAkFTihwQoETCpxQ4IQCJxQ4ocAJBU4ocEKBEwqcUOCEAicUOKHACQVOKHBCgRMKnFDghAInFDihwAkFTihwQoETCpxQ4IQCJxQ4ocAJBU4ocEKBEwqcUOCEAicUOKHACQVOKHBCgRMKnFDghAInFDihwAkFTihwQoETCpxQfgLggogk9hVd+AAAAABJRU5ErkJggg==" alt="" />
                                <div class="card-body">
                                    <h4 class="card-title text-secondary">India</h4>
                                    <p class="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                                </div>
                                <div class="card-footer">
                                    <a href="#" class="btn btn-primary">Find Out More!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="" id="places">
                <div class="container">
                    <div class="col-sm-12 col-md-12 mb-4">
                        <h3 class="text-center text-secondary mt-4">Places and Description</h3>
                    </div>
                    <div class="accordion" id="accordionExample">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <h2 class="mb-0">
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Tourist Places
                                    </button>
                                </h2>
                            </div>

                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingTwo">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Best Destination
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div class="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingThree">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Best Heritages
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div class="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="" id="places" />
            <div class="container">
                <div class="col-sm-12 col-md-12 mb-4">
                    <h3 class="text-center text-secondary mt-4">Places and Description</h3>
                </div>
                <div class="accordion" id="accordionExample">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Tourist Places
                                </button>
                            </h2>
                        </div>

                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Best Destination
                                </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div class="card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingThree">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Best Heritages in the react js
                                </button>
                            </h2>

                            <section class="bg-light mt-5" id="tourist" />
                            <div class="container">
                                <div class="row text-center">
                                    <div class="col-sm-12 col-md-12 mb-4">
                                        <h3 class="text-center mt-4 text-secondary">Tourist Opinions</h3>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="testimonial mb-5">
                                            <div class="avatar mx-auto">
                                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" class="rounded-circle z-depth-1 img-fluid" />
                                            </div>
                                            <h4 class="font-weight-bold dark-grey-text mt-4">Anna Deynah</h4>
                                            <h6 class="font-weight-bold blue-text my-3">Tourist</h6>
                                            <p class="font-weight-normal dark-grey-text">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                                                eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="testimonial mb-5">
                                            <div class="avatar mx-auto">
                                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" class="rounded-circle z-depth-1 img-fluid" />
                                            </div>
                                            <h4 class="font-weight-bold dark-grey-text mt-4">John Doe</h4>
                                            <h6 class="font-weight-bold blue-text my-3">Tourist</h6>
                                            <p class="font-weight-normal dark-grey-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam
                                                corporis suscipit laboriosam, nisi ut aliquid commodi.</p>
                                        </div>
                                    </div>

                                    <div className='col-md-4'>
                                        <div >
                                            <div >
                                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" class="rounded-circle z-depth-1 img-fluid" />
                                            </div>
                                            <h4 className='font -weight -bold mt-4'>Minaxi omkar</h4>
                                            <h6> Tourist</h6>
                                            <p>Lorem  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                                                corporis suscipit laboriosam, nisi ut aliquid commodi.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Content;