import React, {useState, useEffect} from 'react';
import Popup from '../components/Popup.js';

function ResourcesPage() {
    const [opened, setOpened] = useState(false);
    const [databaseInfo, setDatabaseInfo] = useState();

    const toggleWindow = () => {
        setOpened(!opened);
    }

    useEffect(() => {
      
        const fetchData = async () => {
          try{
            
            fetch(`http://127.0.0.1:8000/api/query7/`)
              .then(res => res.json())
              .then(json => {
                setDatabaseInfo(json);
                console.log(json.totalGuns);
            })
  
          } catch(error) {
            console.log("error: ", error);
          }
  
        }
        
        fetchData();
      }, []) 

    return(
        <>
            {/* Main Content */}
            <section className="landing-main">
                <div className='flex-container'>
                    <h1>Analysis of Gun Violence in the United States</h1>
                    <div className='container-item'>
                        <h2>
                            Description of Dataset:
                        </h2>
                        <p>
                        The data that we have selected comes from Gun Violence Archive (GVA), 
                        which is a non profit corporation that provides free access to accurate 
                        information about gun-related violence in the United States. All of the 
                        data that GVA provides has been checked for accuracy before being posted 
                        online. The actual data that we have selected consists of over 260k records 
                        of gun violence in the United States, occurring from January 2013 through 
                        March 2018. 
                        </p>
                        <button onClick={toggleWindow}>Database Stats</button>
                        {opened && <Popup 
                            content={<>
                                <h4 className="textbox">Database Tuples</h4>
                                <b className="textbox">totalGuns: {databaseInfo.totalGuns}</b>
                                <br></br>
                                <b className="textbox">totalCrimes: {databaseInfo.totalCrimes}</b>
                                <br></br>
                                <b className="textbox">totalPeople: {databaseInfo.totalPeople}</b>
                                <br></br>
                                <b className="textbox">totalStates: {databaseInfo.totalStates}</b>
                            </>}
                            handleClose={toggleWindow}
                        />}
                        <br></br>
                        <a href='https://www.gunviolencearchive.org/'>Link to Gun Violence Archive (GVA)</a>
                        <br></br>
                        <a href='https://github.com/jamesqo/gun-violence-data'>Link to Dataset</a> 
                    </div>

                    <div className='container-item'>
                        <h2>Project Description:</h2>

                        <h3>Purpose:</h3>
                        <p>

                        In the United States, gun violence has dominated headlines, conversation, and political debates for decades. Incidents involving gun violence have continued to contribute to the emotional and persistent debate over the amount and control of guns in the United States. Gun violence in America affects all of us in some way, and recently has become way too established and familiar in our  society. By administering this tool for comprehensible data analysis on gun-violence, the hope is that the app will equip users to form more educated opinions on gun safety concerns and develop a better understanding of the relationships involved in these incidents.

                        </p>

                        <h4>Authors:</h4>
                        <ul>
                            <li>Vincent Fleming</li>
                            <li>Patrick Lapid</li>
                            <li>Skylar McCain</li>
                            <li>Xian Zhang</li>
                        </ul>

                        <a href='https://github.com/Patrick-Lapid/DatabaseProject'>Link to GitHub Repository</a>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ResourcesPage;