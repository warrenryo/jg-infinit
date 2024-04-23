import {
    Navbar,
    HeroSection,
    Services,
    Video,
    Form,
    About
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
                <About />
            </article>
        </main>
      </>
    );
  };
  
  export default Homepage;
  