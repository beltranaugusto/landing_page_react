import React from "react";

const Card = () => {
    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 my-3 px-4">
            <div className="card g-0">
                <img src="https://picsum.photos/500/325" class="card-img-top" alt="..."/>
                <h5 className="card-title text-center mt-3 mb-0">Card Title</h5>
                <div className="card-body">
                    <p className="card-text text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem beatae corrupti laboriosam illum sapiente? Libero vero provident cum inventore.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-center">
                        <a href="#" class="btn btn-primary">Find Out More!</a>
                    </li>
                </ul>
            </div>
        </div>
        
    )
}

export default Card;