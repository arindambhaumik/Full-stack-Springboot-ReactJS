const Footer = () => {
    return (
        <div className="d-flex flex-column">
			<footer className='mt-auto bg-info text-muted text-center'><b>This Full Stack Product Management system is developed By Arindam using Spring Boot and React JS
                | Today is: {new Date().toLocaleString() + ''} </b>
            </footer>			
		</div>
    );
}
 
export default Footer ;