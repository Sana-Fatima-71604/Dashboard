import './DashboardSample.css';
import ReactCalendar from './ReactCalendar';

function DashboardSample() {

    const bar = ["Dashboard", "My Courses", "Messages", "Reports", "Settings"];
    const tr = ["Course Name", "Level", "Date", "Status"];
    const test = ["React Test","React Test", "React Test"];
    const table= ["Web Designs", "Illustrations", "Photoshop", "React", "Web Design"];
    const button = ["Completed", "Ongoing", "Intersted", "Completed", "Completed"];
    
    return (
        <div className="dashboard">
            <div className="sidenav">
                    <nav> 
                        <h2 className="h2" style={{marginBottom: "80px"}}>{"<LEARN/>"}</h2>           
                        <ul className="navbar-nav">
                            {                           
                                bar.map((bar, index) => {
                                    return (<li key = {index}>{bar}</li>
                                )})
                            }
                        </ul>
                    </nav>
            </div>
            <div className="main">
                <div className = "horizontalbar">
                    <nav>
                        <ul className='navbar-nav'>
                            <li className = "nav-item">
                                <form>
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                </form>
                            </li>
                            
                        </ul>
                    </nav>
                    <div>
                        <div>Profile</div>
                        <div>Notifications</div>
                    </div>
                </div>
                <div className="main-content">
                    <div className="main-content-main">
                        <p>WELCOME BACK</p>
                        <div id="section1">
                            <div className="my-0">
                                <div className="card text-center" id="card1"><p style={{color: "orange", fontSize: "80px", marginBottom: "2px", lineHeight: "1"}}>2</p><br/>Current Courses</div>
                                <div className="card text-center" id="card2"><p style={{color: "green", fontSize: "80px", marginBottom: "2px", lineHeight: "1"}}>5</p><br/>Completed Courses</div>
                                <div className="card text-center" id="card3"><p style={{color: "lightskyblue", fontSize: "80px", marginBottom: "2px", lineHeight: "1"}}>10</p><br/>Interested Courses</div>
                            </div>
                            <br/>
                            <div className="card" id="card4"><p style={{fontSize: "30px", lineHeight: "1", display: "flex", justifyContent: "space-between", marginTop: "10px", marginBottom: "15px"}}>My Courses<a href="/signin" style={{fontSize: "20px"}}>See all</a></p>
                            <br/>
                            <table>
                                <tr style={{color: "grey"}}>
                                    {
                                        tr.map((tr) => {
                                            return (<th>{tr}</th>)
                                        })
                                    }
                                </tr>
                                {table.map((table, index) => {
                                    return (<tr>
                                                <th style={{fontWeight: "normal"}}><i className="fa fa-cloud" style={{padding: "0px", fontSize: "20px"}}></i><p style={{padding: "0px", margin: "0px"}}>{table}</p><p>10 lessons</p></th>
                                                <th style={{fontWeight: "normal"}}>Advance</th>
                                                <th style={{fontWeight: "normal"}}>02 Jan, 2023</th>
                                                <th><button style={{borderRadius: "10px", fontWeight: "bold"}}>{button[index]}</button></th>
                                    </tr>)
                                })}
                            
                            </table>
                            </div>
                        </div>
                    </div>
                    <div className = "main-content-side">
                    <div className="card" id="test">
                                <p style={{fontSize: "30px", marginBottom: "20px", lineHeight: "1"}} className='text-center'>Test Schedule</p>
                                {
                                    test.map((test) => {
                                        return (
                                            <p style={{fontWeight: "normal"}}><i className="fa fa-cloud" style={{padding: "0px", fontSize: "20px", color: "rgb(17, 146, 252)"}}></i><p style={{padding: "0px", margin: "0px"}}>{test}</p><p style={{color: "grey"}}>September 02, 2023 from 1 pm to 3 pm</p></p>
                                        );
                                    })
                                }
                                
                                <hr className='lh-10'/>
                                <a href="/signin" className='text-center'>See all</a>
                            </div>
                            <div><ReactCalendar/></div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default DashboardSample;