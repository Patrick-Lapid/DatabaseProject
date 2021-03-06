import React from 'react'
import "./data-exploration.css";
import Query1 from "../components/Query1/Query1";
import Query2 from "../components/Query2/Query2";
import Query3 from "../components/Query3/Query3";
import Query4 from '../components/Query4/Query4';


function DataExplorationPage() {

  return (
    <div className="App">
      <h1>Trends in Outcome Status of Suspects and Victims by Age Range</h1>
      <h3>Which age group is most likely to be injured, dead, arrested, unharmed? How does that overall proportion of victims and suspects compare across age ranges?</h3>
      <div>
      <Query1 />
      <p className='paragraph'>
        These charts are produced by obtaining the total number of victims in each outcome category and displaying the results grouped by three specified age ranges. Looking at the graph on the left, viewers can identify trends of which age groups are proportionally associated with the outcome status of the person involved in the incident. The bar chart displays the computed proportion of each outcome category within each age range. Additionally, this result can be filtered by a time frame. The pie charts display the total number of victims and suspects broken down by age range, allowing viewers to identify trends in which age groups are more involved in shootings, as both victims and suspects. For example, based on the data from 2013 to 2015, it is clear that the majority of suspects and victims are over the age of 26. Moreover, few overall percentages of children are involved in gun violence incidents.
      </p>
      </div>
      <h1>Number of Incidents of Gun Violence In Each State Compared with State Income Levels</h1>
      <h3>Which state in the United States has the most gun crimes and how does it compare to their average income level?</h3>
      <h3>How does the proportional number of cases of gun crimes in each state compare each year?</h3>
      <Query2 />
      <p className='paragraph'>These visuals query the average income level of each state and plots this with the total number of gun incidents that occured in the state. This plot can also be filtered by a specified time frame, in which the per capita income will be an average of the included years. The name of specific states in the scatter plot is displayed on hover of a specific point. The map displays the results of a query for percentage calculation of gun incidents by state, with darker shades of red displayed corresponding to higher percentages of gun incidents in that state. This involves querying the total number of gun incidents per state and dividing that integer by the total number of incidents in the United States for the given time frame. This section of the data exploration page allows users to identify trends in income level with the amount of gun violence. From the 2014 data display, no apparent pattern is obvious, but users can explore specific incidents of interest. For example, although California has the highest per capita income, shown in the scatter plot, it also has a higher percentage of gun incidents, as compared to other states, looking at the map.
      </p>
      <h1>Vizualizing Associations Between Gender of Shooters and Victims</h1>
      <h3>How does the average number of victims per gender differ based on the gender of the suspect? In other words, does the gender of the suspect have a relationship to the gender of the victim?</h3>
      <Query3 />
      <p className='paragraph'>
        Here, a query of the total number of female and male suspects is used to compute a percentage to display in the left-most pie chart. Moreover, queries that break up the number of male victims of female shooters and female victims of male shooters are used for the right two pie charts. From these graphics, it is clear that many more males are victims of gun violence. Moreover, it is interesting to see that the percentage of male victims and female victims shot by the opposite gender is almost the same.
      </p>
      <h1>Gun Violence Incidents Involving Stolen Guns Over Time</h1>
      <h3>What percentage of the total incidents per state involved stolen guns?</h3>
      <Query4 />
      <p className='paragraph'>
        To display the percentage of incidents involving stolen guns for each state, a query of the number of incidents involving a stolen gun in a specified state divided by query for total incidents in that state is used. These values are shown in the scatter plot for the selected year. This data shows an interesting pattern of the increase in stolen guns associated with gin violence of the years 2013-2015.
      </p>
    </div>
  );
}

export default DataExplorationPage;