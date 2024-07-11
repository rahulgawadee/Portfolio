import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/rahulgawadee/Fitness-website-Part1.git"
          h3="MERN-Stack"
          p="Fitness App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/rahulgawadee/React_Rahul-sPlanner.git"
          h3="React JS"
          p="Travel With Rahul"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/rahulgawadee/React_CourseProject.git"
          h3="React JS and Tailwind Css"
          p="Course Finder"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/rahulgawadee"
          h3="GITHUB"
          p="Visit My Github to see my More Intresting Projects and do Collaborate !"
        />
      </div>
    </section>
  );
}

export default Projects;
