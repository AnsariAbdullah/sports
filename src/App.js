import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

const Container = styled.div`
	width: 98%;
	margin: 15px auto;
`

const Wrapper = styled.section`
	display: grid;
	grid-template-columns: repeat(6, 1fr) ;
	grid-gap: 20px;
`

const Card = styled.div`
	padding: 15px;
	border-radius: 10px;
	box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.5);
	.board{
		text-align: center;
	}
	.team-logo {
		width: 80px;
	}
	.league-logo{
		width: 30px;
		img{
			width: 100%;
		}
	}
`

const App = (props) => {
	const [data, setData] = useState([]);
	
	useEffect(() => {
    fetch("https://v2.api-football.com/fixtures/league/524", {
      method: 'GET',
      headers: {  
        'X-RapidAPI-Key': '4ccae9d0e49ff1951e16201c88ae7ce5',
      }
    })   
    .then(response => response.json())
    .then((responseData) => {
			console.log(responseData.api.fixtures)
			setData(responseData.api.fixtures)
    })
    .catch(error => this.setState({ error }));
	}, []);
	
	return (
		<Container>
			<Wrapper>
				{
					data.map((item, index) =>(
						<Card key={index}>
							<div className="board">
								<img className="team-logo" src={item.homeTeam.logo} alt=""/>
								<img className="team-logo" src={item.awayTeam.logo} alt=""/>
							</div>
							<p className="team">{item.homeTeam.team_name} v/s {item.awayTeam.team_name}</p>
							<p className="league">League: {item.league.name}</p>
							<p className="country">Country: {item.league.country}</p>
							<p className="venue">Venue: {item.venue}</p>
							<p>Score {item.goalsHomeTeam}-{item.goalsAwayTeam}</p>
							<div className="league-logo">
								<img  src={item.league.logo} alt=""/>
							</div>
						</Card>
					))
				}
			</Wrapper>
    </Container>
	);
}
 
export default App;
