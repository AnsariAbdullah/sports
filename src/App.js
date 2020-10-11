import React from 'react';
import { data } from './data';
import './App.css';

function App() {
  return (
    <div className="container">
			<div className="wrapper">
				{
					data.map((item, index) =>(
						<div key={index} className="card">
							<p className="league">League: {item.league.name}</p>
							<p className="country">Country: {item.league.country}</p>
							<p className="venue">Venue: {item.venue}</p>
							<div>
								<span className="team">
									<span>{item.homeTeam.team_name}</span>
									<img className="team-logo" src={item.homeTeam.logo} alt=""/>
								</span>
								<span> v/s </span>
								<span className="team">
									<span>{item.awayTeam.team_name}</span>
									<img className="team-logo" src={item.awayTeam.logo} alt=""/>
								</span>
							</div>
							<p>Score {item.goalsHomeTeam}-{item.goalsAwayTeam}</p>
							<img className="logo" src={item.league.logo} alt=""/>
						</div>
					))
				}
			</div>
    </div>
  );
}

export default App;
