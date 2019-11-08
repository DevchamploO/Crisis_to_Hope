import React, { Component } from 'react';

import '../stylesheets/about.css';

class About extends Component {
	render () {
		return (
			<section className='about sect' id='scrollto_about'>
				<div className='container'>
					<div className='row'>
					<blockquote className='col-sm-3'>Suicide is a major health concern.</blockquote>
					<div className='col-sm-9 description'>
						<p>
							Over a million people attempt suicide in The United States every year. From those attempts over 40,000 people die by suicide each year. It is the 10th leading cause of death. Worldwide approximately one million people take their own life each year. These statistics are likely much higher, due to underreporting. There is no single cause for suicide. It is complicated and tragic, but it is preventable. Knowing the signs and symptoms can save someone who is comtemplating taking their own life. However these signs are not always obvious. This is why Crisis to Hope can help.
						</p>
						<p>
							Sometimes vigilance and reaching out is all it takes. Crisis to Hope analyzes recent tweets from your area to find those that may be at risk. Then it lists those potential tweets so that you can reach out. Tweets are analyzed through an intellegent A.I. to filter anyone showing signs of crisis. Crisis to Hope uses IBM Watson and reseach from The University of Reading to filter and rate tweets to search for at risk individuals.
						</p>
					</div>
					</div>
				</div>
			</section>
		)
	}
}

export default About
