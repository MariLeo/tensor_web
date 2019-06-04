import React, { Component } from 'react';
import './css/App.css';
import Nav from './components/Nav';
import './css/bootstrap.min.css';



class Calendar extends Component{
	
	
	
		render(){
			return(
			<div>
				<p></p>
				<p align = "center">
				<iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23F6BF26&amp;ctz=Europe%2FMoscow&amp;src=cnUucnVzc2lhbiNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%230B8043"  width="800" height="600" frameborder="0" scrolling="no">
				</iframe>
				</p>	
			</div>				
		);
		}
	
}

export default Calendar;
