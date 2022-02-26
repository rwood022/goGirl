import React from 'react'; 

export default function Timeline() {

    return (
    <div> 
        <div className="post full-width">
            <div className="container card-body mb-2">
                <h5 className="mb-0">Username</h5>
                <small>3 days ago</small><br></br>
                {/* <small>Timestamp variable goes here</small> */}
            </div>
            
            <div className="card-body">
                <div className="card-body">
                    This is where the message goes...
                </div> 
                <hr></hr>
                <div className="card-body">
                    This is where the responses go...
                </div>
            </div>

            <div className="card-footer">
                <a href="/" className="d-inline-block text-muted response-icons">
                    <strong>23</strong>
                    <small >  Likes</small>
                </a>
                <a href="/" className="d-inline-block text-muted response-icons">
                    <strong>12</strong><small>  Comments</small>
                </a>
                <a href="/" className="d-inline-block text-muted response-icons">
                <strong>3</strong><small> Shares</small>
                </a>
            </div>
        </div>
    </div>
    ); 
}
    
