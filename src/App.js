import React from 'react';
import { data } from './data';
import styled from 'styled-components'

const Wrapper = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
	grid-gap: 10px;
`

const Card = styled.div`
	padding: 15px;
	border: 1px solid #000;
	.team-logo {
		width: 35px;
	}
`

function App() {
  return (
    <div className="container">
			<Wrapper className="wrapper">
				{
					data.map((item, index) =>(
						<Card key={index} className="card">
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
						</Card>
					))
				}
			</Wrapper>
    </div>
  );
}

export default App;
