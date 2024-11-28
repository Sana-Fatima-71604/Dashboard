import './Dashboard.css';

function Dashboard() {

    return (<div className="card" id="dashboard">
        <nav>
            <ul className='nav justify-content-center'>
               <li className = "nav-item">Side navbar</li>
               <li className = "nav-item">Search</li>
               <li className = "nav-item">Account</li> 
            </ul>
        </nav>
   
            <div id="section1">
                <p> Welcome back John </p><br/>
                <div>
                    <div className="card" id="card1">Current Courses</div>
                    <div className="card" id="card2">Completed Courses</div>
                    <div className="card" id="card3">Interested Courses</div>
                </div>
                <br/>
                <div className="card" id="card4">My Courses</div>
            </div>
            <div id="section2">
                <div className="card">Test Schedule</div>
                <div className="card">Calender</div>
            </div>
        </div>)
}

export default Dashboard;