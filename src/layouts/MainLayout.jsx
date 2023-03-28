const MainLayout = (props) => {
	return (
		<div>
			<div>{props.navbar}</div>
			<div>{props.content}</div>
			<div>{props.footer}</div>
		</div>
	);
};

export default MainLayout;
