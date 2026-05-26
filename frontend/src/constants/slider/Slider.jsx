// import CasestudySlider from '../casestudy';
import CasestudySlider from '../slider2/casestudy';
import ProjectSlider from '../slider2/projectSlider';
import ServicesSlider from '../slider2/servicesSlider';
// import ProjectSlider from '../projectSlider';
// import ServicesSlider from '../servicesSlider';
export default function Slider({ darkMode }) {
  // Example projects data - replace with your actual projects
  const projects = [
    {
      title: "Website Development",
      description: "Custom website built with React and Next.js",
      image: "https://images.pexels.com/photos/30885764/pexels-photo-30885764.jpeg" // Replace with your image path
    },
    {
      title: "Logo Design",
      description: "Brand identity and logo design for startups",
      image: "https://images.pexels.com/photos/6593545/pexels-photo-6593545.jpeg"
    },
    {
      title: "SEO Optimization",
      description: "Improve your website' search engine ranking",
      image: "https://images.pexels.com/photos/9822732/pexels-photo-9822732.jpeg"
    },
    {
      title: "Architecture Design",
      description: "Architecture Design",
      image:"https://images.pexels.com/photos/36477894/pexels-photo-36477894.jpeg"
    },
    {
      title: "Voice Over",
      description: "Professional voice recording for your projects",
      image: "https://images.pexels.com/photos/31393274/pexels-photo-31393274/free-photo-of-urban-architecture-building-with-yamamoto-kisho-sign.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
    },
    {
      title: "Social Media Marketing",
      description: "Grow your brand with effective social campaigns",
      image: "https://images.pexels.com/photos/15406294/pexels-photo-15406294.jpeg"
      },
      {
        title: "Website Development",
        description: "Custom website built with React and Next.js",
        image: "https://images.pexels.com/photos/30885764/pexels-photo-30885764.jpeg" // Replace with your image path
      },
      {
        title: "Logo Design",
        description: "Brand identity and logo design for startups",
        image: "https://images.pexels.com/photos/6593545/pexels-photo-6593545.jpeg"
      },
      {
        title: "SEO Optimization",
        description: "Improve your website' search engine ranking",
        image: "https://images.pexels.com/photos/9822732/pexels-photo-9822732.jpeg"
      },
      {
        title: "Architecture Design",
        description: "Architecture Design",
        image:"https://images.pexels.com/photos/36477894/pexels-photo-36477894.jpeg"
      },
      {
        title: "Voice Over",
        description: "Professional voice recording for your projects",
        image: "https://images.pexels.com/photos/31393274/pexels-photo-31393274/free-photo-of-urban-architecture-building-with-yamamoto-kisho-sign.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
      },
      {
        title: "Social Media Marketing",
        description: "Grow your brand with effective social campaigns",
        image: "https://images.pexels.com/photos/15406294/pexels-photo-15406294.jpeg"
      }
  ];
  const services = [
    {
      title: "Website Development",
      description: "Custom websites built with React and Next.js for high performance and scalability.",
      image: "https://images.pexels.com/photos/30885764/pexels-photo-30885764.jpeg"
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile apps built using React Native for seamless user experience.",
      image: "https://images.pexels.com/photos/8296105/pexels-photo-8296105.jpeg"
    },
    {
      title: "E-Commerce Solutions",
      description: "End-to-end e-commerce platforms with secure payment gateways and user-friendly UI.",
      image: "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg"
    },
    {
      title: "SEO & Digital Marketing",
      description: "Boost your online presence with advanced SEO strategies and digital marketing campaigns.",
      image: "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
    },
    {
      title: "UI/UX Design",
      description: "Create intuitive and engaging user interfaces with cutting-edge design principles.",
      image: "https://images.pexels.com/photos/326518/pexels-photo-326518.jpeg"
    },
    {
      title: "Website Development",
      description: "Custom websites built with React and Next.js for high performance and scalability.",
      image: "https://images.pexels.com/photos/30885764/pexels-photo-30885764.jpeg"
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile apps built using React Native for seamless user experience.",
      image: "https://images.pexels.com/photos/8296105/pexels-photo-8296105.jpeg"
    },
    {
      title: "E-Commerce Solutions",
      description: "End-to-end e-commerce platforms with secure payment gateways and user-friendly UI.",
      image: "https://images.pexels.com/photos/4050388/pexels-photo-4050388.jpeg"
    },
    {
      title: "SEO & Digital Marketing",
      description: "Boost your online presence with advanced SEO strategies and digital marketing campaigns.",
      image: "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
    },
    {
      title: "UI/UX Design",
      description: "Create intuitive and engaging user interfaces with cutting-edge design principles.",
      image: "https://images.pexels.com/photos/3184457/pexels-photo-3184457.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
    }
  ];
  

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
    <main
      className={`max-w-7xl mx-auto py-8 rounded-xl transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
      }`}
    >
      {/* Services Slider */}
      <div className="mb-12">
      <ServicesSlider projects={services} darkMode={darkMode} />
      </div>
  
      {/* Projects Slider */}
      <div className="mb-12">
        <ProjectSlider projects={projects} darkMode={darkMode} />
      </div>
  
      {/* Case Study Slider */}
     
    </main>
  </div>
  
  );
}