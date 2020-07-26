import React from 'react'
import {Form} from 'semantic-ui-react';

export default class CharacterForm extends React.Component {

	// In the line 135 is the onSkillPick function and in that function needs to be some additions which makes 
	// selected options disabled for all the available selections between line 184 and 227.

	constructor(props) {
		super(props);
		this.state = {
			class:"",
			skillproficiencies:[],
			skillproficiency1:"",
			skillproficiency2:"",
			skillproficiency3:"",
			skillproficiency4:"",
			skillboard: [],
			barbarianskills: ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"],
			bardskills: ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"],
			clericskills: ["History", "Insight", "Medicine", "Persuasion", "Religion", ],
			druidskills: ["Animal Handling", "Arcana", "Insight", "Medicine", "Nature", "Perception", "Religion", "Survival"],
			fighterskills: ["Acrobatics", "Animal Handling", "Athletics", "History", "Insight", "Intimidation", "Perception", "Survival"],
			monkskills: ["Acrobatics", "Athletics", "History", "Insight", "Religion", "Stealth"],
			paladinskills: ["Athletics", "Insight", "Intimidation", "Medicine", "Persuasion", "Religion"],
			rangerskills: ["Animal Handling", "Athletics", "Insight", "Investigation","Nature", "Perception", "Stealth", "Survival"],
			rogueskills: ["Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Performance", "Persuasion", "Sleight of Hand", "Stealth"],
			sorcererskills: ["Arcana", "Deception", "Insight", "Intimidation", "Persuasion", "Religion"],
			warlockskills: ["Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"],
			wizardskills: ["Arcana", "History", "Insight", "Investigation", "Medicine", "Religion"],
			id:0
		}
	}

    onClassPick = (event) => {
		let state = {};
		state[event.target.name] = event.target.value
		this.setState(state);
		this.setState({ skillproficiencies: [] });
		document.getElementById("skillproficiency1").value = "";
		document.getElementById("skillproficiency2").value = "";
		document.getElementById("skillproficiency3").value = "";
		document.getElementById("skillproficiency4").value = "";
		document.getElementById("skillproficiency1").disabled = false;
		document.getElementById("skillproficiency2").disabled = false;
		document.getElementById("skillproficiency3").disabled = false;
		document.getElementById("skillproficiency4").disabled = false;
		document.getElementById("skillproficiency1").hidden = false;
		document.getElementById("skillproficiency2").hidden = false;
		document.getElementById("skillproficiency3").hidden = false;
		document.getElementById("skillproficiency4").hidden = false;
 
		if (event.target.value === "Barbarian") {
			this.setState({ skillboard: this.state.barbarianskills});
			document.getElementById("skillselect1").hidden = false;
			document.getElementById("skillselect2").hidden = false;
			document.getElementById("skillselect3").hidden = true;
			document.getElementById("skillselect4").hidden = true;				
		}
		if (event.target.value === "Bard") {
			this.setState({ skillboard: this.state.bardskills});
			document.getElementById("skillselect1").hidden = false;
			document.getElementById("skillselect2").hidden = false;
			document.getElementById("skillselect3").hidden = false;
			document.getElementById("skillselect4").hidden = true;
		}
		if (event.target.value === "Cleric") {
			this.setState({ skillboard: this.state.clericskills});
			document.getElementById("skillselect1").hidden = false;
			document.getElementById("skillselect2").hidden = false;
			document.getElementById("skillselect3").hidden = true;
			document.getElementById("skillselect4").hidden = true;
		}
		if (event.target.value === "Druid") {
			this.setState({ skillboard: this.state.druidskills});
			document.getElementById("skillselect1").hidden = false;
			document.getElementById("skillselect2").hidden = false;
			document.getElementById("skillselect3").hidden = true;
			document.getElementById("skillselect4").hidden = true;
		}
		if (event.target.value === "Fighter") {
			this.setState({ skillboard: this.state.fighterskills});
			document.getElementById("skillselect1").hidden = false;
			document.getElementById("skillselect2").hidden = false;
			document.getElementById("skillselect3").hidden = true;
			document.getElementById("skillselect4").hidden = true;
		}
		if (event.target.value === "Monk") {
			this.setState({ skillboard: this.state.monkskills});
			document.getElementById("skillselect1").hidden = false;
			document.getElementById("skillselect2").hidden = false;
			document.getElementById("skillselect3").hidden = true;
			document.getElementById("skillselect4").hidden = true;
		}
		if (event.target.value === "Paladin") {
			this.setState({ skillboard: this.state.paladinskills});
			document.getElementById("skillselect1").hidden = false;
			document.getElementById("skillselect2").hidden = false;
			document.getElementById("skillselect3").hidden = true;
			document.getElementById("skillselect4").hidden = true;
		}
		if (event.target.value === "Ranger") {
			this.setState({ skillboard: this.state.rangerskills});
			document.getElementById("skillselect1").hidden = false;
			document.getElementById("skillselect2").hidden = false;
			document.getElementById("skillselect3").hidden = false;
			document.getElementById("skillselect4").hidden = true;
		}
		if (event.target.value === "Rogue") {
			this.setState({ skillboard: this.state.rogueskills});
			document.getElementById("skillselect1").hidden = false;
			document.getElementById("skillselect2").hidden = false;
			document.getElementById("skillselect3").hidden = false;
			document.getElementById("skillselect4").hidden = false;
		}
		if (event.target.value === "Sorcerer") {
			this.setState({ skillboard: this.state.sorcererskills});
			document.getElementById("skillselect1").hidden = false;
			document.getElementById("skillselect2").hidden = false;
			document.getElementById("skillselect3").hidden = true;
			document.getElementById("skillselect4").hidden = true;
		}
		if (event.target.value === "Warlock") {
			this.setState({ skillboard: this.state.warlockskills});
			document.getElementById("skillselect1").hidden = false;
			document.getElementById("skillselect2").hidden = false;
			document.getElementById("skillselect3").hidden = true;
			document.getElementById("skillselect4").hidden = true;
		}
		if (event.target.value === "Wizard") {
			this.setState({ skillboard: this.state.wizardskills});
			document.getElementById("skillselect1").hidden = false;
			document.getElementById("skillselect2").hidden = false;
			document.getElementById("skillselect3").hidden = true;
			document.getElementById("skillselect4").hidden = true;
		}
	}

	onSkillPick = (event) => {
		let state = {};
		state[event.target.name] = event.target.value
		this.setState(state);

		const pick = event.target.value;
		{if (event.target.value === "") {
			this.setState({ skillproficiencies: this.state.skillproficiencies });
			event.target.disabled = false
			event.target.hidden = false
		} else {
			this.setState({ skillproficiencies: [...this.state.skillproficiencies, pick] });
			event.target.disabled = true
			event.target.hidden = true
		}}
	}
		
	render() {
		let divStyle={width:500, margin:"auto",height:280}
		
		return(
		<div style={divStyle}>
		    <Form onSubmit={this.onSubmit}>
				<Form.Field>
					<h3>Select your class</h3>
					<label htmlFor="class">Class:</label>
					<select 
						   name="class"
						   onChange={this.onClassPick}
						   value={this.state.class}>
							   <option hidden={true}>Class Options</option>
                               <option hidden={true} disabled="disabled" default={true}>Class Options</option>
                               <option value="Barbarian">Barbarian</option>
                               <option value="Bard">Bard</option>
                               <option value="Cleric">Cleric</option>
                               <option value="Druid">Druid</option>
							   <option value="Fighter">Fighter</option>
                               <option value="Monk">Monk</option>
                               <option value="Paladin">Paladin</option>
                               <option value="Ranger">Ranger</option>
							   <option value="Rogue">Rogue</option>
                               <option value="Sorcerer">Sorcerer</option>
                               <option value="Warlock">Warlock</option>
                               <option value="Wizard">Wizard</option>
					</select>
				</Form.Field>

				<Form.Field>
					<h3>Choose your class skill proficiencies below once you select your class</h3>
                    <div id="skillselect1" hidden={true}>
				    <label htmlFor="skillproficiency1">Selected Skills Proficieny &nbsp; : &nbsp; &nbsp; &nbsp; {this.state.skillproficiencies[0]}</label>
					<select 
					    name="skillproficiency1"
					    id="skillproficiency1"
					    onChange={this.onSkillPick}>
						    <option hidden={true}>Waiting for assignment...</option>
                            <option hidden={true} disabled="disabled" default={true}>Waiting for assignment...</option>
						    { this.state.skillboard.filter(value => (value !== this.state.skillproficiencies[0]) && (value !== this.state.skillproficiencies[1]) && (value !== this.state.skillproficiencies[2]) && (value !== this.state.skillproficiencies[3])).map((value, index) => <option key={index} value={value}> {value} </option>)}
				    </select>
					</div>

					<div id="skillselect2" hidden={true}>
					<label htmlFor="skillproficiency2">Selected Skills Proficieny &nbsp; : &nbsp; &nbsp; &nbsp; {this.state.skillproficiencies[1]}</label>
					<select 
					    name="skillproficiency2"
					    id="skillproficiency2"
					    onChange={this.onSkillPick}>
						    <option hidden={true}>Waiting for assignment...</option>
                            <option hidden={true} disabled="disabled" default={true}>Waiting for assignment...</option>
						    { this.state.skillboard.filter(value => (value !== this.state.skillproficiencies[0]) && (value !== this.state.skillproficiencies[1]) && (value !== this.state.skillproficiencies[2]) && (value !== this.state.skillproficiencies[3])).map((value, index) => <option key={index} value={value}> {value} </option>)}
				    </select>
					</div>

					<div id="skillselect3" hidden={true}>
					<label htmlFor="skillproficiency3">Selected Skills Proficieny &nbsp; : &nbsp; &nbsp; &nbsp; {this.state.skillproficiencies[2]}</label>
					<select 
					    name="skillproficiency3"
					    id="skillproficiency3"
					    onChange={this.onSkillPick}>
						    <option hidden={true}>Waiting for assignment...</option>
                            <option hidden={true} disabled="disabled" default={true}>Waiting for assignment...</option>
						    { this.state.skillboard.filter(value => (value !== this.state.skillproficiencies[0]) && (value !== this.state.skillproficiencies[1]) && (value !== this.state.skillproficiencies[2]) && (value !== this.state.skillproficiencies[3])).map((value, index) => <option key={index} value={value}> {value} </option>)}
				    </select>
					</div>

					<div id="skillselect4" hidden={true}>
					<label htmlFor="skillproficiency4">Selected Skills Proficieny &nbsp; : &nbsp; &nbsp; &nbsp; {this.state.skillproficiencies[3]}</label>
					<select 
					    name="skillproficiency4"
					    id="skillproficiency4"
					    onChange={this.onSkillPick}>
						    <option hidden={true}>Waiting for assignment...</option>
                            <option hidden={true} disabled="disabled" default={true}>Waiting for assignment...</option>
						    { this.state.skillboard.filter(value => (value !== this.state.skillproficiencies[0]) && (value !== this.state.skillproficiencies[1]) && (value !== this.state.skillproficiencies[2]) && (value !== this.state.skillproficiencies[3])).map((value, index) => <option key={index} value={value}> {value} </option>)}
				    </select>
					</div>

		            <h5>Selected Skills:  &nbsp; &nbsp; &nbsp; {this.state.skillproficiencies[0]} &nbsp; &nbsp; &nbsp; {this.state.skillproficiencies[1]} &nbsp; &nbsp; &nbsp; {this.state.skillproficiencies[2]} &nbsp; &nbsp; &nbsp; {this.state.skillproficiencies[3]} <button type="button" onClick={this.onClassPick}>Reset</button></h5>
					
				</Form.Field>				
			</Form>
		</div>
		)
	}
}
