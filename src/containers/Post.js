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

