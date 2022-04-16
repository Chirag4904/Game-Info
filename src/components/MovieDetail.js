import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";

const MovieDetail = () => {
	const { screen, movie } = useSelector((state) => state.detail);
	console.log(screen, movie);
	return (
		<div>
			<h1>hello</h1>
		</div>
	);
};
export default MovieDetail;
