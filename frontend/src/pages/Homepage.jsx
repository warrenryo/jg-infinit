import {
    Navbar,
    HeroSection,
    Services,
    Video,
    Form
} from '../components/landingpage/component';

const Homepage = () => {
    return (
      <>
        <Navbar/>     
        <main>
            <article>
                <HeroSection/>
                <Services />
                <Video />
                <Form />
            </article>
        </main>
      </>
    );
  };
  
  export default Homepage;
  