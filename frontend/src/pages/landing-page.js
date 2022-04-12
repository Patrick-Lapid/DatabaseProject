import React from 'react'

function LandingPage() {
    return(
        <>
            {/* Main Content */}
            <section className="landing-main">
                <div className='flex-container'>
                    <div className='container-item'>
                        <h1 style={{color:'white'}}>Gun Violence in the United States: Data Exploration</h1>
                        <p>
                        This web app is intended to provide visual data exploration and 
                        organized trend display on gun violence in the United States. 
                        This app should be used as a resource to reference data and discover 
                        trends in incidents of gun-violence in the United States over the years 
                        of 2013 to 2018. Graphs, maps, and other visual displays are included 
                        to make trends easy to identify and quantitative statistics straightforward 
                        to find.
                        </p>
                    </div>
                </div>
            </section>
        
        </>
    )
}

export default LandingPage;