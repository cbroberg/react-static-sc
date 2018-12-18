/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { withRouteData } from 'react-static'
import { Link } from '@reach/router'
import { Parser } from 'html-to-react'

const htmlToReactParser = new Parser()

export default withRouteData(({ post }) => (
	<div>
		<Link to="/blog/">{'<'} Back</Link>
		<br />
		{/* <h3>{post.title}</h3> */}
		<p>{htmlToReactParser.parse(post.content)}</p>
	</div>
))

/* 
NOTE TO TESTER:

This example works equally fine with or without the html-to-react parser.
But it only works on localhost. When served with either yarn serve or
pushed to surge.sh (http://sophisticated-push.surge.sh/) the same error occurs. 
When the page is manually reloaded it arrives fine, but the react routing probably 
needs a fix. What to do?

*/
