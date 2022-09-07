import ProjectContainer from '../ProjectContainer';
import SubTitleAndDescription from '../SubTitleAndDescription';

export default function Huerta() {
	return (
		<ProjectContainer
			title="La escuela tiene una huerta!"
			when="2021"
			specialClass=""
			mainImg="./images/proyectos/huerta2.jpg"
		>
			<SubTitleAndDescription
				title="descripción"
				specialClass="subtitleClassProject"
				w="100"
			>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt placeat
					enim tenetur voluptatibus odit tempore delectus ipsam corrupti libero
					quas harum facere nisi, quibusdam repellendus ipsum iusto doloremque
					quidem sint.
				</p>
			</SubTitleAndDescription>
		</ProjectContainer>
	);
}
