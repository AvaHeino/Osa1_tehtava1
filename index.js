import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = (props) => {
	return (
		<h1>{props.kurssiNimi}</h1>
		)
}

const Osa = (props) => {
	return (
		<p>{props.osa} {props.tehtavia}</p>
	)
}
const Sisalto = (props) => {
	const osat = props.osatTaulukko;

	return (
		<div>
			<Osa osa={osat[0].nimi} tehtavia={osat[0].tehtavia} />
			<Osa osa= {osat[1].nimi} tehtavia={osat[1].tehtavia}  />
			<Osa osa= {osat[2].nimi} tehtavia={osat[2].tehtavia} />
		</div>
	)
}

const Yhteensa = (props) => {
	const osa = props.osatTaulu;
	return (
		<p>yhteensa {osa[0].tehtavia + osa[1].tehtavia + osa[2].tehtavia } tehtavaa</p>
	)
}
const App = () => {
	const kurssi = {
		nimi: 'Half Stack - sovelluskehitys',
		osat: [
		{
			nimi: 'Reactin perusteet',
			tehtavia: 10
		},
		{
			nimi: 'Tiedonvalitys propseilla',
			tehtavia: 7
		},
		{
			nimi: 'Komponenttien tila',
			tehtavia: 14
		}
		]
	}

	return (
		<div>
			<Otsikko kurssiNimi={kurssi.nimi} />
			<Sisalto osatTaulukko = {kurssi.osat} />
			<Yhteensa osatTaulu = {kurssi.osat}/>
		</div>
		)
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
	)